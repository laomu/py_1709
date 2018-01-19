# 老张开车去东北
# 面向过程
def travel(name, tools, target):
	print("%s-->驾驶%s-->到%s" %(name, tools, target))

travel("老张", "车", "东北")
# 老张-->驾车-->到东北

travel("老李", "自行车", "北京")
# 面向过程：数据比较零散；数据比较简单；描述功能有限


# 面向过程2：
def travel1():
	print("老张开车去东北")
	# N行代码

def travel2():
	print("老李骑自行车去北京")
	# N行代码
# 扩展功能~老宋开车去马蓉家[XX地]
def travel3():
	pass
	# .....
