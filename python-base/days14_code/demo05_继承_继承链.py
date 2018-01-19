# 老爷子：父类
class Person:
	def __init__(self, name):
		self.name = name #姓名


	def eat(self):
		print("%s 吃大餐...满汉全席..." % self.name)

# 老头子：老爷子的子类~~~又是一种父类
class Man(Person):

	def __init__(self, name, age):
		Person.__init__(self, name)
		self.age = age # 年龄

	def play(self):
		print("%s开始玩耍..多大了？%s." % (self.name, self.age))

# 儿子：老头子的子类
class Child(Man):

	def __init__(self, name, age, gender):
		Man.__init__(self, name, age)
		self.gender = gender  # 性别

	def sleep(self):
		print("%s多大了？%s，玩什么玩，滚去睡...【%s】" % (self.name, self.age, self.gender))

	def __str__(self):
		return "姓名：%s, 年龄：%s，性别：%s" %\
			(self.name, self.age, self.gender)

li_gang = Child("李刚", 18, "男")
print(li_gang)

li_gang.eat()# 调用爷爷的方法
li_gang.play()# 调用父亲的方法
li_gang.sleep()# 调用自己的方法