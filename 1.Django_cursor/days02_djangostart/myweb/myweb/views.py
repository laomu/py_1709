from django.http import HttpResponse


def index(request):
    return HttpResponse("<h1>公司门户首页</h1>")