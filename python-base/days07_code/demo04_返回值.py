# 发表文章：发表文章的函数只负责发表，不需要汇报结果，不需要返回值
def publish_article(article):
	print("文章发表成功了..")

# 注册用户：注册用户会得到两个结果【用户已存在注册失败|注册成功】
def regist(username):
	if username == "admin":
		print("用户已存在")
		return "用户已经存在"# 函数中通过[return 数据 ]返回一个结果
	else:
		print("注册成功")
		return "注册成功"

artl = input("请输入发表文章的内容：")
publish_article(artl)# 调用函数发表文章

uname = input("请输入要注册的账号：")
# 调用函数注册一个新用户
#有返回值的函数调用,如果需要返回值~就需要定义一个变量保存返回的数据
result = regist(uname)
print("result:%s" % result)