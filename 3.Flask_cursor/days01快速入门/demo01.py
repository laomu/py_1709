'''
Flask继承了Django和Tornado的部分优点
在高并发处理上，类似于Django通过多线程的方式实现
在编程处理上，类似于Tornado通过手工编码的方式实现web application
'''
# 引入需要的模块
from flask import Flask  # 核心处理模块

# 通过当前文件构建一个app应用 ~~ 当前文件就是 web app程序的入口
app = Flask(__name__)


# 定义视图处理函数~路由+视图函数->加载到 app 中
@app.route("/")    # 访问路由
def index():       # 绑定的视图函数
    return "<h1>hello flask!</h1>"


@app.route("/login")
def login():
    return "<h1>member login!</h1>"


@app.route("/register")
def regist():
    return "<h1>member register!</h1>"


if __name__ == "__main__":
    # 运行程序
    app.run()

"""
路由和视图处理：
Djnago中：

Tornado中：

Flask中：

"""