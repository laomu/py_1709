# 多继承情况下，父类怎么初始化数据
class Teacher:

	def __init__(self, name, job):
		self.name = name
		self.job = job


class Student:

	def __init__(self, name, homework):
		self.name = name
		self.homework = homework


class Person(Teacher, Student):
# class People(Student, Teacher):

	# 两个父类不同的初始化方式
	def __init__(self, name, job, homework, age):
		# 父类数据怎么初始化？
		# super(Person, self).__init__(name, job)
		Teacher.__init__(self, name, job)
		Student.__init__(self, name, homework)
		self.age = age

p = Person("tom", "讲师", "晚作业", 18)
print(p.name, p.job, p.homework, p.age)


"""
多继承有它非常强大的地方，一个类型可以同时集成多个类型中
所有的属性和方法，通过一个类型的对象就可以同时使用之前多
个类型才能用的属性和方法了。

多继承同时存在非常大的设计问题
1.多继承，多个父类中尽量不要出现相同名称的属性或者方法，容易
造成执行结果达不到预期的目的！
【在进行软件结构分析的时候，对父类要进行处理】

2.多继承，在父类数据初始化时，不同的父类初始化方式不同，所以
要单独对每个父类进行处理，导致程序的复杂度几何倍数的提升！

结论：在实际项目开发中，根据需要，优先选择使用继承链方式处理
其次选择多继承方式。
PS：如果在某个地方使用了多继承，一定要保证使用的操作功能非常简单甚至单一
一定要保证可能出现的多个父类中，肯定不会出现相同的属性和方法

"""


############################################
# 问题：Teacher有name属性，Student有name属性，能不能删除一个
# 
# 分析：一个类型定义好之后，可能被唯一一个类继承；也可能被不同的多个类继承
############################################
class LittleStu(Student):

	def __init__(self, name, homework):
		Student.__init__(name, homework)

ll = LittleStu("jerry", "晚自习作业")


class TrainTeacher(Teacher):

	def __init__(self, name, job):
		Teacher.__init__(name, job)

laomu = TrainTeacher("老木", "python培训讲师")

