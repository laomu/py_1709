from django.http import HttpResponse
from django.shortcuts import render

from . import models
person_manager = models.Person.p_manager

from . import cache_model

# Create your views here.
def index(request):
    # 数据查询操作
    # print("丛数据库中查询数据")
    #plist = person_manager.find_all()
    plist = cache_model.find_all_person()

    return render(request, "cachepy/index.html", {"plist": plist})


def add(request):
    if request.method == "GET":
        return render(request, "cachepy/add.html")

    elif request.method== "POST":
        name = request.POST["name"]
        person_manager.create_obj(name=name)

        # 告诉cache_model同步缓存数据
        cache_model.find_all_person(True)

        return render(request, "cachepy/add.html", {"msg": "添加成功"})