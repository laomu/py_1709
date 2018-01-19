# 普通参数
def test1(x):
	print(x)

test1(10)# 普通参数数据，调用时必须传递

# 默认参数
def test2(x, y, o="+"):
	print("执行%s和%s的%s的运算"%(x,y,o))

test2(1, 2)# 默认参数o，可以不传递数据，默认使用 + 
test2(2, 3, "*")# 默认参数o，传递了数据*，使用传递的符号：*
test2(10, 20, "/")

def test21(name="jerry", age):
	print(name, age)
test21("tom", 19)
#test21(20)
#SyntaxError: 
# non-default argument follows default argument
# 语法错误：没有默认值的参数，跟在了默认值参数后面


# 可变参数
def test3(name, *args):
	# 可变参数args，接受到的n个参数数据，存放在一个元组中进行使用
	print(args)
test3("jerry")# 可以不用传递数据
test3("hello", "python")
test3("朝阳", "成都", "赵雷")

# 关键字参数
def test4(**args):
	print(args)
test4()
test4(name="tom")
test4(name="jerry", age=18)