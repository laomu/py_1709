from django.http import HttpResponse


def index(request):
    return HttpResponse("<h1>公司博客首页</h1>")