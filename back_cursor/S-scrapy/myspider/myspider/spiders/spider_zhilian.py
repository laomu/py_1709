# coding:utf-8

import scrapy


class ZhilianSpider(scrapy.Spider):
    '''
    智联招聘爬虫程序
    '''
    # 定义属性
    name = "zlspider"
    # 定义域名限制
    allowed_domains = ['zhaopin.com']
    # 定义起始url地址
    start_urls = [
        'http://sou.zhaopin.com/jobs/searchresult.ashx?jl=%E5%8C%97%E4%BA%AC&kw=django&sm=0&sg=41c5ff15fda04534b7e455fa88794f18&p=1',
        'http://sou.zhaopin.com/jobs/searchresult.ashx?jl=%E5%8C%97%E4%BA%AC&kw=django&sm=0&sg=41c5ff15fda04534b7e455fa88794f18&p=2',
        'http://sou.zhaopin.com/jobs/searchresult.ashx?jl=%E5%8C%97%E4%BA%AC&kw=django&sm=0&sg=41c5ff15fda04534b7e455fa88794f18&p=3',
        'http://sou.zhaopin.com/jobs/searchresult.ashx?jl=%E5%8C%97%E4%BA%AC&kw=django&sm=0&sg=41c5ff15fda04534b7e455fa88794f18&p=4',
        'http://sou.zhaopin.com/jobs/searchresult.ashx?jl=%E5%8C%97%E4%BA%AC&kw=django&sm=0&sg=41c5ff15fda04534b7e455fa88794f18&p=5',
    ]

    # 定义采集数据的函数
    def parse(self, response):
        # 保存数据
        filename = response.url.split("&")[-1] + ".html"
        with open(filename, "w") as f:
            f.write(response.body)