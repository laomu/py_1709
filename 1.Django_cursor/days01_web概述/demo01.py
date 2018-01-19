"""
第一个web程序
"""

# 开发一个接口函数
def app(env, response):
    """
    接口函数
        ：本质上，就是一个普通函数
        ：特点：可以接受浏览器发送的url请求
        可以给浏览器返回数据
    """
    response("200 OK", [("Content-type", "text/html")])
    msg = "<h1>我的第一个web程序</h1>"
    # 返回数据给浏览器进行展示
    return [msg.encode("gbk")]


# 搭建web服务器
# 1.引入需要的模块
from wsgiref.simple_server import make_server
# 2. 创建一个服务器应用，将接口函数加载进来
print("server is starting....")
server = make_server("", 8000, app)
# 3. 启动服务器，提供网络服务
server.serve_forever()