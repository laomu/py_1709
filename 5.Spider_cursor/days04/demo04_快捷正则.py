# -*- coding:utf-8 -*-

# 引入正则操作模块
import re

# 定义正则表达式
regexp = r"\d+"

# 定义目标字符串
intro = "laomu jinnian 12 le! lao le lao le!"

# 直接匹配得到结果
v_list = re.findall(regexp, intro)
print(v_list)