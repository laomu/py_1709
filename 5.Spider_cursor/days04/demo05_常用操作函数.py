# coding:utf-8

# 引入正则操作模块
import re

'''
match(): 用于根据表达式进行字符匹配的操作函数~只匹配一次[从指定的起始位置进行匹配]
search(): 用于根据表达式进行字符匹配的操作函数~只匹配一次[从完整的目标字符串中进行检索匹配]
findall(): 用于根据表达式进行字符匹配~匹配多次，返回匹配到的列表
finditer(): 用于根据表达式进行字符撇皮~匹配多次，返回匹配到的迭代器
split(): 根据指定的表达式对目标字符串进行切割，返回切割后的列表
sub(): 用于字符替换

1. 匹配对象的函数
match(string[, pos[, endpos]])
search(string[, pos[, endpos]])
findall(string[, pos[, endpos]])
finditer(string[, pos[, endpos]])

2. re模块的函数
match(pattern, string, flags=0)
search(pattern, string, flags=0)
findall(pattern, string, flags=0)
finditer(pattern, string, flags=0)

3. 公共函数【匹配对象|re模块操作方式一样】
split()：拆分字符串的函数
sub()：根据正则替换字符串的函数

'''
# 定义目标字符串
intro = "my name is damu, my age is 30 ye23ars old!"

# 定义正则表达式
reg1 = "my"
reg2 = "30"

# 编译匹配对象
p1 = re.compile(reg1)
p2 = re.compile(reg2)

# match函数
print(p1.match(intro).group())
print(p2.match(intro))
print(p2.match(intro, 27).group())

# search
print(p1.search(intro))
print(p2.search(intro))
print(p2.search(intro, 30))

# findall
print(p1.findall(intro))

# finditer
print(p1.finditer(intro))
for p in p1.finditer(intro):
    print(p, p.group(), p.span(), p.start(), p.end())


#######################################################
print("#" * 20)
# re.match():主要执行目标字符串是否以指定的表达式匹配的字符开头
r_match = re.match(r"my", intro)
print(r_match.group(), r_match.span())

r2_match = re.match(r'30', intro)
print(r2_match)

# re.search()：全文匹配第一次出现的位置
r_search = re.search(r"my", intro)
print(r_search.group(), r_search.span())

# re.findall() ：全文匹配，不能指定位置
r_findall = re.findall(r'my', intro)
print(r_findall)

# re.finditer()：全文匹配得到迭代器
r_finditer = re.finditer(r'my', intro)
print(r_finditer)
for x in r_finditer:
    print(x, x.group(), x.span(), x.start(), x.end())


###################################################拆分字符串
print("#" * 20)
s_list = re.split(r"\s+", intro)
print(s_list)

m_list = re.split(r'm', intro)
print(m_list)

# 组合字符串
x = "m".join(m_list)
print(x)

###################################################字符串替换
print("#" * 20)
intro_new = intro.replace("m", "$$")
print(intro_new)

intro_new2 = intro.replace("m", "￥￥", 3)
print(intro_new2)

intro_new3 = intro.replace(r"\d+", "￥￥") # 原始的字符串的replace函数直接替换~指定的字符串
print(intro_new3)

# 正则表达式中的sub()函数，是支持正则表达式替换的方式
intro_new4 = re.sub(r"\d+", "$$", intro)
print(intro_new4)

###################################################分组、贪婪模式
desc = "hello python i am coming!"

#regext = r"(py(th)on)"
regext = r'(py)th(on)'

value = re.search(regext, desc)
print(value.group(),value.group(0), value.group(1), value.group(2))

html = "<div>i am div</div><p>i am p</p><div>i am div too!</div>"

#regext2 = r"<div>.*</div>" # 贪婪模式
#regext2 = r"<div>.*?</div>"# 懒惰模式：非贪婪模式
regext2 = r"<div>(.*?)</div>"# 懒惰模式：非贪婪模式

value2 = re.findall(regext2, html)

print(value2)