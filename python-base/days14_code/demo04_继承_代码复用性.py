# 定义一个人的类型
class Person:

	def __init__(self, name, age):
		self.name = name
		self.age = age


# 定义——男人的类型
class Man(Person):

	"""
	继承时：子类会继承父类公开的(普通的)属性和方法
	不会继承私有的属性和方法
	不会继承__init__()和__new__()这样的魔法方法
	"""
	"""
	子类中，使用父类的属性或者调用父类的方法
		1.通过父类的名称直接使用
		Person.__init__(...)
		2.通过super()函数使用父类的属性或者调用父类的方法
		# 出现了[我们<知道要做什么>，但是基础语法不明确]
		# 通过知道要做什么(关键字)--> 网络--> 搜索引擎
		# super()方法，并不是很推荐，使用的地方有限！
		# super()的限制在那里，后面多继承时再说！

	"""
	def __init__(self, name, age, gender):
		# name age父类中的属性——调用父类的__init__函数初始化数据
		# Person.__init__(self, name, age)
		super(Man, self).__init__(name, age)
		self.gender = gender

# 扩展一个女人的类型
class Women(Person):

	def __init__(self, name, age, beauty, weight):
		Person.__init__(self, name, age)
		self.beauty = beauty
		self.weight = weight

# 扩展老人的类型
class OldPerson(Person):

	def __init__(self, name, age, money, healty, insurance):
		Person.__init__(self, name, age)
		self.money = money
		self.healty = healty
		self.insurance = insurance

# 扩展小孩
# 扩展警察
# 扩展匪徒
# 扩展学生
# 扩展.....


man = Man("tom", 19, "男")
print(man.name, man.age, man.gender)