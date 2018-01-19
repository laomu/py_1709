# 鸡和蛋的故事
index = 0
def a():
	global index
	index += 1
	print("出现了鸡")
	print("然后出现了蛋---%s" % index)
	b()

def b():
	global index
	index += 1
	print("出现了鸡")
	print("然后出现了蛋---%s" % index)
	c()

def c():
	global index
	index += 1
	print("出现了鸡")
	print("然后出现了蛋---%s" % index)
	d()

def d():
	global index
	index += 1
	print("出现了鸡")
	print("然后出现了蛋---%s" % index)
	print("别扯淡了...")

# 本来：函数~为了减少重复的代码
#a() 

# 当多个函数中出现了重复的代码，通过函数递归来完成函数的多次调用
# 递归：函数自己调用自己的过程
# 递归的作用：函数级别的循环
count = 0

def t():
	global count
	count += 1
	print("神说：先有了鸡")
	print("然后就有了蛋..%s" % count)

	#if count >= 10:
		# return结束函数的执行
		#print("在递归调用过程中，一定要有一个结束函数执行的地方")
		#return
	# 调用自己
	t()

# 调用执行函数
t()