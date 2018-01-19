# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://doc.scrapy.org/en/latest/topics/items.html
# 引入scrapy模块
import scrapy


class ZhilianItem(scrapy.Item):
    '''
    创建一个Item类型，用于定义爬虫采集的数据字段
    '''
    # 通过scrapy.Field()函数定义属性字段
    # 工作岗位名称
    job_name = scrapy.Field()
    # 发布公司名称
    company = scrapy.Field()
    # 岗位月薪
    salary = scrapy.Field()

