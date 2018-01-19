# -*- coding:utf-8 -*-

import requests
# 定义get参数，是一个字典数据
get_param = {
    "wd": "火影"
}
# get参数，通过params参数赋值，直接传递
response = requests.get("http://www.baidu.com/s", params=get_param)

# 打印获取数据
print(response.text)
