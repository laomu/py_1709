'''
数据模型管理对象模块
'''
# 引入需要的模块
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

import pymysql
pymysql.install_as_MySQLdb()

from . import models


# 定义一个基础管理类
class BaseManager:

    def __init__(self):
        # 创建数据库引擎
        self.engine = create_engine("mysql://root@localhost/py1709_torn_db1",
                                    encoding="utf-8", echo=True)
        # 创建连接会话
        Session = sessionmaker(bind=self.engine)
        self.session = Session()

    def create_obj(self, **kw):
        self.session.add(**kw)
        self.session.commit()

    def update_obj(self, **kw):
        self.session.commit()

    def delete_obj(self, **kw):
        self.session.delete(**kw)
        self.session.commit()

    def find_single(self, **kwargs):
        raise Exception("这个函数必须重写")

    def find_condition(self, **kwargs):
        raise Exception("这个函数必须重写")


# 定义某个类型的具体管理类
class PersonManager(BaseManager):

    def find_single(self, **kwargs):
        return self.session.query(models.Person).filter(**kwargs).one()

    def find_condition(self, **kwargs):
        return self.session.query(models.Person).filter(**kwargs)