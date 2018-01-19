from django.shortcuts import render
from django.views.decorators.http import require_POST
from django.http import JsonResponse
from django.forms.models import model_to_dict

from datetime import datetime

from . import models


# Create your views here.
def index(request):
    # 获取<当前用户>所有的说说
    s_list = models.WiSay.objects.filter().order_by("-publish_time")
    return render(request, "wisay/index.html", {"s_list": s_list})


@require_POST # 当前方法只允许post方式访问
def say(request):
    """
    核心发表说说的web接口
    """
    #if request.method == "POST":
    #    ....
    # 获取数据
    content = request.POST["content"]
    publish_time = datetime.now()

    # 创建对象并保存到数据库
    wisay = models.WiSay.objects.create(content=content, publish_time=publish_time)
    wisay.save()

    # 返回给调用者数据[json格式的字符串]
    return JsonResponse(model_to_dict(wisay))
