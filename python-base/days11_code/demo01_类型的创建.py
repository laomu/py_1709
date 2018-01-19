# 分析需要什么类型
# [分析过程：略；需要：人的类型]
'''
# 1. 定义一个人的类型
class Person:
	pass

# 定义一个宠物的类型
class Pet:
	pass

# 定义个房子的类型
class House:
	pass
'''

# 2. 定义类型的同时，定义类型的特征[属性]
class Person:
	################################################
	# 定义一个类型的特征
	# 将特征[属性]写在__init__函数中，通过self.属性名称指定
	# 特征/属性：变量，命名规则和变量一致
	################################################
	# 人的类型，有什么特征：
	# 身高、体重、姓名、性别
	# self表示自然人：我
	# 定义了人的四个特征
	def __init__(self, height, weight, name, gender):
		self.height = height
		self.weight = weight
		self.name = name
		self.gender = gender
	################################################
	# 定义一个类型的行为
	# 就是定义一个普通函数
	# 当普通函数定义在类型中时，我们通常会称这个函数：方法
	################################################
	# 人的行为：吃饭、睡觉、娱乐
	def eat(self):
		print(self.name + "吃饭了...")

	def sleep(self):
		print(self.name + "睡觉了...")

	def play(self):
		print(self.name + "玩耍中...")

class Pet:

	def play(self):
		print("宠物在玩耍中")

# 创建了一个宠物对象
p = Pet()
# 查看p的类型
print(type(p), p)

# 创建一个人的对象
person = Person(1.73, 78, "tom", "男")# 通过类型名称，创建对象时，会自动调用__init__()函数
print(type(person))

# 要使用对象的属性和方法
# 使用对象的属性【赋值 | 取值】
person.name = "jerry"
print(person.name)
# 要使用对象的方法【对象.方法()】
person.eat()
person.play()

person2 = Person(1.75, 80, "shuke", "男")
person2.eat()
person2.sleep()

person.eat()#????