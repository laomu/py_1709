'''
数据模型定义模块
'''
from sqlalchemy import Column, String, Integer
from sqlalchemy.ext.declarative import declarative_base


# 构建一个基础类型
Base = declarative_base()


# 定义自定义数据类型
class Person(Base):
    # 指定关联的表数据
    __tablename__ = "person"
    # 定义属性字段
    id = Column(Integer, primary_key=True)
    name = Column(String(50))
    age = Column(Integer)
