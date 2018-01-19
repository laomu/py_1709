from django.db import models
from . import models_manager


# Create your models here.
class Boy(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    gender = models.CharField(max_length=10, default="男")
    age = models.IntegerField(default=0)
    phone = models.CharField(max_length=20, default="待完善")
    email = models.CharField(max_length=20, default="待完善")

    boy_manager = models_manager.BoyManager()

    def __str__(self):
        return self.name

    # girl = models.OneToOneField(Girl)# 定义一个一对一的关系：这里会出错~NameError: Girl is not defined


class Girl(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    gender = models.CharField(max_length=10, default="女")
    age = models.IntegerField(default=0)
    phone = models.CharField(max_length=20, default="待完善")
    email = models.CharField(max_length=20, default="待完善")

    boy = models.OneToOneField(Boy, null=True, blank=True)

    girl_manager = models_manager.GirlManager()


class GirlSay(models.Model):
    id = models.AutoField(primary_key=True) # 编号
    content = models.TextField()    # 内容

    # 说说和用户之间的关系：一个用户可以有多条说说，一个说说只能属于一个用户
    girl = models.ForeignKey(Girl)

    gs_manager = models_manager.GirlSayManager()
