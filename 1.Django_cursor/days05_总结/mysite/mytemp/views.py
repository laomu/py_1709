from django.shortcuts import render
from . import models


# Create your views here.
def index(request):
    # 1. 传递第一种数据：简单的变量赋值
    message = "欢迎访问本系统"

    # 2. 传递
    user = models.User(id=1, name="jerry")

    # 3. 传递一个列表
    msg_list = ["雪琪", "瓶儿", "小环"]

    # 4. 传递一个字典
    msg_dict = {"name": "拓跋晔", "age": 120}

    # 2.1. 程序结构 if结构
    login_user = "admin"
    # 2.2. 程序结构 for结构
    user1 = models.User(id=1, name="jerry")
    user2 = models.User(id=2, name="tom")
    user3 = models.User(id=3, name="shuke")
    user4 = models.User(id=4, name="beita")
    user5 = models.User(id=5, name="yuehao")

    ulist = [user1, user2, user3, user4, user5]
    #ulist = []


    return render(request, "mytemp/index.html", {"user": user, "msg": message, "mlist": msg_list, "mdict": msg_dict, \
                                                 "luser": login_user, "ulist": ulist})