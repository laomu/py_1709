# coding:utf-8

"""
正则在爬虫中进行数据筛选
案例：百度图片
思路：
1.抓包得到获取数据的url地址
2.抓取url地址对应的数据
2.1正则匹配需要的数据[图片url路径]
3.循环抓取图片
3.1. 保存图片到本地
"""
# 引入需要的爬虫模块，和正则匹配模块
import requests, re

# 抓取数据的路径
url = "https://image.baidu.com/search/acjson?tn=resultjson_com&ipn=rj&ct=201326592&is=&fp=result&queryWord=%E4%BA%8C%E6%AC%A1%E5%85%83&cl=2&lm=-1&ie=utf-8&oe=utf-8&adpicid=&st=-1&z=&ic=0&word=%E4%BA%8C%E6%AC%A1%E5%85%83&s=&se=&tab=&width=&height=&face=0&istype=2&qc=&nc=1&fr=&pn=60&rn=30&gsm=3c&1515661160078="
# 请求头
headers = {
    "Accept": "text/plain, */*; q=0.01",
    "Accept-Language": "zh-CN,zh;q=0.8",
    "Connection": "keep-alive",
    "Host": "image.baidu.com",
    "Referer":"https://image.baidu.com/search/index?tn=baiduimage&ipn=r&ct=201326592&cl=2&lm=-1&st=-1&fm=result&fr=&sf=1&fmq=1515660998369_R&pv=&ic=0&nc=1&z=&se=1&showtab=0&fb=0&width=&height=&face=0&istype=2&ie=utf-8&word=%E4%BA%8C%E6%AC%A1%E5%85%83",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.7 Safari/537.36",
    "X-Requested-With": "XMLHttpRequest",
}

# 1. 第一次爬取，得到具体的图片展示数据
response1 = requests.get(url,headers=headers)
response1.encoding = "utf-8"
content = response1.text


# 2.正则匹配得到图片path路径，后续根据这个路径爬取图片
img_list = re.findall(r'"thumbURL":"(.*?)"', content)
print(img_list)

# 3. 循环爬取图片数据，保存到本地
for img_url in img_list:
    print(">>>>>>>>>>>>>>>>>>>>>开始保存图片%s" % img_url.encode("utf-8"))
    response2 = requests.get(img_url)

    # 开始存储图片
    filename = img_url[-50:].replace("/", "_")
    with open(filename, "wb") as f:
        f.write(response2.content)

    print("<<<<<<<<<<<<<<<<图片保存完成")