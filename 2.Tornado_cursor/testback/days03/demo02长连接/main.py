from tornado.web import Application, RequestHandler
from tornado.ioloop import IOLoop
from tornado.httpserver import HTTPServer
from tornado.websocket import WebSocketHandler
from tornado.options import define, options

define("user_list", default=set())


class IndexViewHandler(RequestHandler):

    def get(self):
        self.render("index.html")


class ChatViewHandler(RequestHandler):

    def get(self):
        name = self.get_argument("name")
        user = [self, name]
        options.user_list.add(user)

        self.render("chat.html")


class ChatHandler(WebSocketHandler):

    def open(self):
        #options.user_list.add(self)

        for user in options.user_list:
            user[0].write_message("[%s]上线了" % user[1])

    def on_message(self, message):
        for user in options.user_list:
            user[0].write_message("[%s]：%s" % (self.request.remote_ip, message))

    def on_close(self):
        options.user_list.remove(self)

        for user in options.user_list:
            user[0].write_message("[%s]离线了" % user[1])

    def check_origin(self, origin):
        return True


if __name__ == "__main__":
    import os
    BASE_DIR = os.path.dirname(__file__)
    app = Application(
        [
            (r'/', IndexViewHandler),
            (r'/chat', ChatViewHandler),
            (r'/chats', ChatHandler),
        ],
        template_path=os.path.join(BASE_DIR, "templates"),
        static_path=os.path.join(BASE_DIR, "static"),
    )

    server = HTTPServer(app)
    server.listen(8000)

    IOLoop.current().start()

