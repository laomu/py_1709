"""
tornado长连接测试——websocket
"""
from tornado.web import Application, RequestHandler
from tornado.ioloop import IOLoop
from tornado.httpserver import HTTPServer
from tornado.websocket import WebSocketHandler


class IndexHandler(RequestHandler):

    def get(self):
        self.render("index.html")


class ChatHandler(WebSocketHandler):
    """
    和客户端保持长连接的视图处理类
    需要重写父类的方法完成和客户端的通信
    """
    # 定义一个集合，用来保存所有接入的客户端连接
    conns = set()

    # 当一个新的客户端连接进来的时候,open()函数自动执行
    def open(self):
        print("open()函数执行了，一个新的连接[%s]进来了" % self.request.remote_ip)
        self.conns.add(self)# 将一个新的连接加入到集合中

        for conn in self.conns:
            # 向所有接入服务器的websocket连接发送消息
            print("向所有人发送消息")
            conn.write_message("[%s]进入了聊天室" % self.request.remote_ip)

    def on_message(self, message):
        # 该函数会自动接收客户端发送的数据，数据包含在message变量中
        # 将message消息发送给所有的连接到服务器的websocket
        print("一个客户端给所有人发送了消息：%s" % message)
        for conn in self.conns:
            conn.write_message("(%s)说：%s" % (self.request.remote_ip, message))

    def on_close(self):
        print("一个[%s]连接退出了" % self.request.remote_ip)
        # 当一个客户端连接断开时自动执行的函数
        self.conns.remove(self)
        # 然后给所有接入的人发送消息，某个家伙永远离开了我们
        for conn in self.conns:
            conn.write_message("【%s已经走了】" % self.request.remote_ip)


    def check_origin(self, origin):
        return True



if __name__ == "__main__":
    import os
    BASE_DIR = os.path.dirname(__file__)

    app = Application(
        [
            (r'/', IndexHandler),
            (r'/chat', ChatHandler),
        ],
        template_path=os.path.join(BASE_DIR, "templates"),
        static_path=os.path.join(BASE_DIR, "static"),
    )

    server = HTTPServer(app)
    server.listen(8000)

    IOLoop.current().start()

