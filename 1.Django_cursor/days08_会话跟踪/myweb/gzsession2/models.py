from django.db import models


# Create your models here.
class CusType(models.Model):
    id = models.AutoField(primary_key=True)  # 0 会员  1 管理员
    name = models.CharField(max_length=50)


class Customer(models.Model):
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
    nickname = models.CharField(max_length=50)

    ctype = models.ForeignKey(CusType)


class Menus(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    path = models.CharField(max_length=200)

    ctype = models.ForeignKey(CusType)