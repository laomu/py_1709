# -*- coding:utf-8 -*-

import requests

# 1. 有道翻译，获取cookie数据：模拟浏览器打开有道翻译页面
response1 = requests.get("http://fanyi.youdao.com")

# 打印展示cookie数据
print(response1.cookies)

for item in response1.cookies:
    print (item.name + "--" + item.value)

# 2. 模拟浏览器填写翻译的词语，发送post请求，包含cookie数据
# 传递的post数据[反反爬虫]
form_data = {

}
# 请求头设置
headers = {

}

response2 = requests.post("http://fanyi.youdao.com/translate_o?smartresult=dict&smartresult=rule",
                          headers=headers,
                          data=form_data,
                          cookies=response1.cookies)

# 得到翻译的数据
print(response2.text)
