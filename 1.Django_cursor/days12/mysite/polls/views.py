from django.shortcuts import get_object_or_404, render
from django.http import HttpResponseRedirect
from django.urls import reverse
from django.views import generic

from . import models


# 创建了一个视图处理类
class IndexView(generic.ListView):
    # 通过template_name定义该类如果调用时使用哪个网页进行数据展示：调用过程——自动
    template_name = 'polls/index.html'
    # 通过context_object_name定义了一个保存数据的全局变量，可以在模板中直接使用该变量
    context_object_name = 'latest_question_list'

    # 重写的查询函数，用于在类型被调用时，查询数据使用
    def get_queryset(self):
        """Return the last five published questions."""
        return models.Question.objects.order_by('-pub_date')[:5]


class DetailView(generic.DetailView):
    # 定义展示的模型类型
    model = models.Question
    # 定义需要渲染的网页页面
    template_name = 'polls/detail.html'


class ResultsView(generic.DetailView):
    model = models.Question
    template_name = 'polls/results.html'


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
    return HttpResponseRedirect(reverse("polls:results", args=(question_id,)))