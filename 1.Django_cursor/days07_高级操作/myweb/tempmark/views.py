from django.shortcuts import render, redirect
from django.core.urlresolvers import reverse

# Create your views here.
def index(request):
    # 递归调用：闭合循环~重定向访问了当前视图函数的路由！
    # return redirect(reverse("tp:index"))
    return render(request, "tempmark/index.html")


def p1(request):
    return render(request, "tempmark/page1.html")

def p2(request):
    return render(request, "tempmark/page2.html")

def p3(request):
    return render(request, "tempmark/page3.html")

def t1(request):
    return render(request, "tempmark/t1.html")

def t2(request):
    return render(request, "tempmark/t2.html")

def t3(request):
    return render(request, "tempmark/t3.html")