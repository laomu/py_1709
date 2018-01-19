# 多继承：一个类型可以同时继承多个类型
# 多继承~体现的是一个对象在现实生活中扮演的不同的角色
# 男人-> 
# -->自己家[儿子->孝顺]
# -->老岳父[女婿->孝顺]
# -->儿子[父亲->打儿子]
# -->妻子[丈夫->爱妻子]
class Son:

	# 定义行为——孝顺
	def fealty(self):
		print("儿子孝顺爸妈")

class SonInLaw:

	def fealty_x(self):
		print("女婿孝顺岳父岳母")

class Father:
	# 教育小孩
	def education(self):
		print("教育小孩~~打一个小时")

class Husband:

	def love(self):
		print("爱护妻子....")


# 主人公:同时继承了[儿子][女婿][父亲][丈夫]
# 多继承~一个类型，同时继承了多个父类
# 就相当于继承了多个父类中所有的公开的属性和方法
class Man(Son, SonInLaw, Father, Husband):
	pass

# 实际存在的对象
man = Man()
# 场景1：回家
man.fealty()

# 场景2：看丈母娘
man.fealty_x()

# 场景3：检查儿子的作业
man.education()

# 场景4：晚上要休息了
man.love()