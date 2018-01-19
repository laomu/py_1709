from django.db import models


# Create your models here.
class Author(models.Model):
    # 定义自己的类型，需要继承django.db.models.Model类型
    # 只有这样继承了该类型之后，Django才会对你的自定义类型进行管理

    # 通过Django内置的方式创建属性
    id = models.AutoField(primary_key=True)# AutoField()创建自动增长的属性
    name = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    gender = models.CharField(max_length=50, default="待定")
    age = models.IntegerField(default=0)
    birthday = models.DateField()
    phone = models.CharField(max_length=20, default="待定")
