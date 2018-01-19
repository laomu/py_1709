from django.db import models


# Create your models here.
class UserManager(models.Manager):
    # 定义一个对象管理器类型：继承django.db.models.Manager类型
    def create_user(self, **kw):
        return self.create(**kw)

    def delete_user(self):
        return self.delete()

    def update_user(self, **kw):
        return self.update(**kw)

    def find_all_user(self):
        return self.all()

    def find_condition_user(self, **kw):
        return self.filter(**kw)


class User(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    age = models.IntegerField(default=0)

    user_manager = UserManager()