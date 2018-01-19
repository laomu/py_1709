# -*- coding:utf-8 -*-
"""
通过代理服务器访问目标地址
"""
# 引入需要的模块
import urllib2

# 定义访问url地址和请求对象
url = "https://www.taobao.com"
request = urllib2.Request(url)

# 构建一个可以操作代理服务器的Handler对象
proxy_handler = urllib2.ProxyHandler({"http": "110.73.8.153:8123"})
# proxy_handler = urllib2.ProxyHandler({"http": "admin:123123@110.73.8.153:8123"})
'''
代理：免费代理|收费代理
类型：透明|匿名|高匿
'''
# 构建一个opener对象
proxy_opener = urllib2.build_opener(proxy_handler)

response = proxy_opener.open(request)

print(response.read())