"""
管理器对象
"""
from django.db import models


class BaseManager(models.Manager):

    def create_obj(self, **kw):
        return self.create(**kw)

    def find_all(self):
        return self.all()

    def find_condition(self, **kw):
        return self.filter(**kw)


class BoyManager(BaseManager):
    pass


class GirlManager(BaseManager):
    pass


class GirlSayManager(BaseManager):
    pass