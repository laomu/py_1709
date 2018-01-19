# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://doc.scrapy.org/en/latest/topics/item-pipeline.html
# 引入sqlalchemy模块
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
# 进入pymysql模块，用于替代sqlalchemy底层的mysqldb
import pymysql
pymysql.install_as_MySQLdb()


class ZhilianPipeline(object):
    '''
    智联招聘爬虫管道模块，进行数据验证和存储
    '''
    def __init__(self):
        # 打开和数据库的连接引擎，获取连接会话对象
        engine = create_engine("mysql://root:@localhost/py1709_spider?charset=utf8")
        Session = sessionmaker(bind=engine)
        self.session = Session()


    def process_item(self, item, spider):
        # 生成sql语句
        zl_sql = "insert into jobs(job_name, company, salary) values('%s', '%s', '%s')" % \
                 (item['job_name'], item['company'], item['salary'])
        # 执行sql语句
        self.session.execute(zl_sql)
        return item

    def close_spider(self, spider):
        # 提交数据并关闭数据库连接会话
        self.session.commit()
        self.session.close()
