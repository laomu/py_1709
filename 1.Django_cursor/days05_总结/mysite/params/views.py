from django.shortcuts import render


# Create your views here.
def index(request):
    return render(request, "params/index.html")


def get_test(request):
    """get参数传递"""
    name_ = request.GET["name"] # 从参数字典中获取值
    #p = request.GET # 获取到一个参数字典
    #name_ = p.getlist("name")

    print(name_)

    return render(request, "params/index.html")


def post_test(request):
    """post参数传递"""
    name_ = request.POST["username"]
    print("post参数接受：%s" % name_)
    return render(request, "params/index.html")


def rest_test(request, name):
    print("RESTful接受到数据：%s" % name)
    return render(request, "params/index.html")