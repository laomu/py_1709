'''
视图处理类模块
'''
# 引入需要的模块
from tornado.web import RequestHandler


from . import models_manager


# 定义一个基础处理类型用于继承
class BaseHandler(RequestHandler):
    # 方便后续对RequestHandler进行扩展
    # 增加新的公共功能之后，所有自定义的Handler类型都会具备这个功能
    pass


# 定义主页视图处理类
class IndexHandler(BaseHandler):
    def get(self):
        # 查询所有的用户信息
        person_list = models_manager.PersonManager().find_condition()
        self.render("index.html", plist=person_list)


# 定义登录视图处理类
class LoginHandler(BaseHandler):

    def get(self):
        self.render("login.html")


# 定义注册视图处理类
class RegisterHandler(BaseHandler):

    def get(self):
        self.render("register.html")
