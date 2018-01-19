# coding:utf-8

import scrapy


class CsdnSpider(scrapy.Spider):
    '''
    CSDN登录爬虫处理类
    '''
    # 爬虫名称
    name = "cs"
    # 初始登录地址
    start_urls = ["https://passport.csdn.net/account/login"]

    def parse(self, response):

        # 匹配登录流水号
        lt = response.xpath("//form[@id='fm1']/input[@type='hidden']/@value").extract()[1]

        # 发送post请求完成登录
        return scrapy.FormRequest.from_response(
            response,
            formdata = {
                "username": "15682808270",
                "password": "DAMUpython2016",
                "lt": lt,
                # "execution": "e2s1",
                # "_eventId": "submit"
            },
            callback=self.parse_response
        )

    def parse_response(self, response):
        # 得到登录后的数据，进行后续处理
        with open("csdn.html", "w") as f:
            f.write(response.body)