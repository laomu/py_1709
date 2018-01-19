from django.shortcuts import render

from . import models

###################################
# 获取模型数据的管理器对象
users_manager = models.Users.users_manager


# Create your views here.
def index(request):
    # 获取所有用户数据
    user_list = users_manager.find_all_users()
    # 返回首页页面
    return render(request, "users/index.html", {"ulist": user_list})


def users_add(request):
    """
    添加新用户数据的函数
    """
    if request.method == "GET":
        # 返回一个页面
        return render(request, "users/users_add.html")
    elif request.method == "POST":
        # 获取请求数据
        name = request.POST["name"]
        gender = request.POST["gender"]
        age = request.POST["age"]
        email = request.POST["email"]

        # 创建对象并保存导数据库
        users_manager.create_users(name=name, gender=gender, age=age, email=email)

        # 返回增加用户页面
        return render(request, "users/users_add.html", {"msg": "用户添加成功！"})


def users_detail(request, u_id):
    # 查询用户
    users = users_manager.find_single(id=u_id)
    # 返回页面
    return render(request, "users/users_detail.html", {"users": users})


def users_update(request, u_id):
    # 查询用户
    users = users_manager.find_single(id=u_id)
    # 判断用户请求方式
    if request.method == "GET":
        return render(request, "users/users_edit.html", {"users": users})
    elif request.method == "POST":
        # 真实修改
        # 获取数据
        name = request.POST["name"]
        gender = request.POST["gender"]
        age = request.POST["age"]
        email = request.POST["email"]
        phone = request.POST["phone"]
        birthday = request.POST["birthday"]

        # 更新数据
        users.name = name
        users.gender = gender
        users.age = age
        users.email = email
        users.phone = phone
        users.birthday = birthday

        # 保存数据
        users.save()

        # 返回修改页面
        return render(request, "users/users_edit.html", {"msg": "修改成功！"})


def users_delete(request, u_id):
    # 查询对象
    users = users_manager.find_single(id=u_id)
    users.delete()

    # 返回删除成功页面
    return render(request, "users/users_delete.html")