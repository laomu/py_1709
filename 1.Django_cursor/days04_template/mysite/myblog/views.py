from django.http import HttpResponse
from django.template import loader # loader加载器
from django.shortcuts import render # shortcuts快捷方式 render渲染器


# Django中最原始的方式：直接渲染字符串返回给浏览器展示[了解]
def index1(request):
    return HttpResponse("<h1>简单视图操作：html字符串</h1>")


# Django中封装的加载器对象，加载渲染网页[了解]
def index2(request):
    html = loader.get_template("myblog/index.html")
    # render 渲染
    return HttpResponse(html.render({}, request))


# Django中快捷操作：通过渲染器对象，直接返回指定的网页
def index3(request):
    return render(request, "myblog/index.html")
