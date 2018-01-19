"""
数据模型定义模块
"""
from sqlalchemy import Column, String, Integer, Float, DateTime
from sqlalchemy.ext.declarative import declarative_base

# 定义一个基础类
BaseModel = declarative_base()


# 定义各种自定义类型
class User(BaseModel):
    __tablename__ = "users"
    # ...


class Article(BaseModel):
    __tablename__ = "articles"
    # ...