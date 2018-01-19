'''
flask的配置和Django有点类似
    开发过程中的，配置选项的使用[编程方法]和tornado有点类似

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
    # 运行程序[配置选项，推荐使用这样的方式，可以将配置单独部署在一个配置文件中，引入使用]
    app.run(
        debug=True,
        host="0.0.0.0",
    )
    # app.run(**settings.config)

    #app.host = "0.0.0.0"
    #app.run()