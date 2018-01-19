"""
一个完整的web application
肯定不会用字符串来拼接网页！ 肯定是通过html编写的网页，然后再通过静态资源渲染网页样式和行为
在成型的网页中，和用户展示和交互我们后台的数据！

渲染网页，加载静态资源
"""
from flask import Flask, request, render_template

app = Flask(__name__)


@app.route("/")
def index():
    # 模拟从数据库中获取的数据 sqlalchemy处理的models和models_manager模块获取的数据
    persons = [
        {"name": "tom"},
        {"name": "jerry"},
        {"name": "shuke"},
        {"name": "beita"},
    ]
    # 返回首页网页视图,如果一旦使用render渲染网页
    # flask会自动在当前文件所在的目录中查询模板文件夹templates
    # 并在该文件夹下查询指定的网页index.html
    return render_template("index.html", plist=persons)


if __name__ == "__main__":
    app.run()

"""
静态文件和网页模板的处理：
Django中：
    子模块应用：templates/默认保存网页模板；static/默认保存静态资源；不需要配置
    根项目：settings.py中通过TEMPLATES>DIRS配置网页模板文件夹，通过STATICFILES_DIRS配置静态资源文件夹
Tornado中：
    通过tornado.web.Application中的配置选项
        template_path配置网页模板文件夹位置，static_path配置静态资源文件夹位置
Flask中：
    默认templates/中保存网页模板；static/中保存静态资源，不需要配置

模板语法操作：
Django中：
    默认使用自己的模板语法：Django Template Language:DTL语法
Tornado中：
    默认使用jinja模板语法：~经过一定改造的模板语法
Flask中：
    默认使用第三方的jinja2模板语法，是在DTL语法的基础上完善的一种专门给python使用的模板语法
"""