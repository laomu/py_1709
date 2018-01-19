from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^(?P<u_id>\d+)/delete/', views.delete, name="delete"),
    url(r'^.*$', views.index, name="index"),
]

'''
删除用户：完全没有听懂 [明天讲解]
Manager管理器对象：没有理解 
shell窗口：修改数据的一个小坑[✔]
shell是什么东西：终端命令行窗口的代称，也是linux/unix下的一种脚本语言[✔]
数据模型增删改查3种方式：1[对象直接操作-了解] 2[类方法操作-忘掉] 3[管理器对象-掌握][✔]
开发步骤：
    1. 创建项目
    2. 创建子应用
    3. 注册子应用--[INSTALLED_APPS, 路由]
    4. 连接数据库
    5. 子应用数据模型类开发
    6. 数据库同步
    7. 功能开发[从视图模块views.py开始写]


'''