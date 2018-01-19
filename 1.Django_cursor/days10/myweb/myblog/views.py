from django.shortcuts import render
from django.views.decorators.http import require_POST

from . import models


# Create your views here.
def index(request):
    return render(request, "myblog/index.html")


@require_POST
def upload(request):
    # 获取文件
    file = request.FILES["myfile"]
    print(file)

    # 文件上传的方式是Django底层操作的方式~
    with open("test.jpg", "wb") as f:
        for content in file.chunks():
            f.write(content)

    return render(request, "myblog/index.html", {"msg": "上传成功"})


@require_POST
def header_upload(request):
    # 获取数据
    name = request.POST["name"]
    header = request.FILES["header"]

    # 创建类型并保存数据
    user = models.Users.objects.create(name=name, header_img=header)
    user.save()

    return render(request, "myblog/index.html", {"user": user})