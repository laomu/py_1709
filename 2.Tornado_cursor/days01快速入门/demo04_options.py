"""
tornado程序中定义变量
"""
# 引入需要的模块
from tornado.web import Application, RequestHandler
from tornado.ioloop import IOLoop
from tornado.httpserver import HTTPServer
# define定义变量；options获取变量
from tornado.options import define, options

# 定义一个变量，用于保存端口
define("port", default=8000, type=int, help="这是启动程序的端口，默认使用8000")


# 定义视图处理类
class IndexHandler(RequestHandler):

    def get(self, *args, **kwargs):
        self.write("<h1>hello options</h1>")


if __name__ == "__main__":
    # 构建一个web应用程序
    app = Application([
        (r'/', IndexHandler),
    ])

    #部署项目
    server = HTTPServer(app)
    server.bind(options.port)
    server.start()

    # 启动轮询监听
    IOLoop.current().start()