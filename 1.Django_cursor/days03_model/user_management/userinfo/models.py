from django.db import models

from . import models_manager

# Create your models here.
class UserInfo(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    age = models.IntegerField(default=0)
    birthday = models.DateField(null=True, blank=True)


    userinfo_manager = models_manager.UserInfoManager()

