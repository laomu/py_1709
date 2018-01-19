from django.shortcuts import render, redirect
from django.core.urlresolvers import reverse
from django.forms.models import model_to_dict
from django.http import JsonResponse, HttpResponse
from django.views.decorators.http import require_GET,require_POST

from datetime import datetime
from io import BytesIO

from . import models
from . import utils

# Create your views here.
def index(request):
    users = request.session.get("login")
    print(users)
    if users is not None:
        say_list = models.UsersSay.objects.filter(users=users)
    else:
        say_list = None
    return render(request, "myblog/index.html", {"say_list": say_list})


def logout(request):
    del request.session["login"]
    return redirect(reverse("myblog:index"))


def login(request):
    if request.method == "GET":
        return render(request, "myblog/login.html")
    elif request.method == "POST":
        username = request.POST["username"]
        password = request.POST["password"]

        try:
            users = models.Users.objects.get(username=username,\
                                         password=password)
            request.session["login"] = users
            return redirect(reverse("myblog:index"))
        except:
            return render(request, "myblog/login.html", {"msg": "账号或者密码有误u"})


def register(request):
    if request.method == "GET":
        return render(request, "myblog/register.html")
    elif request.method == "POST":
        username = request.POST["username"]
        password = request.POST["password"]
        confirm = request.POST["confirm"]
        nickname = request.POST["nickname"]
        vcode = request.POST["vcode"]

        if vcode != request.session.get("check_code"):
            return render(request, "myblog/register.html", {"msg": "验证码输入有误"})

        try:
            models.Users.objects.get(username=username)
            return render(request, "myblog/register.html", {"msg": "账号已经存在"})
        except:
            if password != confirm:
                return render(request, "myblog/register.html", {"msg": "两次密码输入不一致"})

            models.Users.objects.create(username=username, password=password, nickname=nickname)
            return render(request, "myblog/login.html", {"msg": "注册成功，欢迎使用新账号登录"})


def users_say(request):
    if request.method == "GET":
        # 查询所有自己的说说
        users = request.session.get("login")
        print(users)
        if users is not None:
            say_list = models.UsersSay.objects.filter(users=users)
        else:
            say_list = None
        return render(request, "myblog/users_say.html", {"say_list": say_list})
    elif request.method == "POST":
        content = request.POST["content"]
        publish_time = datetime.now()
        users = request.session.get("login")

        say = models.UsersSay.objects.create(content=content, publish_time=publish_time, users=users)

        return JsonResponse(model_to_dict(say))


def article_pub(request):
    if request.method == "GET":
        return render(request, "myblog/article_pub.html")

    elif request.method == "POST":
        title = request.POST["title"]
        content = request.POST["content"]
        publish_time = datetime.now()
        users = request.session.get("login")

        article = models.Article.objects.create(title=title,\
                                                content=content,\
                                                publish_time=publish_time,\
                                                users=users)
        return render(request, "myblog/article_pub.html", {"msg": "发表成功"})


@require_GET
def article_self(request):
    # 查询所有自己的说说
    users = request.session.get("login")
    print(users)
    if users is not None:
        article_list = models.Article.objects.filter(users=users)
    else:
        article_list = None

    return render(request, "myblog/article_self.html", {"article_list": article_list})


def article_all(request):
    # 查询所有自己的说说
    users = request.session.get("login")
    print(users)
    if users is not None:
        article_list = models.Article.objects.all()
    else:
        article_list = None
    return render(request, "myblog/article_all.html", {"article_list": article_list})


@require_GET
def article_detail(request, a_id):
    article = models.Article.objects.get(pk=a_id)
    return render(request, "myblog/article_detail.html", {"article": article})


@require_POST
def comment_pub(request):
    content = request.POST["content"]
    users = request.session.get("login")
    a_id = request.POST["a_id"]
    article = models.Article.objects.get(pk=a_id)
    publish_time = datetime.now()

    comment = models.Comment.objects.create(content=content,
                                            users=users,
                                            article=article,
                                            publish_time=publish_time)

    return JsonResponse(model_to_dict(comment))


def verify_code(request):
    # 在内存中开辟空间用以生成临时的图片
    f = BytesIO()
    img, code = utils.create_code()
    request.session['check_code'] = code
    img.save(f, 'PNG')
    return HttpResponse(f.getvalue())
