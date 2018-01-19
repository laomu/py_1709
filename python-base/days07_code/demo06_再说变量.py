# 全局变量：声明在函数外部的变量
name = "tom"


def play():
	# 局部变量size，只能在play函数中的使用
	size = 10
	print("%s在玩%s尺寸的气球..." % (name, size))

def eat():
	# 局部变量food，只能在eat函数中使用
	food = "鱼香肉丝"
	print("%s在吃饭，吃的是：%s" % (name, food))

def drink():
	print("%s喝了一杯%s升饮料，吃了%s食物" \
		% (name, size, food))

play()
print("~~~~~~~~~~~~~~~~")
eat()
print("~~~~~~~~~~~~~~")
drink()