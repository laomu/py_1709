# 定义父类
class God:

	def __init__(self, name):
		# 私有的属性
		self.__name = name

	# 公开的set/get方法
	def get_name(self):
		return self.__name

	def set_name(self, name):
		self.__name = name
	# 公开的念经和战斗的方法
	def recite(self):
		print("天神在念经...")

	def fight(self):
		print("天神在战斗")

	# 私有的技能的方法
	def __lion_roar(self):
		print("狮子吼...")

class ZhiShen(God):

	def __init__(self, name, age):
		God.__init__(self, name)
		self.age = age


# 问题：鲁智深到底继承了那些属性和方法？
zhishen_lu = ZhiShen("鲁智深", 46)

# 继承的属性：
print(zhishen_lu.age)# 自己的属性
# print(zhishen_lu.__name)# 继承的属性
#AttributeError: 'ZhiShen' object has no attribute '__name'
# 属性错误：ZhiShen对象没有一个名称为__name的属性
# 结果：子类不能继承父类的私有的属性

# 继承的方法：
print(zhishen_lu.get_name())# 继承的get_name()方法
zhishen_lu.recite()# 继承的recite()念经方法
zhishen_lu.fight()# 继承的fight()战斗的方法
zhishen_lu.__lion_roar()# 继承的__lion_roar()狮子吼的方法
#AttributeError: 'ZhiShen' object has no attribute '__lion_roar'
#属性错误：ZhiShen类型对象中没有一个名称为__lion_roar的属性或者方法


# 练习并总结
# 1.什么是继承
# 2. 继承的基本语法
# 3. 子类中，怎么访问父类的属性和方法 Person / super()
# 4. 子类中，可以继承父类的那些属性和那些方法
# 要求：每个人申请自己的【简书账号/掘金账号/CSDN账号】，开始将每天学习的东西，总结发布到网上。
# 博客/技术文章
