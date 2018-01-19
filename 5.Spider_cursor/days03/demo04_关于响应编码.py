# -*- coding:utf-8 -*-

import requests

response = requests.get("http://www.baidu.com")
# 响应数据编码的设置
response.encoding = "UTF-8"

print(response.text)