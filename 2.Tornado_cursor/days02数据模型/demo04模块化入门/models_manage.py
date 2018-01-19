"""
数据模型管理器模块
通过该模块管理所有数据对象的增删改查操作
"""
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker


class BaseManager:
    """
    基础管理类型
    """
    def __init__(self, engine_str, **kw):
        self.engine = create_engine(engine_str)

        Session = sessionmaker(bind=self.engine)
        self.session = Session()

    def create_obj(self, **kw):
        pass


    def update_obj(self, **kw):
        pass

    def delete_obj(self):
        pass

    def find_single(self, **kw):
        pass

    def find_condition(self, **kw):
        pass


class UserManager(BaseManager):
    pass


class ArticleManager(BaseManager):
    pass