from django.http import HttpResponse


def index(request):
    return HttpResponse("<h1>项目首页</h1>")


def login(request):
    return HttpResponse("<h1>用户登录</h1>")


def register(request):
    return HttpResponse("<h1>新用户注册</h1>")