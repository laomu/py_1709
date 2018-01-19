"""
文件上传功能：是表单处理中的一部分重要的功能
    表单处理~通过get/post/..方式的请求方式，和服务器进行数据交互的一个web功能
    普通数据处理：搜索~注册~登陆~
        表单是前端网页和用户交互最直接的一种手段
    文件数据处理：头像上传、资源上传...
        最常见的一个重要功能
    Django、Tornado文件上传操作
        Flask，文件上传：重要操作
"""
from flask import Flask, render_template, request, redirect

import os


app = Flask(__name__)


# 获取页面的视图处理函数
@app.route("/")
def index():
    return render_template("index.html")


# 文件上传实际操作
@app.route("/upload")
def upload():
    # 获取文件
    file = request.files["headerimg"]
    # 保存文件
    file.save(os.path.join(os.path.dirname(__file__)) + "/headerimg/", file.filename)
    # 返回上传结束的页面
    return redirect("index")


def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS