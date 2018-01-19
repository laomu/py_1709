from django.shortcuts import render

from . import models


# Create your views here.
def index(request):
    return render(request, "gzsession/index.html")


def login(request):
    if request.method == "GET":
        return render(request, "gzsession/login.html")
    elif request.method == "POST":
        username = request.POST["username"]
        password = request.POST["password"]

        # 查询用户输入的账号+密码是否正确
        user = models.Users.objects.filter(username=username, password=password).first()

        if user is not None:
            # 登录成功
            # 在session中记录用户登录信息
            request.session["login"] = user
            return render(request, "gzsession/index.html", {"msg": "登录成功，欢迎访问"})
        else:
            return render(request, "gzsession/login.html", {"msg": "账号或者密码有误"})


def register(request):
    if request.method == "GET":
        return render(request, "gzsession/register.html")
    elif request.method == "POST":
        username = request.POST["username"]
        password = request.POST["password"]
        nickname = request.POST["nickname"]

        # TODO 功能：1确认密码 2已经注册的账号 3长度

        # 创建对象保存到数据库
        user = models.Users.objects.create(username=username, password=password, nickname=nickname)
        user.save()

        # 返回到登录页面
        return render(request, "gzsession/login.html", {"msg": "注册成功，请登录！"})