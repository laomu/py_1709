# -*- coding:utf-8 -*-

# HTTPS：SSL数字签名
# SSL数字签名~ 数字证书~ 专门的数字证书颁发机构(CA)进行登记管理[民间]
# http://www.12306.cn/mormhweb/

# 如果这样直接访问，就会出现centificate verify failed身份信息验证失败的问题
# 针对这样的特立独行的网站，我们要在爬虫程序中，主动声明，不需要验证~

import urllib2
import ssl

# 创建一个不需要进行ssl验证的上下文环境
c = ssl._create_unverified_context()

response = urllib2.urlopen("https://www.12306.cn", context=c)

print(response.read())
