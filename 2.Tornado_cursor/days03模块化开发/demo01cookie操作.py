from tornado.web import RequestHandler, Application
from tornado.ioloop import IOLoop
from tornado.httpserver import HTTPServer
from tornado.options import options, define

define("port", default=8000)


class IndexHandler(RequestHandler):

    def get(self):
        # 向cookie中存储数据
        self.set_cookie("info", "damumu")
        self.set_cookie("msg", "liubanxian", expires_days=10)
        self.write("<h1>cookie operations!</h1>")


class LoginHandler(RequestHandler):

    def get(self):
        info_ = self.get_cookie("msg")
        print(info_)
        self.write("cookie value is : %s" % info_)


if __name__ == "__main__":
    app = Application(
        [
            (r'/', IndexHandler),
            (r'/login', LoginHandler),
        ]
    )

    server = HTTPServer(app)
    server.listen(options.port)

    IOLoop.current().start()