from django.shortcuts import render, redirect
from django.core.urlresolvers import reverse


# Create your views here.
def index(request):
    # 模拟从数据库中查询到数据
    msg = "hello url!"
    return render(request, "urlresolver/index.html", {"msg": msg})


def detail(request, obj_id):
    # 模拟从数据库查询到数据
    user = {"id": obj_id, "name": "jerry", "age": 18}
    return render(request, "urlresolver/detail.html", {"user": user})


def delete(request):
    # 模拟删除成功
    print("删除成功")
    # 返回首页
    # 重新查询首页需要的所有数据：造成代码冗余
    # return render(request, "urlresolver/index.html")

    # 查询name名称为index的路由，得到对应的视图处理函数并调用
    return redirect(reverse("ul:index"))
