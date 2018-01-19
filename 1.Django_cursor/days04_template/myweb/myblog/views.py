from django.shortcuts import render


# Create your views here.
def index(request):
    return render(request, "myblog/index.html")


def login(request):
    return render(request, "myblog/login.html")


def register(request):
    return render(request, "myblog/register.html")