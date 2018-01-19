# 定义父类
# 定义一个类型，不需要明确指定继承其他类型，可以省略类型后面的括号
# 定义的这个类型，没有明确指定继承的类型时，默认继承自object
# python3中的所有类型，都是直接或者间接继承自object类型的
# class Person():
# class Person(object):
class Person:
	def __init__(self):
		# 姓名、年龄、存款
		self.name = "jerry"
		self.age = 99
		self.money = 1000000

# 定义一个子类
# 定义类型的时候，类型后面的括号中可以添加其他类型，表示继承其他的类型
class Child(Person):
	pass


c = Child()

print(c.name, c.age, c.money)
# 预测??? 结果： AttributeError属性错误 ’Child' object has no attribute 'name/age/money'
# 真实结果：输出了 jerry 99 1000000
# Child类型中确实没有name,age,money属性，但是Child从Person类型中，继承了这三个属性，所以可以直接使用
