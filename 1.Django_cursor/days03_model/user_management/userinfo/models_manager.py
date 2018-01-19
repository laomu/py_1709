"""
存放对象管理器的模块
"""
from django.db import models


class UserInfoManager(models.Manager):

    def create_user(self, **kw):
        return self.create(**kw)

    def delete_user(self, **kw):
        return self.delete()

    def update_user(self, **kw):
        return self.update(**kw)

    def find_all(self):
        return self.all()

    def find_condition(self, **kw):
        return self.filter(**kw)