# coding:utf-8

"""
Xpath：python通过lxml模块进行操作
"""
from lxml import etree # 用于进行DOM树对象转换的模块

# 从文件中加载html文档数据
html = etree.parse("index.html")
# 爬虫~直接获取到的数据
# html = etree.HTML(response.text)
print(html) # 节点树模型->dom树模型

# 1. 获取数据:直接操作标签
ele_h1 = html.xpath("//h1")
print(ele_h1) # [<Element h1 at 0x5a02d88>] h1节点对象
print(ele_h1[0].xpath("string(.)"))
print(ele_h1[0].text)

# 2. 获取数据~操作标签的属性
ele_h2_csb = html.xpath("//h2[@id='title2']")
print(ele_h2_csb)
print(ele_h2_csb[0].text)

ele_h2_zgl = html.xpath("//h2[@id='intro_title']")
print(ele_h2_zgl)
print(ele_h2_zgl[0].text)
print(ele_h2_zgl[0].xpath("string(.)"))

# 3. 通过属性执行获取标签对象
# ele_p_dhhl = html.xpath("//body//p[@class='content']")# 获取body下面所有p标签
ele_p_dhhl = html.xpath("//body/p[@class='content']")# 获取body下面所有p标签
print(ele_p_dhhl)
for ele_p in ele_p_dhhl:
    print(ele_p.text)

ele_p_dhhl1 = html.xpath("//body/p[@class='content'][1]")# 获取body下面所有p标签
print(ele_p_dhhl1[0].text)


