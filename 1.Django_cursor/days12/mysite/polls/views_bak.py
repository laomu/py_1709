from django.http import HttpResponse
from django.shortcuts import render, get_object_or_404, redirect
#from django.core.urlresolver import reverse
from django.urls import reverse

from . import models


# Create your views here.
def index(request):
    """
    首页加载函数：加载最新发布的问题信息
    :param request:
    :return:
    """
    latest_question_list = models.Question.objects.order_by("-pub_date")[:5]

    #return HttpResponse("<h1>Hello Django2.0!this is the page for polls app!</h1>")
    return render(request, "polls/index.html", {"latest_question_list": latest_question_list})


def detail(request, question_id):
    """
    查询某个指定编号的问题详情
    :param request: 请求对象
    :param question_id:  要查询的某个问题的id编号
    :return:  响应数据
    """
    # return HttpResponse("问题详情页面，你要查看的问题编号是： %s." % question_id)
    #question = models.Question.objects.get(pk=question_id)
    question = get_object_or_404(models.Question, pk=question_id)
    return render(request, "polls/detail.html", {"question": question})


def results(request, question_id):
    """
    查询某个问题的结果信息
    :param request:  请求对象
    :param question_id:  问题编号
    :return: 响应对象
    """
    #response = "问题结果页面，你要查看的问题编号是： %s."
    #return HttpResponse(response % question_id)、

    #question = models.Question.objects.get(pk=question_id)
    question = get_object_or_404(models.Question, pk=question_id)
    return render(request, "polls/results.html", {"question": question})


def vote(request, question_id):
    """
    投票处理函数
    :param request: 请求对象
    :param question_id:  要给哪个问题投票，该问题的编号
    :return: 响应对象数据
    """
    question = get_object_or_404(models.Question, pk=question_id)
    try:
        c_id = request.POST["choice"]
        choice = models.Choice.objects.get(pk=c_id)
    except:
        # 如果出现异常信息，返回投票页面，展示错误信息
        return render(request, "polls/detail.html", {
            "question": question,
            "error_message": "没有这个解决方案或者您还没有选择对应的解决方案!"
        })

    # 修改投票数量
    choice.votes += 1
    choice.save()

    # return HttpResponse("You're voting on question %s." % question_id)
    # 官方文档中通过HttpResponseRedirect()进行跳转
    return redirect(reverse("polls:results", args=(question_id, )))