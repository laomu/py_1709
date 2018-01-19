
# 定义一个用于个人介绍的函数
# 定义了个关键字参数name

# 关键字参数~传递的数据：变量=值，键值对数据【0个~n个】
# 函数中接受到的数据：字典数据
def introduction(**args):
	print(args)
	#print("我的姓名是%s" % (args["name"]))


# 正常调用函数，传递数据即可！
# introduction("tom")
#TypeError: introduction() takes 0 positional arguments
# but 1 was given
introduction()
introduction(name="jerry")
introduction(name="tom",age=18)
introduction(real_name="chaoyang", age=16, gender="男")