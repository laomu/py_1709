from django.shortcuts import render, redirect
from django.core.urlresolvers import reverse

from . import models


# Create your views here.
def index(request):

    # 获取【当前登录】[正在保持]的用户
    customer = request.session.get("login")
    # 查询对应的菜单
    m_list = models.Menus.objects.filter(ctype=customer.ctype)

    return render(request, "gzsession2/index.html", {"m_list": m_list})


def login(request):
    if request.method == "GET":
        return render(request, "gzsession2/login.html")
    elif request.method == "POST":
        # 获取用户登录数据
        username = request.POST["username"]
        password = request.POST["password"]

        # 查询用户数据是否存在
        try:
            customer = models.Customer.objects.get(username=username,\
                                                   password=password)
            # 无异常，则登录成功
            # 通过session保存用户登录状态
            request.session["login"] = customer
            # 返回到首页【调用首页的路由，执行首页视图处理函数】
            return redirect(reverse("gzsession2:index"))
        except:
            return render(request, "gzsession2/login.html", {"msg": "账号或者密码有误，请重新登录"})

def register(request):
    if request.method == "GET":
        return render(request, "gzsession2/register.html")
    elif request.method == "POST":
        # 获取注册数据
        username = request.POST["username"]
        password = request.POST["password"]
        nickname = request.POST["nickname"]

        # 创建并且保存用户数据到数据库
        ctype = models.CusType.objects.get(id=2)# 丛数据库中查询得到一个会员类型对象

        customer = models.Customer.objects.create(username=username,\
                                                  password=password,\
                                                  nickname=nickname,\
                                                  ctype=ctype)
        customer.save()

        # 注册完成，跳转到登录页面
        return render(request, "gzsession2/login.html", {"msg": "注册成功，欢迎使用新账号登录"})



def all_customer(request):
    pass


def selfinfo(request):
    pass