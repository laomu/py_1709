# coding:utf-8

# 引入CrawlSpider, Rule, LinkExtractor模块
from scrapy.linkextractors import LinkExtractor
from scrapy.spider import CrawlSpider, Rule


class ZhilianSpider(CrawlSpider):
    """
    智联招聘深度爬虫处理类
    继承scrapy.spiders.CrawlSpider类型
    """
    # 定义爬虫名称
    name = "cs2"
    # 定义域名限制
    allowed_domains = ["zhaopin.com"]
    # 定义起始地址
    start_urls = ("http://sou.zhaopin.com/jobs/searchresult.ashx?jl=%E5%8C%97%E4%BA%AC%2b%E4%B8%8A%E6%B5%B7%2b%E5%B9%BF%E5%B7%9E%2b%E6%B7%B1%E5%9C%B3&kw=python&isadv=0&sg=5b827b7808f548ad8261595837624f24&p=1",)

    # 定义提取规则
    links = LinkExtractor(
        allow=("5837624f24&p=\d+")
    )

    # 定义操作规则
    rules = [
        # 定义一个操作规则
        Rule(links, follow=True, callback='parse_response'),
    ]

    # 定义数据处理函数
    def parse_response(self, response):
        # 提取数据
        job_list = response.xpath("//div[@id='newlist_list_content_table']/table[@class='newlist'][position()>1]")
        # 循环筛选数据
        for job in job_list:
            job_name = job.xpath("tr[1]/td[@class='zwmc']/div/a").xpath("string(.)").extract()[0]

            print job_name

        print("********************************************************************")