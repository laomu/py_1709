# -*- coding:utf-8 -*-
"""
让我们的爬虫程序，伪装成浏览器发送请求
1. 定义User-agent
2. 设置请求头

重点内容：请求头的设置
    请求头中的数据可以被重新设置
    请求头中可以传送自定义数据
"""
# 引入需要的模块
import urllib2
import random

# 定义的可用的user-agent
ua = [
    "Mozilla/5.0(Macintosh;U;IntelMacOSX10_6_8;en-us)AppleWebKit/534.50(KHTML,likeGecko)Version/5.1Safari/534.50",
    "Mozilla/5.0(Windows;U;WindowsNT6.1;en-us)AppleWebKit/534.50(KHTML,likeGecko)Version/5.1Safari/534.50",
    "Mozilla/5.0(compatible;MSIE9.0;WindowsNT6.1;Trident/5.0;",
    "Mozilla/4.0(compatible;MSIE8.0;WindowsNT6.0;Trident/4.0)",
    "Mozilla/4.0(compatible;MSIE7.0;WindowsNT6.0)",
]
# 随机获取一个user-agent
user_agent = random.choice(ua)
print(user_agent)

# 定义请求头
my_header = {
    "User-agent": user_agent,
    "message": "你好hello"
}

# 封装请求对象，并且设置请求头数据
url = "https://www.taobao.com"
request = urllib2.Request(url, headers=my_header)
# 通过函数操作的方式，在请求头中增加数据
request.add_header("info", "py1709")

# 发送请求并且获取数据
response = urllib2.urlopen(request)

print(response.read())