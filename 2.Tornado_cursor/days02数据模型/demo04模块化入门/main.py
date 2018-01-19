"""
程序启动的入口，类似于Django的manage.py
在项目部署运行时，直接通过python main.py运行项目即可
"""
from tornado.web import Application, RequestHandler
from tornado.httpserver import HTTPServer
from tornado.ioloop import IOLoop

from .models_manage import UserManager, ArticleManager

# 定义视图处理类
class IndexHandler(RequestHandler):

    def get(self):
        user_list = UserManager.find_condition()
        self.render("index.html", user_list=user_list)


def main():
    # 构建app应用
    app = Application(
        # [
        #     (r'/', IndexHandler),
        # ],
        # template_path=os.path.join(..),
        # static_path=os.path.join(..),
        # debug=True
    )
    # 定义项目部署
    server = HTTPServer(app)
    server.listen(8000)
    # 循环监听
    IOLoop.current().start()


if __name__ == "__main__":
    main()# 启动程序