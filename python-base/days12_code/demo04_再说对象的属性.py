# 创建一个宠物对象
class Pet:

	def __init__(self, name):
		self.__name = name


	def set_name(self, name):
		self.__name = name

	def get_name(self):
		return self.__name

#############################################
# 开发场景：2个开发人员协同开发
#############################################
# 开发人员A：
# 创建了一个对象，宠物猪
pig = Pet("小猪")

# 扩展宠物猪的属性
pig.sex = "公"

print(pig.get_name(), pig.sex)

# 开发人员B：
dog = Pet("拉布拉多")
# 扩展自己的属性
dog.gender = "母"

print(dog.get_name(), dog.gender)

# 收获：对象的属性，在对象创建之后，还可以扩展，程序的灵活性得到了非常大的提升
# 问题：不同的人开发代码时，会出现代码风格迥异的情况【开A：性别sex；开B：性别gender】
# 严重的造成项目不稳定的因素！
# 解决方案:限制一个类型可以出现什么属性！

# 定义一个经过属性限制的封装的完善的类型
class Person:

	# 定义Person类型中，可以出现哪些属性
	# __slots__用来限制类型中可以出现的属性，没有定义的不允许出现
	__slots__ = ["__name", "__age", "__gender"]

	# 初始化属性
	def __init__(self, name, age, gender):
		self.__name = name
		self.__age = age
		self.__gender = gender


	# 提供set/get方法
	def set_name(self, name):
		self.__name = name

	def get_name(self):
		return self.__name

	def set_age(self, age):
		self.__age = age

	def get_age(self):
		return self.__age

	def set_gender(self, gender):
		self.__gender = gender

	def get_gender(self):
		return self.__gender

	def __str__(self):
		return "{name:%s, age:%s, gender:%s}" \
		 % (self.__name, self.__age, self.__gender)


# 创建对象
old_wang = Person("老王", 86, "男")
# 扩展属性
old_wang.height = 1.40
# AttributeError: 'Person' object has no attribute 'height'
# 属性错误：Person类型没有名称为height的属性

print(old_wang)
print(old_wang.height)