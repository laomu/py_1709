from django.shortcuts import render
from . import models

boy_manager = models.Boy.boy_manager
girl_manager = models.Girl.girl_manager
gs_manager = models.GirlSay.gs_manager


# Create your views here.
def index(request):
    # 查询所有的boy和girl
    boy_list = boy_manager.find_all()
    girl_list = girl_manager.find_all()

    return render(request, "xiaoenai/index.html", {\
        "blist": boy_list, "glist": girl_list})


def boy_add(request):
    if request.method == "GET":
        return render(request, "xiaoenai/boy_add.html")
    elif request.method == "POST":
        # 获取参数
        name = request.POST["name"]
        age = request.POST["age"]

        # 保存用户到数据库
        boy_manager.create_obj(name=name, age=age)

        return render(request, "xiaoenai/boy_add.html", {"msg": "添加成功"})


def girl_add(request):
    if request.method == "GET":
        return render(request, "xiaoenai/girl_add.html")
    elif request.method == "POST":
        # 获取参数
        name = request.POST["name"]
        age = request.POST["age"]

        # 保存用户到数据库
        girl_manager.create_obj(name=name, age=age)

        return render(request, "xiaoenai/girl_add.html", {"msg": "美女添加成功"})


def girl_enai(request, g_id):
    girl = girl_manager.find_condition(pk=g_id).first()# 如果条件是id 主键
    print(girl)
    if request.method == "GET":
        # 查询所有单身的boy
        boy_list = boy_manager.find_condition(girl__isnull=True)

        return render(request, "xiaoenai/girl_enai.html", {"girl": girl, "blist": boy_list})
    elif request.method == "POST":
        b_id = request.POST["boy"]
        boy = boy_manager.find_condition(pk=b_id).first()

        girl.boy = boy
        girl.save()

        return render(request, "xiaoenai/girl_enai_succ.html", {"msg": "牵手成功！"})


def girl_detail(request, g_id):
    girl = girl_manager.find_condition(pk=g_id).first()

    if request.method == "GET":
        return render(request, "xiaoenai/girl_detail.html", {"girl": girl})

    elif request.method == "POST":
        # 发表说说
        content = request.POST["content"]
        # 创建说说对象并保存到数据库
        gs_manager.create_obj(content=content, girl=girl)

        # 返回详情页面
        return render(request, "xiaoenai/girl_detail.html", {"girl": girl})