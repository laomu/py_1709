import os
from flask import Flask, request, redirect, url_for, flash
from werkzeug.utils import secure_filename

# 文件上传路径
UPLOAD_FOLDER = '/path/to/the/uploads'
# 允许上传文件的文件名称：任何时候，不要让用户选择上传的文件[用户是千变万化的！]
ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])

app = Flask(__name__)
# 将上传路径配置给web应用程序
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# 定义一个函数，用于判断文件的后缀名称
def allowed_file(filename):
    # headerimg.jpg
    # "." in filename  ==  "." in "headerimg.jpg" >> True / False
    # "headerimg.jpg".rsplit('.', 1)[1].lower >> "jpg" in ALLOWED_EXTENSIONS >> True/Flase
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


# 上传文件的核心操作代码，允许通过get/post两种方式访问这个视图函数
@app.route('/', methods=['GET', 'POST'])
def upload_file():
    # 如果用户通过post请求，应该是要上传文件了
    if request.method == 'POST':
        # 判断用户提交的表单数据库中是否包含了 文件
        if 'file' not in request.files:
            # 在响应中给用户返回一个消息
            flash('用户没有提交文件')
            # 如果没有包含文件，直接重定向跳转到用户访问的路径中
            return redirect(request.url)

        # 获取用户表单中提交的文件，根据name属性直接获取
        file = request.files['file']
        # 判断文件名称是否存在，如果不存在提示用户没有选择文件
        if file.filename == '':
            flash('用户没有选择任何文件')
            return redirect(request.url)

        # 判断用户已经上传了文件，判断~文件的后缀名称是否满足需要
        if file and allowed_file(file.filename):
            # 判断并获取文件的核心名称，避免出现文件注入覆盖问题，获取文件的真名称
            filename = secure_filename(file.filename)
            # 保存文件
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            # 请求重定向跳转到指定的视图函数
            return redirect(url_for('uploaded_file',
                                    filename=filename))


if __name__ == "__main__":
    s = "headeimg.mp4"
    print(allowed_file(s))


"""
文件上传：web项目中非常重要的常见的一个功能
在文件上传操作过程中，会存在一定的安全问题，业务功能涉及到用户将文件提交到服务器进行保存
所以要注意用户有可能提交非法文件到服务器中的某个路径，覆盖服务器上的文件，达到远程代码通过
上传的文件注入到服务器进行提权的漏洞！某些非法访问人员就有可能获取到服务器的最高权限！



"""