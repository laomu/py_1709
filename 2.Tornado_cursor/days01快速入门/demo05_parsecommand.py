"""
tornado应用程序接受命令行参数
"""
# 引入需要的模块
from tornado.web import Application, RequestHandler
from tornado.ioloop import IOLoop
from tornado.httpserver import HTTPServer
from tornado.options import define, options, parse_command_line

# 定义变量
define("port", default=8000, help="这是应用程序启动的端口，默认8000，可以通过--port=9000这样的方式来指定")


# 定义视图处理类
class IndexHandler(RequestHandler):

    def get(self):
        self.write("<h1>hello parse_command_line!</h1>")


if __name__ == "__main__":
    # 开始监听接受命令行参数数据~命令行的数据参数，必须是通过define指定
    parse_command_line()

    # 构建web application
    app = Application([
        (r'/', IndexHandler),
    ])

    # 部署项目
    server = HTTPServer(app)
    server.bind(options.port)
    server.start()

    # 启动轮询监听
    IOLoop.current().start()
