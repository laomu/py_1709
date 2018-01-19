"""
缓存模块，用于读取缓存中的数据
"""
# 引入django缓存模块
from django.core.cache import cache

from . import models

p_manager = models.Person.p_manager


def find_all_person(flag=False):
    # 从缓存中获取数据
    print("从缓存中获取数据")
    plist = cache.get("plist")
    if plist is None or flag:
        # 从数据库查询数据
        print("从数据库中获取数据")
        plist = p_manager.find_all()
        # 同步到缓存中
        print("将数据同步到缓存中")
        cache.set("plist", plist)

    # 返回查询到的数据
    return plist