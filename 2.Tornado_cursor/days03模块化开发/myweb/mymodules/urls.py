'''
路由定义模块
'''
from . import views

urlpatterns = [
    (r'/', views.IndexHandler),
    (r'/login', views.LoginHandler),
    (r'/register', views.RegisterHandler),
]