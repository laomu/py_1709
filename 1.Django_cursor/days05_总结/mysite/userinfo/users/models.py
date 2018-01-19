from django.db import models
from . import models_manager


# Create your models here.
class Users(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    gender = models.CharField(max_length=10, default="待完善")
    age = models.IntegerField(default=0)
    birthday = models.DateField(null=True, blank=True)
    email = models.EmailField(null=True, blank=True, default="待完善")
    phone = models.CharField(max_length=20, null=True, blank=True, default="待完善")

    # 管理器对象
    users_manager = models_manager.UsersManager()
