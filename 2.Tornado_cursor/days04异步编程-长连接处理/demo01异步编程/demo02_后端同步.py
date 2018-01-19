'''
异步编程处理：
2. 通过后端程序实现和其他服务器之间的数据通信
> 通过同步的操作手段获取其他服务器的数据
> 通过异步的操作手段获取其他服务器的数据
> 扩展：压力测试~~指定并发访问测试服务器的承受最大限制！
'''
# 引入需要的模块
from tornado.web import Application, RequestHandler
from tornado.ioloop import IOLoop
from tornado.httpserver import HTTPServer
from tornado.httpclient import HTTPClient


# 定义视图处理类
class IndexHandler(RequestHandler):

    def get(self):
        self.render("index.html")


# 定义一个天气预报处理类
class WeatherHandler(RequestHandler):

    def get(self):
        # 同步方式~从其他服务器获取数据
        city = self.get_argument("city")
        # 创建一个客户端对象
        client = HTTPClient()
        # 抓取指定的url地址中的数据，得到一个响应对象response，抓取到的数据存放在body属性中
        response = client.fetch("http://wthrcdn.etouch.cn/weather_mini?city=" + city)
        print(response)
        print(response.body)
        self.write(response.body)


if __name__ == "__main__":
    import os
    BASE_DIR = os.path.dirname(__file__)
    # 构建web app
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
