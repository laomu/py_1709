
# 定义一个函数，函数中包含一个可变参数args
def px(name, *args):
	# 可变参数通过参数名称可以直接使用，使用的时候就不要添加*符号
	# 通过可变参数，接受到的参数数据保存在了一个元组中！
	print("%s参数:##############################" % name)
	for n in args:
		print("--->%s" % n)

# 不传递数据
px("tom")
# 传递一个数据
px("jerry")
# 传递多个数据
px("宁可把错误留在课堂上","不要把命放到加班上.")
px("hello", "python", "人工智能", "数据爬虫")


# 可变参数，为什么不能放在固定参数的前面？
# ~ py("jerry")-->	jerry->args ?  -> name
# ~ py("tom", "jerry")-->name?
# ~ PS：请注意，可变参数后面不要添加固定参数~可变参数会接受掉所有的数据
def py(*args, name):
	pass
#py("tom", "jerry")
