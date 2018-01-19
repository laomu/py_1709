# 通常情况，一个函数只做一件事情，所以一般一个函数只返回一个独立的数据
def calculation(num1, num2, opra="+"):
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
		result = "None"

	return result

print(calculation(1, 2))# 使用默认参数进行运算
print(calculation(12, 11, "*"))# 指定参数进行运算

# 1. 某些特殊情况下，可能会返回多个数据
# 飞机大战：飞机~界面中，位置【获取飞机位置】
def get_position():
	# 计算飞机的位置，得到位置数据x,y
	x = 100
	y = 180
	#return (x, y)#  [x, y]  #{x, y}#  {"x":x, "y":y}
	#return [x, y]
	# return {x, y}
	return {"x":x, "y":y}


# 调用函数，获取位置
res = get_position()
# 1.返回元组/列表
#print("x坐标位置：%s" % res[0])
#print("y坐标位置：%s" % res[1])
# 2.返回集合:对于返回的数据~如果顺序有关系，返回集合是错误的做法
# print(res[0])
# 3.返回字典的形式
print("x坐标：%s" % res.get("x"))
print("y坐标：%s" % res.get("y"))


# 2.函数可以返回多个数据：是python的函数比较友好的操作，但不是必须的
def get_enemy_position():
	# 计算获取地方飞机的坐标
	x = 200
	y = 380
	# 使用逗号分隔多个数据，多个一起返回！
	return x, y 

#调用函数获取坐标位置
a, b = get_enemy_position() # a, b = x, y
print("敌方飞机的x坐标:%s" % a)
print("敌方飞机的y坐标:%s" % b)
