'''
web项目启动的入口
'''
import tornado.web
from tornado.httpserver import HTTPServer
from tornado.ioloop import IOLoop

from mymodules import urls, settings


# 自定义Application，继承tornado的Appliation，方便扩展增加新功能
class Application(tornado.web.Application):

    def __init__(self):
        super().__init__(urls.urlpatterns, **settings.common)


# 自定义主函数
def main():
    # 构建一个app应用
    app = Application()

    # 部署项目
    server = HTTPServer(app)
    server.listen(8000)

    # 启动轮询监听
    IOLoop.current().start()


# 启动项目
if __name__ == "__main__":
    main()


