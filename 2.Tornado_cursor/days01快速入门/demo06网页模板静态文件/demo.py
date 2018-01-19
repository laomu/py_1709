"""
tornado web app对于网页模板的处理和静态文件的操作
网页模板：html页面
    处理：定义html页面、渲染html页面，响应html页面[浏览器]
静态资源：图片/js/css/字体...
    操作：配置静态资源、查询静态资源[html]、响应数据
"""
# 引入tornado程序需要的包
from tornado.web import Application ,RequestHandler
from tornado.ioloop import IOLoop
from tornado.httpserver import HTTPServer
from tornado.options import define, options, parse_command_line

define("port", default=8000, help="web程序启动端口")


# 定义视图处理类
class IndexHandler(RequestHandler):

    def post(self):
        # 定义一个简单的数据
        msg = "这是一条来自服务器的问候！"
        # 渲染返回指定的页面——html网页
        self.render("index.html", info=msg)


if __name__ == "__main__":
    import os

    # 构建web app
    app = Application(
        # 1. 路由配置，类似Django urls.py
        [
            (r'/', IndexHandler),
        ],
        # 2. 项目信息配置， 类似Django settings.py
        # 添加配置，告诉tornado我们的网页模板在项目的那个位置
        template_path=os.path.join(os.path.dirname(__file__), "templates"),
        # 添加配置，告诉tornado我们的静态资源文件在项目那个位置
        static_path=os.path.join(os.path.dirname(__file__), "static"),
        # debug配置~默认True，项目发布修改为False
        debug=True,
    )

    # 部署
    server = HTTPServer(app)
    server.listen(options.port)

    # 启动轮询监听
    IOLoop.current().start()