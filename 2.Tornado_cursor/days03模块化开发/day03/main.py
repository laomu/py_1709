import tornado.web
from tornado.httpserver import HTTPServer
from tornado.ioloop import IOLoop

from mymodules import urls,settings

class Application(tornado.web.Application):

    def __init__(self):
        super().__init__(handlers=urls.urlpatterns,**settings.common)


def main():

    app = Application()

    server = HTTPServer(app)
    server.listen(8000)

    IOLoop.current().start()

if __name__ == '__main__':
    main()