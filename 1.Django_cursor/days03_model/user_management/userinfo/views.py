from django.http import HttpResponse

from . import models

# 获取用户管理器对象
userinfo_manager = models.UserInfo.userinfo_manager


# Create your views here.
def index(request):
    """首页：展示所有用户"""
    ulist = userinfo_manager.find_all()

    msg = "<ul>"
    for userinfo in ulist:
        u = "<li>" + userinfo.name + "<a href='/userinfo/" +str(userinfo.id)+ "/delete/'>删除用户</a></li>"
        msg += u
    msg += "</ul>"

    return HttpResponse(msg)


def delete(request, u_id):
    """根据id删除用户"""
    print(u_id)
    # 根据用户编号查询到具体的用户
    userinfo = userinfo_manager.find_condition(id=u_id)
    # 删除当前用户
    #userinfo_manager.delete_user()
    userinfo.delete()

    return HttpResponse("<h1>delete ok!</h1><a href='/userinfo/'>返回首页</a>")

def update(reuqest):
    """修改用户数据"""
    pass

def save(request):
    """增加用户数据"""
    pass