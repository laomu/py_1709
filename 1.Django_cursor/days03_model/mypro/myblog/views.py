from django.http import HttpResponse
from . import models

# 获取用户管理器对象
user_manager = models.User.user_manager

# Create your views here.
def index(request):
    """查看所有用户数据"""
    '''
    user_list = models.User.objects.all()

    msg = "<ul>"
    for user in user_list:
        u = "<li>" + user.name + "</li>"
        msg += u
    msg += "</ul>"

    return HttpResponse(msg)
    # return HttpResponse("<p>" + user_list.first().name+"</p>")
    # return HttpResponse("<h1>ok!</h1>")
    '''
    # 管理器对象：查询所有用户
    user_list = user_manager.find_all_user()
    msg = "<ul>"
    for user in user_list:
        u = "<li>" + user.name + "</li>"
        msg += u
    msg += "</ul>"

    return HttpResponse(msg)

