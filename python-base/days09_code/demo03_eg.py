# 科学计算器
# 分析【展示界面--用户输入--数据计算】
# 问题1：怎么封装函数？两种设计方式-各有优缺点，推荐设计方式2
# 问题2：怎么方便的判断是否需要用户输入第二个数据？ 
# 可以通过列表保存操作符号，通过成员运算符判断是否需要第二个数据
base_opra = ["+", "-", "*", "/", "log"]
adv_opra = ["sin", "cos", "tan"]

def show_menu():
	print("\t\t科学计算器")
	print("#"*80)
	print("分析1：两个数据运算的作为一种类型；一个数据运算的作为一种类型")
	Print("分析2：基本运算作为一种类型；科学运算作为一种类型")
	print("#"*80)
	num1 = input("请输入您的第一个数据：")
	opra = input("请输入操作符号：")
	if opra in base_opra:
		num2 = input("请输入您的第二个数据：")
		# 继续
		calculation(float(num1), opra, float(num2))
	elif opra in adv_opra:
		# 不需输入第二个数据，直接运算
		calculation(float(num1), opra)
	else:
		input("没有这个操作符号，按任意键重新操作")
		show_menu()


# ----------------------------------------------------
# 设计方式1：将两个不同运算风格的代码，封装在了两个不同的函数中
# 优点：思路明确
# 缺点：代码有一定量的重复
# 一个数据的运算函数
def single_cal(num1, opra):
	pass

# 两个数据的运算函数
def multi_cal(num1, num2, opra)
	pass
# ----------------------------------------------------

# ----------------------------------------------------
# 设计方式2：根据操作，将计算过程封装在一个函数中
# 优点：功能集中，操作灵活
# 缺点：编程思路要求较高！
def calculation(num1, opra, num2=None):
	# 问题3：怎么判断是进行两个数据的运算还是三个数据的运算
	if num2 != None:# 两个数据的运算 num2=12
		pass
	else:
		# 一个数据的运算
		pass

#calculation(1, "tan")
#calculation(1, "*", 12)
# ----------------------------------------------------