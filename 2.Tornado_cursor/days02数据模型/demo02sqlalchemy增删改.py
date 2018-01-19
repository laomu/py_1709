from sqlalchemy import create_engine, Column, String, Integer
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

import pymysql
pymysql.install_as_MySQLdb()


# 构建连接引擎对象
engine = create_engine("mysql://root@localhost/py1709_torn_db1",
                       encoding="utf-8", echo=True)

# 获取一个连接会话
Session = sessionmaker(bind=engine)
session = Session()

# 构建一个基础类型
Base = declarative_base(bind=engine)


# 定义自定义类型
# 自定义类型创建完成之后，sqlalchemy会根据管理的类型自动创建一个intrumentation管理对象
# 通过intrumentation管理对象底层封装了自定义类型和数据库表之间的各种关联操作
class Person(Base):
    __tablename__ = "persons"
    id = Column(Integer, primary_key=True)
    name = Column(String(50))
    age = Column(Integer)


# 通过类型的__table__属性查看它的数据库表元数据
# 通过Base。metadata属性封装的函数完成数据库之间的数据同步操作
# print(Person.__table__)
# Base.metadata.create_all() # 将所有salalchemy管理的对象同步到数据库中产生对应的数据表

# 1. 程序中直接创建的对象，是保存并运行在内存中的~一旦程序结束，内存中的数据会清空
# 临时状态(游离状态)：程序中直接创建的对象，临时对象
# 特点：程序中有数据，缓存中无数据，数据库中无数据
p = Person(name="jerry", age=12)
print(p, p.id, p.name, p.age)

# 2. 程序中的对象，可以通过连接会话session的add()函数，将对象交给sqlalchemy进行管理
# 缓存状态(托管状态)：对象只是存在于连接会话缓存中，数据库中并没有相关数据，缓存对象
# 特点：程序中有数据，缓存中有数据，数据库中无数据
session.add(p)

# 3. 缓存中的数据，可以通过连接会话session的commit()函数，将缓存数据提交给数据库进行持久化保存
# 持久状态(持久persistent状态)：对象在程序中存在，在数据库中有对应的记录
# 特点：程序中有数据{id}， 缓存中有数据， 数据库中有数据
session.commit()
print(p.id, p.name, p.age)


# 修改操作
# 一旦对缓存状态的对象进行修改，此时缓存对象和数据库中的数据不一致~
# 就会形成脏数据，脏数据并不是不可取的，更新操作就是将这样的数据从缓存同步到数据库(commit)
p.name = "shuke"
# 可以通过session.dirty来查询缓存中的脏数据
session.commit()

# 删除操作
session.delete(p)# 直接删除一个缓存的数据[脏数据]，通过commit()提交到数据库
session.commit()

# 注意删除的只能是持久对象
#p2 = Person(id=1)
#session.delete(p2)# 抛出异常~不能删除，因为p2不是持久对象is not persisted

