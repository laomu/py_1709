# coding:utf-8

from bs4 import BeautifulSoup

# 加载构建soup对象
soup = BeautifulSoup(open("index.html"), "lxml")

# 备注：bs4通过soup对象直接操作标签：检查文档中是否包含这个标签
# 如果要查询文档中的所有指定标签，请使用后面要说的DOM查询

# 1. 获取标签对象
# title标签
print(soup.title)

# 2.操作标签的属性
print(soup.h1.attrs)
print(soup.h1.attrs['class'])
print(soup.h1.attrs.get("class"))
print(soup.h2.attrs) # 通过直接获取标签的方式，获取到匹配成功的第一个标签

# 3. 操作标签的内容
print(soup.h2.string)
