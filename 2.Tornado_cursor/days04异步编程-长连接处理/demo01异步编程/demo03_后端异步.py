'''
后端程序异步操作：异步获取数据
'''
from tornado.web import Application, RequestHandler, asynchronous
from tornado.ioloop import IOLoop
from tornado.httpserver import HTTPServer
from tornado.httpclient import AsyncHTTPClient # 异步操作对象


# 定义首页视图处理类：用于获取展示网页
class IndexHandler(RequestHandler):

    def get(self):
        self.render("index.html")


# 定义异步操作天气预报的视图处理类
class WeatherHandler(RequestHandler):
    # 通过注解装饰器，告诉tornado这个get处理方法是异步的~不需要自动返回数据
    @asynchronous
    def get(self):
        # 获取参数数据
        city = self.get_argument("city")
        # 创建一个异步操作对象
        client = AsyncHTTPClient()
        # 异步对象抓取数据
        client.fetch("http://wthrcdn.etouch.cn/weather_mini?city=" + city, callback=self.deal_response)

    # 这个函数就是异步对象的回调函数，当异步数据获取完成时调用执行的函数
    def deal_response(self, response):
        content = response.body
        print(content)

        # 将数据返回给前端页面
        self.write(content)
        # 通过finish()函数告诉tornado异步操作结束，手工控制返回数据
        self.finish()


if __name__ == "__main__":
    import os
    BASE_DIR = os.path.dirname(__file__)
    app = Application(
        [
            (r'/', IndexHandler),
            (r'/weather', WeatherHandler),
        ],
        template_path=os.path.join(BASE_DIR, "templates"),
        static_path=os.path.join(BASE_DIR, "static"),
        debug=True
    )
    server = HTTPServer(app)
    server.listen(8000)

    IOLoop.current().start()
