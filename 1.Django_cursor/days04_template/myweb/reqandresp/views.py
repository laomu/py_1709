from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.
def index(request):
    print(request)
    print(request.encoding)
    print(request.method)
    print(request.COOKIES)
    print(request.path)
    print(request.scheme)

    return HttpResponse("<h1>请求和响应对象，OK！</h1>")


def index2(request):
    response = HttpResponse()
    response.write("<h1>响应对象OK！</h1>")
    response["info"] = "大牧"
    return response