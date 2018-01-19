# 定义一个类型——人的类型
class Person:

	def __init__(self, name, age):
		# 创建对象的时候，对属性进行赋值
		self.name = name
		self.age = age
		self.money = 10000

# 创建了一个人的对象，姓名是tom，年龄是48
p = Person("tom", 48)

# 生活中各种场景下，人的数据会发生变化，过了一年~年龄+1；派出所等级信息~登记姓名、年龄
# 程序代码中，可以通过不同的代码，操作对象的数据
p.name = "jerry"# 改名字
p.age = 18# 改年龄

print(p.name, p.age, p.money)

# 上大学
p.name = "jerry"# 登记姓名
p.age = 118 # 登记年龄
p.money = -10000

print(p.name, p.age, p.money)

################################################
# 如果属性数据，可以直接操作，任何数据都有可能被恶意操作
# 所以，对于数据~只有不同的场景，所有数据都是敏感的！
# 女孩的体重！ 公安局登记信息 | 相亲对象【体重 敏感】
# 所以~我们在定义类型的时候，所有属性数据都是敏感的，不能让直接操作
################################################
# 定义一个用户对象
class User:

	# 定义用户对象的属性
	def __init__(self, name, age):
		# 属性变量，以两个下划线开头
		# 属性如果以两个下划线开头，这个属性只能在内部使用【属性私有化】
		# 1封装第一步：所有属性私有化
		self.__name = name
		self.__age = age

	# 封装第二步：提供访问[获取]数据的方法：get方法
	# 项目规范：获取属性数据的方法  固定名称：：get_属性名称()
	def get_name(self):
		return self.__name

	def get_age(self):
		return self.__age

	# 封装第三步：提供访问【赋值】数据的方法：set方法
	# 项目规范：设置属性数据的方法  固定名称：set_属性名称(*)
	def set_name(self, name):
		self.__name = name

	def set_age(self, age):
		# 封装可选：第四步：在set/get方法中，添加限制条件
		if age > 0 and age < 100:
			self.__age = age
		else:
			print("非法年龄，不允许修改")

u = User("shuke", 16)
# 获取对象的数据
#print(u.__name, u.__age)
# AttributeError: 'User' object has no attribute '__name'
# 属性错误：User对象，没有名称为__name的属性
print(u.get_name(), u.get_age())

# 设置对象的数据  —— 下面的两行代码，并没有生效
#u.__name = "beita"
#u.__age = 19 
# 标准的设置操作
u.set_name("beita")
u.set_age(19)
print(u.get_name(), u.get_age())


u.set_name("xiangfei")
u.set_age(327)#设置了年龄
print(u.get_name(), u.get_age())

