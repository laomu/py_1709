from sqlalchemy import create_engine, Column, String, Integer
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

import pymysql
pymysql.install_as_MySQLdb()

# 创建数据库引擎
engine = create_engine("mysql://root@localhost/py1709_torn_db1",
                       encoding="utf-8", echo=True)

# 创建会话对象
Session = sessionmaker(bind=engine)
sess = Session()

# 创建基础类型
Base = declarative_base(bind=engine)


# 定义自定义类型
class Person(Base):
    # 指定关联的数据表
    __tablename__ = "persons"
    # 定义属性
    id = Column(Integer, primary_key=True)
    name = Column(String(50))
    age = Column(Integer)

    def __str__(self):
        return "<Person object: id:%s; name:%s; age:%s>" %  (self.id, self.name, self.age)



# 查询核心操作
# 1. 全表查询方式
# 1.1. 直接调用query，就相当于默认调用了all()进行了全表查询
# person_list = sess.query(Person)
# 1.2. 直接通过all()函数指定进行全表查询
# person_list = sess.query(Person).all()
# for person in person_list:
#     print(person, person.id, person.name, person.age)

# 2. 排序查询
# 通过order_by()函数可以直接指定排序方式
# 2.1. 通过 类型.属性 指定按照什么属性进行默认顺序排序
# person_list = sess.query(Person).order_by(Person.id)
# 2.2. 通过 -类型.属性 指定按照什么属性进行倒序排序
# person_list = sess.query(Person).order_by(-Person.id)
# 2.3. 通过 类型.属性,类型.属性~指定多列，表示按照多列进行排序，~如果第一列数据相同，按照第二列进行排序，以此类推
# person_list = sess.query(Person).order_by(Person.id, Person.name, Person.age)
# person_list = sess.query(Person).order_by(Person.id, Person.name)
# for person in person_list:
    # print(person)

# 3. 指定列查询
# 模拟sql语句中的指定列查询 select p.name from person p;
# 生成的sql语句：SELECT persons.name AS persons_name FROM persons
# person_list = sess.query(Person.name)
# for p in person_list:
#     print(p)

# 4. 特殊操作：如果类型的字段名称过长，不好书写的情况下，可以指定别名
# person_list = sess.query(Person.name.label("n"))
# for p in person_list:
#     print(p.n) # p.name

# 5. 特殊操作：如果类型过长，不好书写的情况下，可以给类型指定一个别名
# 字段属性的别名，在使用过程中可以进行简化处理，也是常见的操作手段[属性名称一般是开发人员自定义的，有可能非常长还没有太大必要，此时操作时就需要简化]
# 类型名称的别名，慎重使用~类型的名称一般都已经是比较简化的名称并且能直接表述其正式意义的名称，慎重简化！
# from sqlalchemy.orm import aliased
#
# p = aliased(Person, name="p")
# # N行代码
# person_list = sess.query(p).all()
# for p in person_list:
#     print(p)

# 6. 切片查询：一般使用在数据分页查询等这样的业务中
# 切片查询~由于sqlalchemy查询的结果就是一个like list的存在，所以直接使用Python中的切片即可
# 如果网页页面中的数据~需要分页展示，每页两条记录~start = (pageno-1)*pagecount, end: start+pagecount
# person_list = sess.query(Person).all()[:2] # 第一页数据  [0, 2]
# person_list = sess.query(Person).all()[2:4] # 第二页数据 [2, 4]
# person_list = sess.query(Person).all()[4:6] # 第三页数据   [4, 6]
# for person in person_list:
#     print(person)

# 7.filer()[常用]条件查询[filter_by() 不怎么常用]
# 7.1. 等值查询 | 非等值查询
# person_list = sess.query(Person).filter(Person.name!="tom")
# person_list = sess.query(Person).filter(Person.name=="tom")
# print(person_list)
# for person in person_list:
#     print(person)

# 7.2 模糊查询
# person_list = sess.query(Person).filter(Person.name.like('%e%'))
# for person in person_list:
#     print(person)


# 7.3. 范围查询：in 和 not in
# in
# person_list = sess.query(Person).filter(Person.name.in_(['tom', 'jerry']))
# not in
# person_list = sess.query(Person).filter(~Person.name.in_(['tom', 'jerry']))
# for person in person_list:
#     print(person)

# 7.4. 空值查询  is null / is not null
# 空值
# person_list = sess.query(Person).filter(Person.name == None) # 常用~但是不是规范
# person_list= sess.query(Person).filter(Person.name.is_(None)) # 不太常用~pep8编码规范推荐

# 非空值
# person_list = sess.query(Person).filter(Person.name != None)
# person_list = sess.query(Person).filter(Person.name.isnot(None))
# for person in person_list:
#     print(person)

# 7.5. 并且条件和或者条件查询
# 并且条件的查询，有三种实现模式
# 第一种：多个filter
# person_list = sess.query(Person).filter(Person.name=="tom").filter(Person.age==12)
# 第二种：一个filter，多个条件
# person_list = sess.query(Person).filter(Person.name=="tom", Person.age==12)
# 第三种：规范并且条件查询方式：通过and_()函数收集条件
# # from sqlalchemy import and_
# person_list = sess.query(Person).filter(and_(Person.name=='tom', Person.age==12))

# 或者查询：or查询，通过or_()函数进行查询
# from sqlalchemy import or_
# person_list = sess.query(Person).filter(or_(Person.name=='tom', Person.name=='jerry'))
# print(person_list)
# for person in person_list:
#     print(person)

# 7.6. 定制化SQL语句查询
from sqlalchemy import text

person_list = sess.query(Person)\
    .from_statement(text("select p.id, p.name, p.age from persons p where name=:myname"))\
    .params(myname="tom").all()

for person in person_list:
    print(person)