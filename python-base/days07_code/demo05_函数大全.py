# 生活中的行为？
"""
* 不需要资源，不需要汇报的行为：挂横幅
* 需要资源，但是不需要汇报的行为：买气球
* 不需要资源，但是需要汇报的行为：有木有人迟到！
* 需要资源，有需要结果的行为：买东西
"""
# 程序代码中：函数
"""
	不需要参数，不需要返回值的函数：展示菜单界面
	需要参数，但是不需要返回值的函数：保存数据
	不需要参数，但是需要返回值的函数：休闲小游戏促销
	需要参数，需要返回值的函数：计算器
"""
def calculation(anum1, num2, opr):
	"""
	num1:操作的第一个数据
	num2:操作的第二个数据
	opra:操作符号
	"""
	result = -1
	if opra == "+":
		result = num1 + num2
	elif opra == "-":
		result = num1 - num2
	elif opra == "*":
		result = num1 * num2
	elif opra == "/":
		result = num1 / num2
	else:
		result = "没有这个操作"
	# 返回操作的结果
	return result

num1 = float(input("请输入第一个数据："))
num2 = float(input("请输入第二个数据："))
opra = input("请输入操作符号：")
# 调用函数进行运算
res = calculation(num1, num2, opra)
print("结果：%s" % res)

# 变量：临时存储数据的容器~~
# 一旦有了函数，变量就有了故事！
# 有了函数，变量就有了区分：全局变量 、 局部变量
# 全局变量：定义在函数外面的变量
# 局部变量：定义在函数中的变量