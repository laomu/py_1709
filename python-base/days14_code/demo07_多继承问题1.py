class Teacher:
	def __init__(self, name):
		self.name = name

	def eat(self):
		print("teacher吃饭了")

class Student:
	def __init__(self, name):
		self.name = name

	def eat(self):
		print("student吃饭了")

# 同时继承了两个父类
class Person(Teacher, Student):
	def __init__(self, name, age):
		# 初始化父类的数据
		super(Person, self).__init__(name)
		self.age = age

p = Person("tom", 18)
# name是使用的Teacher.name?Student.name?
print(p.name)
# eat()是Teacher.eat()?Student.eat()?
p.eat()

"""
python3
问题1：如果继承的多个父类中，出现了相同名称的属性或者方法
此时，在继承列表中，会从左向右依次在父类中查询需要的属性和方法
查询到第一个满足的属性和方法执行使用，并且不再向后查询
"""