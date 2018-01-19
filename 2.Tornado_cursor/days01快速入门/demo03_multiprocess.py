"""
tornado默认单进程的操作默认
"""
# 引入需要的模块
from tornado.web import Application, RequestHandler
from tornado.ioloop import IOLoop
from tornado.httpserver import HTTPServer


# 定义视图处理类
class IndexHandler(RequestHandler):

    def get(self, *args, **kwargs):
        self.write("<h1>hello multiprocess!</h1>")


if __name__ == "__main__":
    # 构建web application
    app = Application(
        [
            (r'/', IndexHandler),
        ]
    )

    # 将web application 部署到Server中
    server = HTTPServer(app)
    server.bind(8000)# 绑定8000端口
    server.start() # 启动服务器，如果不设置参数或者参数为1，默认启动1个进程
    # 不设置参数或者参数为0，根据当前操作系统的核心数量创建进程数量
    # 如果设置了大于0的参数，默认启动指定数量的进程

    # 启动事件轮询监听
    IOLoop.current().start()
