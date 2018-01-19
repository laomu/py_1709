# coding:utf-8

import requests
from lxml import etree

headers = {
    "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.7 Safari/537.36",
}

url = "https://sou.zhaopin.com/jobs/searchresult.ashx?jl=%E5%8C%97%E4%BA%AC%2B%E4%B8%8A%E6%B5%B7%2B%E5%B9%BF%E5%B7%9E%2B%E6%B7%B1%E5%9C%B3&kw=Django&p=1&isadv=0"

# 发送请求，获取智联网页数据
response = requests.get(url, headers=headers)
html_str = response.text

############################################
# xpath匹配目标数据
html = etree.HTML(html_str)
print(html) # <Element html at 0x5658bc8>
#print(html.xpath("//div"))

# 1. xpath匹配数据：注意：原始HTML数据和网页中能看到的数据~不一定一致，一定要对Xpath进行测试改动
job_names = html.xpath("//div[@id='newlist_list_content_table']/table[@class='newlist']/tr[1]/td[@class='zwmc']/div")
# print(job_names)
# for job_name in job_names:
#     print(job_name.xpath("string(.)"))
#     name = job_name.xpath("string(.)")
#     print(name.strip())
f = open("job.txt", "w")
for job_name in job_names:
    f.write(job_name.xpath("string(.)").strip().encode("utf-8") + "\r\n")
f.close()