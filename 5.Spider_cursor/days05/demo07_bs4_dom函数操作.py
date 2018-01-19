# -*- coding:utf-8 -*-

from bs4 import BeautifulSoup

soup = BeautifulSoup(open("index.html"), "lxml")

# 根据标签的名称查询
h2_e = soup.find_all("h2")
print(h2_e)

# 根据名称的正则表达式进行查询
import re
h2_r = soup.find_all(re.compile("p+"))
print(h2_r)

# 一次查询多个标签
h2_m = soup.find_all(["div", "h1", "h2"])
print(h2_m)

# 关键字参数：通过attrs将标签的属性和属性值~作为字典数据进行查询的操作
h2_kw = soup.find_all(attrs={"class": "content"}) #
print(h2_kw)

# 内容查询
h2_t = soup.find_all(text="登黄鹤楼")
print(h2_t)

'''
BS4 的DOM操作，重点内容[熟练]
面试的重点~
实际项目操作中，使用较少
'''