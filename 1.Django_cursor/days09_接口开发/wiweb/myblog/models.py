from django.db import models


# Create your models here.
class Users(models.Model):
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
    nickname = models.CharField(max_length=50)


class UsersSay(models.Model):
    id = models.AutoField(primary_key=True)
    publish_time = models.DateTimeField()
    content = models.TextField()
    users = models.ForeignKey(Users, on_delete=models.CASCADE)


class Article(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=50)
    publish_time = models.DateTimeField()
    content = models.TextField()
    users = models.ForeignKey(Users, on_delete=models.CASCADE)


class Comment(models.Model):
    id = models.AutoField(primary_key=True)
    publish_time = models.DateTimeField()
    content = models.TextField()

    users = models.ForeignKey(Users)# 评论的发表人
    article = models.ForeignKey(Article)# 发表给那篇文章的评论
