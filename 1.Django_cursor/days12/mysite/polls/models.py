"""
文档注释：该模块主要用于进行Django2.0 app的测试应用
"""
from django.db import models
from django.utils import timezone

import datetime


class Question(models.Model):
    """
    问题模型：主要描述对应的问题
    """
    # 问题描述
    question_text = models.CharField(max_length=200, verbose_name="问题描述")
    # 问题发布时间
    pub_date = models.DateTimeField('发布时间')

    # 自定义处理方法:查看最新发布的问题信息
    def was_published_recently(self):
        return self.pub_date >= timezone.now() - datetime.timedelta(days=1)

    def __str__(self):
        return self.question_text


class Choice(models.Model):
    """
    解决方案：针对问题的解决方式
    """
    # 外键，用于多对一关联问题模型，描述的是一个问题可以有多个解决方案
    question = models.ForeignKey(Question, on_delete=models.CASCADE, verbose_name="问题描述")
    # 解决方案描述：
    choice_text = models.CharField(max_length=200, verbose_name="解决方案描述")
    # 投票：当前解决方案的投票数量~通过数量来描述某个解决方案的可行性
    votes = models.IntegerField(default=0, verbose_name="投票数量")

    def __str__(self):
        return self.choice_text
