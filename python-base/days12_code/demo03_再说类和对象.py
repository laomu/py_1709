# 创建一个对象
class Person:

	def __init__(self, name, age):
		self.__name = name
		self.__age = age


	def set_name(self, name):
		self.__name = name

	def get_name(self):
		return self.__name

	def set_age(self, age):
		self.__age = age

	def get_age(self):
		return self.__age

	def __str__(self):# 这样的，对象中已经内置的__str__()函数，称为魔法方法
		return "这是一个自定义输出的对象，name:%s, age:%s" % (self.__name, self.__age)


# 创建对象
p = Person("tom", 18)
# 打印对象
print(p)
print(type(p))