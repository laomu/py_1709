"""
tornado内置服务器的操作
"""
# 引入需要的模块
from tornado.web import Application, RequestHandler
from tornado.ioloop import IOLoop
from tornado.httpserver import HTTPServer


# 定义视图处理类
class IndexHandler(RequestHandler):

    def get(self):
        self.write("<h1>hello httpserver!</h1>")


if __name__ == "__main__":
    # 构建一个web应用程序
    app = Application([(r'/', IndexHandler),])

    #app.listen(8000)

    # 把web应用程序部署到服务器中
    server = HTTPServer(app)
    server.listen(8000)

    # 启动轮询监听
    IOLoop.current().start()