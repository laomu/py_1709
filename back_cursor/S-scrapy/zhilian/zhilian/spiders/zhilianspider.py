# coding:utf-8

import scrapy
from ..items import ZhilianItem
#http://sou.zhaopin.com/jobs/searchresult.ashx?jl=%E5%8C%97%E4%BA%AC&kw=%E7%88%AC%E8%99%AB&sm=0&sg=bb28054b0714445f85382f12e09c9228&p=1

class ZhilianSpider(scrapy.Spider):
    '''
    爬虫核心程序开发
    '''
    # 定义名称，用于命令行启动执行爬虫使用
    name = "zlspider"
    # 定义限定域名，防止跨域数据采集
    allowed_domains = ["zhaopin.com"]
    # 初始采集URL地址
    start_urls = (
        #"http://sou.zhaopin.com/jobs/searchresult.ashx?jl=%E5%8C%97%E4%BA%AC&kw=%E7%88%AC%E8%99%AB&sm=0&sg=bb28054b0714445f85382f12e09c9228&p=1",
        "http://sou.zhaopin.com/jobs/searchresult.ashx?jl=%E5%8C%97%E4%BA%AC%2b%E4%B8%8A%E6%B5%B7%2b%E5%B9%BF%E5%B7%9E%2b%E6%B7%B1%E5%9C%B3&kw=python&isadv=0&sg=5b827b7808f548ad8261595837624f24&p=1",
    )

    def parse(self, response):
        '''
        采集处理函数，scrapy下载器采集下载的数据存放在response中
        :param response:
        :return:
        '''
        # 通过xpath筛选得到当前工作列表
        job_list = response.xpath("//div[@id='newlist_list_content_table']/table[@class='newlist'][position()>1]")

        # 循环获取每个工作信息
        for job in job_list:
            # 筛选工作名称
            job_name = job.xpath("tr[1]/td[@class='zwmc']/div/a").xpath("string(.)").extract()[0]
            # 筛选发布公司
            company = job.xpath("tr[1]/td[@class='gsmc']/a").xpath("string(.)").extract()[0]
            # 筛选薪水待遇
            salary = job.xpath("tr[1]/td[@class='zwyx']").xpath("string(.)").extract()[0]

            # 封装生成item对象，交给pipelines模块进行后续数据验证和存储
            item = ZhilianItem()
            item['job_name'] = job_name
            item['company'] = company
            item['salary'] = salary

            yield item

        # 深度采集url连接，添加到下载列表并发送请求
        nextpage = response.xpath("//div[@class='pagesDown']/ul/li/a/@href").extract()
        for page in nextpage:
            page  = response.urljoin(page)
            yield scrapy.Request(page, callback=self.parse)

