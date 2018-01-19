from tornado.web import Application, RequestHandler, authenticated
from tornado.ioloop import IOLoop
from tornado.httpserver import HTTPServer
from tornado.options import define, options

define("port", default=8000)


class IndexHandler(RequestHandler):

    def get_current_user(self):
        name = self.get_secure_cookie("login")
        if name is not None:
            return True
        return False

    @authenticated# authenticated装饰器~用于判断用户是否具有登录状态
    def get(self):
        # 获取cookie中的数据
        name = self.get_secure_cookie("login")
        self.render("index.html", name=name)


class LoginHandler(RequestHandler):

    def get(self):
        self.render("login.html")

    def post(self):
        # 记录用户登录状态
        name = self.get_argument("name")
        self.set_secure_cookie("login", name, expires_days=None)
        # 请求重新转发到下一个路由
        self.redirect("/")



if __name__ == "__main__":
    import os
    BASE_DIR = os.path.dirname(__file__)
    app = Application(
        [
            (r'/', IndexHandler),
            (r'/login', LoginHandler),
        ],
        template_path=os.path.join(BASE_DIR, "templates"),
        cookie_secret='yYsdHBeySj2XPhzewQYsycmLHRwXsko9lz4c3sEGLMnJix0cF7JKPZc+HN7BBizJ',
        xsrf_cookies=True,
        debug=True,
        login_url='/login',

    )

    server = HTTPServer(app)
    server.listen(options.port)
    IOLoop.current().start()