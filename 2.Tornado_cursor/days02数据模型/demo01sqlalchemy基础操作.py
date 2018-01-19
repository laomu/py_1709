from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

import pymysql
pymysql.install_as_MySQLdb()

# 创建数据库连接引擎对象
engine = create_engine("mysql://root@localhost/py1709_torn_db1",
                       encoding="utf-8", echo=True)

# 创建连接会话——理解和数据库之间的连接
Session = sessionmaker(bind=engine)
session = Session()
'''
Session = sessionmakger()# 创建一个没有引擎对象的的会话
Session.configur(bind=engine)# 当有了引擎对象之后，注册给会话
session = Session() # 获取到了和数据库之间的连接会话
'''

print(engine)
print(session)