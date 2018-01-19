# coding:utf-8

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

import pymysql
pymysql.install_as_MySQLdb()

engine = create_engine("mysql://root:@localhost:3306/py1709_torn_db1")

Session = sessionmaker(bind=engine)

session = Session()

session.execute("insert into users(job, company) values('test', 'test')")
session.commit()

session.close()