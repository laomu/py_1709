from django.db import models


# Create your models here.
class Users(models.Model):
    id = models.AutoField(primary_key=True) # 编号
    name = models.CharField(max_length=50)  # 姓名
    # header_img = models.FileField(upload_to="./static/headers")         # 头像
    header_img = models.ImageField(upload_to="./static/headers")         # 头像
