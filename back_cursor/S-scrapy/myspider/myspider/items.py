# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class MyspiderItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    pass


class ZhilianItem(scrapy.Item):
    '''
    智联招聘数据提取：Item
    '''
    # 定义属性字段
    job_name = scrapy.Field()
    salary = scrapy.Field()
    company = scrapy.Field()
