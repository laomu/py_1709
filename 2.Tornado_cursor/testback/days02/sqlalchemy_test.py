# 引入需要的模块
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

import pymysql
pymysql.install_as_MySQLdb()

# 创建一个引擎对象
engine = create_engine("mysql://root@localhost:3306/py1709_tornado_test1", encoding="UTF-8", echo=True)

# 创建一个映射对象
Base = declarative_base()

Session = sessionmaker(bind=engine)
session = Session()


# 定义模型对象
class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True)
    name = Column(String(50))
    age = Column(Integer)

    def __repr__(self):
        return "<User:(name=%s, age=%d)>" % (self.name, self.age)

if __name__ == "__main__":
    # print(User.__table__)
    # Base.metadata.create_all(engine)# 创建所有的表数据
    #
    # user = User(name="tom", age=12)
    # print(user)
    # print(user.name)
    # print(user.id)
    #
    # print(dir(session))
    # session.add(user)
    # session.commit()
    # print(user)
    # print(user.name)
    # print(user.id)
    # for user in session.query(User.id).order_by(-User.id, User.name):
    #     print(user.id)
    # from sqlalchemy import and_
    #
    # print(session.query(User).filter(User.name=="tom").filter(User.age==12))
    # print(session.query(User).filter(User.name=="tom", User.age==12))
    # print(session.query(User).filter(and_(User.name == "tom", User.age==12)))

    # print(session.query(User).all())
    # for user in session.query(User).filter(User.name=="tom"):
    #     print(user)

    print(session.query(User).one(User.id==1))

    # from sqlalchemy import text
    # u = session.query(User).from_statement(text("select * from users where name=:name")).params(name="tom").all()
    # print(u)