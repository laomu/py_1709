# -*- coding:utf-8 -*-
import requests

# 定义post参数
post_data = {
    "i": "hello",# 要翻译的词语
    "from":	"AUTO", # 词语的翻译之前的语言
    "to":	"AUTO", # 词语翻译之后的语言
    "smartresult": "dict", # 数据类型
    "client":	"fanyideskweb", # 客户端标识
    "salt":	124141234234, # ~~~~可能是~~~时间
    "sign":	'a87123912423423435',# ~~~~可能是~~~~md5
    "doctype":	"json", # 数据类型
    "version":	2.1,# 版本号
    "keyfrom":	"fanyi.web",# 关键字
    "action":	"FY_BY_REALTIME",# 行为描述
    "typoResult":	False # 结果类型
}
# 发送请求，得到相应数据
response = requests.post("http://fanyi.youdao.com", data=post_data)

# 打印获取到数据
content = response.text
print(content)
print("#############################################")
print("#############################################")
print(type(content))

# 保存爬取到的数据到文件 # 字符串中，包含了中文，~不能正常的写入文件
with open("youdao.html", "w") as f:
    #f.write(content) # 默认调用了content.encode("ascii")出现了错误
    f.write("content".encode("utf-8"))

# 如果出现了意料之外的问题？你的解决思路是什么样的？
### 意料意外~不同的版本支持不一致的问题

"""
python3中，s = "abc",默认情况下，s是str类型[unicode编码]
    字符->字节：s.encode("utf-8")
    字节->字符：s.decode("utf-8")

python2中，s = "abc",默认情况下，s是str类型[bytes编码]
    字节->字符： s.decode("utf-8")
"""