"""
管理器对象模块
"""
from django.db import models


class UsersManager(models.Manager):

    def create_users(self, **kw):
        return self.create(**kw)

    def update_users(self, **kw):
        return self.update(**kw)

    def delete_users(self):
        return self.delete()

    def find_all_users(self):
        return self.all()

    def find_condition(self, **kw):
        return self.filter(**kw)

    def find_single(self, **kw):
        return self.get(**kw)
