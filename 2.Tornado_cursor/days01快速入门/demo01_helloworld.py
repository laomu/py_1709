"""
这是一个tornado的入门程序：helloworld
"""
# 引入需要的模块
from tornado.web import RequestHandler, Application
from tornado.ioloop import IOLoop


# 定义一个视图处理类
class IndexHandler(RequestHandler):

    # 重写get处理方式
    def get(self):
        # 向客户端响应一个数据
        self.write("<h1>hello tornado!</h1>")


# 程序运行的入口
if __name__ == "__main__":
    # 根据视图处理类构建一个web application
    app = Application([
        # 定义路由访问
        (r'/', IndexHandler),
    ])
    # 监听端口
    app.listen(8000)
    # 启用tornado内置服务器事件轮询监听
    IOLoop.current().start()
