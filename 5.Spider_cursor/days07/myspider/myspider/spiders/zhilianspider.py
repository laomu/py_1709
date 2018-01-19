# coding:utf-8

# 引入需要的scrapy模块
import scrapy
from .. import items


class ZhilianSpider(scrapy.Spider):
    '''
    智联招聘数据采集爬虫程序
    '''
    # 定义爬虫的名称，用于在命令中调用
    name = "zlspider"
    # 定义域名限制:只能爬取~zhaopin.com域名下的所有数据
    allowed_domains = ['zhaopin.com']
    # 定义初始url地址
    start_urls = (
        "http://sou.zhaopin.com/jobs/searchresult.ashx?jl=%E5%8C%97%E4%BA%AC&kw=%E7%88%AC%E8%99%AB&sm=0&sg=cab76822e6044ff4b4b1a907661851f9&p=1",
        "http://sou.zhaopin.com/jobs/searchresult.ashx?jl=%E5%8C%97%E4%BA%AC&kw=%E7%88%AC%E8%99%AB&sm=0&sg=cab76822e6044ff4b4b1a907661851f9&p=2",
        "http://sou.zhaopin.com/jobs/searchresult.ashx?jl=%E5%8C%97%E4%BA%AC&kw=%E7%88%AC%E8%99%AB&sm=0&sg=cab76822e6044ff4b4b1a907661851f9&p=3",
        "http://sou.zhaopin.com/jobs/searchresult.ashx?jl=%E5%8C%97%E4%BA%AC&kw=%E7%88%AC%E8%99%AB&sm=0&sg=cab76822e6044ff4b4b1a907661851f9&p=4",
        "http://sou.zhaopin.com/jobs/searchresult.ashx?jl=%E5%8C%97%E4%BA%AC&kw=%E7%88%AC%E8%99%AB&sm=0&sg=cab76822e6044ff4b4b1a907661851f9&p=5",
        "http://sou.zhaopin.com/jobs/searchresult.ashx?jl=%E5%8C%97%E4%BA%AC&kw=%E7%88%AC%E8%99%AB&sm=0&sg=cab76822e6044ff4b4b1a907661851f9&p=6",
        "http://sou.zhaopin.com/jobs/searchresult.ashx?jl=%E5%8C%97%E4%BA%AC&kw=%E7%88%AC%E8%99%AB&sm=0&sg=cab76822e6044ff4b4b1a907661851f9&p=7",
        "http://sou.zhaopin.com/jobs/searchresult.ashx?jl=%E5%8C%97%E4%BA%AC&kw=%E7%88%AC%E8%99%AB&sm=0&sg=cab76822e6044ff4b4b1a907661851f9&p=8",
    )

    def parse(self, response):
        '''
        采集到数据之后，自动执行的函数，主要进行如下功能
            数据筛选->封装Item对象->传递数据给Pipelines
            >>>> 模拟~保存数据到文件
        :param response:采集到的数据
        :return:
        '''
        # filename = response.url.split("&")[-1] + ".html"
        # with open(filename, "w") as f:
        #     # 爬虫采集到的数据，会封装在response.body属性中，可以直接获取
        #     f.write(response.body)

        '''
        response.xpath("")提取需要的数据
        
        from items import ZhilianItem
        item = ZhilianItem()
        保存需要的数据[job、company、salary]
        '''
        # Item [job\company\salary]
        # job_items = []
        # 提取所有的工作信息列表selector列表
        job_list = response.xpath("//div[@id='newlist_list_content_table']/table[position()>1]/tr[1]")
        for select in job_list:
            job = select.xpath("td[@class='zwmc']/div/a/text()").extract()[0]
            company = select.xpath("td[@class='gsmc']//a/text()").extract()[0]
            salary = select.xpath("td[@class='zwyx']/text()").extract()[0]

            # 封装成item对象
            item = items.ZhilianItem()
            item['job'] = job
            item['company'] = company
            item['salary'] = salary

            # 将本次生成的item对象交给pipeline进行处理
            yield item

            # job_items.append(item)

        # 可以用于直接提取数据生成文件，但是如果涉及到数据存储完整程序~不推荐
        # why?因为完成的数据操作过程中，通过pipelines.py模块进行数据的验证、存储操作
        # return job_items

'''
http://sou.zhaopin.com/jobs/searchresult.ashx?jl=%E5%8C%97%E4%BA%AC&kw=%E7%88%AC%E8%99%AB&sm=0&sg=cab76822e6044ff4b4b1a907661851f9&p=4
'''


