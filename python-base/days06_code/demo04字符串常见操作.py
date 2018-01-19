# 字符串常见操作
'''
# lower() [*****]
# upper() [*****]
# capitalize() [***]
# islower() [**]
# isupper() [**]
# istitle() []
# swapcase() [-]
# 1.字符串大小写转换
ok = "hello python"# hello python
x1 = ok.upper() # 将字符串全部转换成大写:HELLO PYTHON
x2 = ok.lower() #将字符串中的所有的字符，全部变成小写：hello python
x3 = ok.capitalize()# 将字符串中第一个字符变成大写，后面的全部变成小写：Hello python
print (x1, x2, x3)

# 1.1. 案例操作
res = input("是否退出程序(y/n)?")
# y-->Y  Y-->Y
#if res.upper() == "Y":
# y-->y  Y-->y
if res.lower() == "y":
	print("退出程序了")
else:
	print("输入了其他字符")
# 扩展
a = "hello python"
print(a.islower())#判断a变量中字符串是否全部小写
print(a.isupper())#判断a变量中的字符串是否全部大写
print(a.istitle())#判断a变量中的字符串是否首字母大写
'''

'''
# 2.字符串匹配和检索[检查搜索]——附带：替换
msg = "hello python! TMD i am coming..."
# 查询字母o第一次出现的位置
first = msg.index('o')
print("字母o第一次出现的位置：%s" % first)
# 查询字母o最后一次出现的位置
last = msg.rindex("o")
print("字母o最后一次出现的位置：%s" % last)

# 2.1. 操作案例：敏感词检索
# 在用户发表的文章中，进行敏感词语检索，并发出警告邮件！
article = "我是一个爱国的人，作为未来的共产党员，我们是GUO家的接班人..."

# contain = article.index("国")
contain = article.find("国")
if contain >= 0:
	print("您发表的言论涉及国家安全，请谨慎对待...")
	# 字符串替换：replace(old, new)
	article = article.replace("国", "******")
	print("发表的文章：%s" % article)
else:
	print("谢谢您的配合，正常发表...")

'''
'''
# 4. 字符串的合法性简单判断
# 请输入您的邮箱 | 请输入您的个人主页
# 请输入您的个人主页
personal = "http://blog.csdn.net/muwenbin_flex"
print(personal.startswith("http://"))

email = "1007821300@qq.com"
print(email.endswith(".com"))

'''


'''
# 5. 字符串的拆分——拼接【了解，后面用到的时候再深入了解】
s = "username=admin&password=123456"

args = s.split("&")# 通过&符号，将字符串，拆分成两个元素的列表
# ['username=admin', 'password=123456']

x = args[0].split("=")
# ['username', 'admin']

# 5.1. 字符串的拼接
# 用户输入1操作demo01.py，用户输入2操作demo02.py
path = "d:/resp_work"
file = "demo03.py"

fullname = "/".join([path, file])
print(fullname)

'''

# 6. 字符串的对齐方式
# 左对齐 右对齐 居中【爬虫程序】
s = "spider"
s.ljust(10) # 字符串总共占据10个字符位置，字符串s左对齐显示
s.rjust(10)
s.center(10)

# 7.剔除空格
# 请输入您的账号：
username = input("请输入您的账号：")
print("用户输入了账号：%s" % username)
# 实际项目使用中，字符串两边的空格经常被认为是没有意义的字符
# 某些特殊的情况下，空格经常被用来设置密码
# 去掉字符串两边的空格
username = username.strip()
# 去掉字符串左边的空格
username = username.lstrip()
# 去掉字符串右边的空格
username = username.rstrip()

# isalnum()/isalpha()/isdigit()
# 8. 
# isalnum():is all numeric：是否全部是字母和数字的组合
# is all alphabatic是否全部是字母
# isdigit() 是否全部是数字：用户输入的数字选项~可以用isdigit()判断

