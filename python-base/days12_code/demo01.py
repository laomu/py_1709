"""
扩展：——程序：数据
	如：商品数据~
		通过一大堆的变量，定义了一个商品
		name = "火龙果"
		price = 5.00
		stock = 12.00
	对象：从另一种角度上，将零散的数据，整合在了一个对象中
		goods.name/price/stock
"""

# 作业1. 定义一个宠物类型
# 1.定义好宠物类型
class Pet:
	
	# 2.定义特征属性
	def __init__(self, nickname, age, weight, sex, kind, color, healty):
		self.nickname = nickname
		self.age = age
		self.weight = weight
		self.sex = sex
		self.kind = kind
		self.color = color
		self.healty = healty # 健康值 >60表示健康

	# 3. 定义宠物的行为——定义宠物的方法
	def eat(self, food):
		print(self.name + "开始吃饭了，吃" + food)

	def play(self):
		print(self.name + "玩耍中....")


# 作业2. 定义一个宠物医院的类型
class PetHospital:

	def __init__(self,name):
		self.name = name

	# 怎么确定一个函数有木有参数？
	# 1. 函数是用来做什么的？
	# 2. 做这件事情，需要什么数据？
	# 3. 不需要数据就不需要参数，需要什么数据就添加什么参数
	def care(self, p):
		"""
		参数p：传递一个宠物对象作为参数
		"""
		print(p.nickname + "当前宠物健康状态：%s" % p.healty)
		if p.healty < 60:
			print(p.nickname + "宠物生病了，开始治疗....")
			while p.healty < 60:
				p.healty += 10
			else:
				print(p.nickname + "宠物治疗结束，当前健康值：%s" % p.healty)
		else:
			print(p.nickname + "当前宠物健康，不需要治疗..")

##############################################
# 定义好类型之后，还没有存在数据呢
# 创建一个宠物对象
p1 = Pet("tom", 48, 20, "公", "cat", "蓝色", 33)
p2 = Pet("jerry", 45, 5, "母", "mouse", "棕色", 78)

# 创建一个二哈对象
p3 = Pet("erha", 10, 30, "公", "dog", "灰色", 80) 


# 创建一个宠物医院对象
hp = PetHospital("宠物医院")

# 宠物体检
hp.care(p1)# tom体检
hp.care(p2)# jerry体检
'''
D:\resp_work\py_1709\days12_code>python demo01.py
Traceback (most recent call last):
<错误追踪>
  File "demo01.py", line 68, in <module>
  <文件 demo01.py，第68行出现了错误>
    hp.care(p1)# tom体检
    <出现错误的代码位置>
  File "demo01.py", line 48, in care
  <文件demo01.py第48行出现了错误>
    print(p.name + "当前宠物健康状态：%s" % p.healty)
    <出现错误的代码位置>
AttributeError: 'Pet' object has no attribute 'name'
<属性错误:Pet类型中，没有名称为name的属性>
'''