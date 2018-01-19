from django.shortcuts import render


def index(request):
    """
    渲染返回公司首页页面
    :param request: 请求对象
    :return: 返回渲染的数据
    """
    return render(request, "index.html")