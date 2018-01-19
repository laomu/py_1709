"""
tornado程序的参数处理
[表单操作][参数传递][模板语法]
"""
# 引入需要的模板
from tornado.web import Application, RequestHandler
from tornado.ioloop import IOLoop
from tornado.httpserver import HTTPServer
from tornado.options import define, options, parse_command_line

define("port", default=8000, help="启动程序的端口")


# 定义视图处理类
class IndexHandler(RequestHandler):

    def get(self, *args, **kwargs):
        user = {"name": "damu"}
        books = [
            {"name": "三体", "price": 12.00, "buycount": 2},
            {"name": "python基础教程", "price": 22.00, "buycount": 12},
            {"name": "java从入门到放弃", "price": 32.00, "buycount": 2},
            {"name": "php灰飞烟灭之路", "price": 18.00, "buycount": 1},
            {"name": "ruby不再", "price": 16.00, "buycount": 3},
            {"name": "delphy曾经的天下", "price": 19.00, "buycount": 21},
        ]
        self.render("index.html", user=user, books=books)


# 定义视图处理类~参数操作
class ParamsHandler(RequestHandler):

    def get(self):
        # get特有的接受参数方式
        #name = self.get_query_argument("name")
        # fav = self.get_query_arguments("fav")
        # 通用接受参数方式
        name = self.get_argument("name")
        fav = self.get_arguments("fav")
        print("接受到参数：", fav)

        user = {"name": name}
        self.render("index.html", user=user)

    def post(self):
        # post特有的接受参数方式
        #account = self.get_body_argument("account")
        #fav = self.get_body_arguments("fav")
        # 通用接受参数方式
        name = self.get_argument("name")
        fav = self.get_arguments("fav")

        print("接受到参数：", fav)

        user = {"name": account}
        self.render("index.html", user=user)


if __name__ == "__main__":
    import os
    BASE_DIR = os.path.dirname(__file__)
    # 构建web app
    app = Application(
        # 配置路由信息
        [
            (r'/', IndexHandler),
            (r'/params', ParamsHandler),
        ],
        # 项目配置信息
        template_path=os.path.join(BASE_DIR, "templates"),
        static_path=os.path.join(BASE_DIR, "static"),
        debug=True,
    )

    # 部署
    server = HTTPServer(app)
    server.listen(9000)

    # 启动事件轮询监听
    IOLoop.current().start()