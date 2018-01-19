from django.shortcuts import render


# Create your views here.
def index(request):
    return render(request, "df/index.html")


def get_param(request):
    print(request.GET)
    print(request.GET["username"])
    print(request.GET["password"])
    print(request.GET["fav"])
    return render(request, "df/index.html")


def post_param(request):
    print(request.POST)
    print(request.POST["name"])
    print(request.POST["pass"])
    return render(request, "df/index.html")
