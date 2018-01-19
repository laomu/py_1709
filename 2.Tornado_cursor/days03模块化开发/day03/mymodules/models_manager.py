from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

import pymysql
pymysql.install_as_MySQLdb()

from . import models

class BaseManager:

    def __init__(self):
        self.engine = create_engine('mysql://root:123456@localhost/tornado_test',encoding = 'utf-8',echo = True)

        Session = sessionmaker(bind=self.engine)
        self.session = Session()

    def create_obj(self,**kw):
        self.session.add(**kw)
        self.session.commit()

    def update_obj(self,**kw):
        self.session.commit()

    def delete_obj(self,**kw):
        self.session.delete(**kw)
        self.session.commit()

    def find_single(self,**kwargs):
        raise Exception('待完善')

    def find_condition(self,**kwargs):
        raise Exception('待完善')

class PersonManger(BaseManager):
    def find_single(self,**kwargs):
        return self.session.query(models.Person).filter(**kwargs).one()

    def find_condition(self,**kwargs):
        return self.session.query(models.Person).filter(**kwargs)
