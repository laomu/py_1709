from django.shortcuts import render

from . import models

# Create your views here.
def index(request):
    # 查询所有类型
    goodstype_list = models.GoodsType.objects.all()
    return render(request, "goodstype/index.html", {"gtlist": goodstype_list})


def add(request):
    if request.method == "GET":
        # 查询所有类型
        gt_list = models.GoodsType.objects.filter()
        return render(request, "goodstype/add.html", {"msg": "", "gtlist": gt_list})
    elif request.method == "POST":
        name = request.POST["name"]

        p_id = request.POST["parent"]
        print(p_id)
        if p_id == "":
            parent = None
        else:
            parent = models.GoodsType.objects.filter(pk=p_id).first()
            print(parent)

        gt = models.GoodsType.objects.create(name=name, pid=parent)
        gt.save()
        return render(request, "goodstype/add.html", {"msg": "添加成功"})
