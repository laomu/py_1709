"""
tornado websocket长连接V2.0升级版
"""
from tornado.web import Application, RequestHandler
from tornado.ioloop import IOLoop
from tornado.httpserver import HTTPServer
from tornado.websocket import WebSocketHandler


# 定义聊天视图处理类
class ChatViewHandler(RequestHandler):

    def get(self):
        self.render("chat.html")



# 定义聊天消息长连接处理类
class ChatHandler(WebSocketHandler):
    # 定义一个保存所有用户的集合
    online_users = set()

    # 重写open()函数，保存接入的用户数据
    def open(self):
        # 将接入的数据保存到集合中
        self.online_users.add(self)
        # 向所有人发送消息
        for user in self.online_users:
            user.write_message("[%s上线了]" % self.request.remote_ip)


    # 重写on_message()函数，获取客户端发送的消息并转发给所有用户
    def on_message(self, message):
        # 向所有人发送消息
        for user in self.online_users:
            user.write_message("<%s>说: %s" % (self.request.remote_ip, message))


    # 重写on_close()函数，当断开某个连接时，移除在服务器记录的数据
    def on_close(self):
        # 从连接集合中移除某个断开的连接
        self.online_users.remove(self)
        # 向所有人发送消息
        for user in self.online_users:
            user.write_message("【%s永远的离开了我们!】" % self.request.remote_ip)

    # 允许跨域访问
    def check_origin(self, origin):
        return True


if __name__ == "__main__":
    import os
    BASE_DIR = os.path.dirname(__file__)

    app = Application(
        [
            (r'/', ChatViewHandler),
            (r'/chat', ChatHandler),
        ],
        template_path=os.path.join(BASE_DIR, "templates"),
        static_path=os.path.join(BASE_DIR, "static"),
    )

    server = HTTPServer(app)
    server.listen(8000)

    IOLoop.current().start()
