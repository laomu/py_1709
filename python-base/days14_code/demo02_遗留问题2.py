# 老张开车去东北——面向对象
# 抽取类：[在一个完成的功能中，出现的名词一般都是对象/类型]
# 抽取类的属性：[一种类型表示的事物特征<名词>]
# 抽取类的方法：[一种类型表示的事物可能做出的动作<动词>]
############################################
class Person:

	def __init__(self, name):
		self.name = name

	def drive(self, vehical, target):
		vehical.run(target)
		print(self.name + "到达了目的地：" + target.name)
		# 驾驶交通工具

class Vehical:

	def __init__(self, name):
		self.name = name

	def run(self, target):
		print(self.name + "行驶中....")
		# 交通工具行驶，target是最终停下的地方

class Address:

	def __init__(self, name):
		self.name = name
###########################################
# 1. 老张开车去东北
# 目标地对象
addr = Address("东北")
# 交通工具对象
car = Vehical("宝马")
# 老张对象
old_zhang = Person("老张")

# 老张出发
old_zhang.dirve(car, addr)

# 2. 老李骑自行车去北京
addr2 = Address("北京")
bicycle = Vehical("自行车")
old_li = Person("老李")

old_li.drive(bicycle, addr2)

# 3. 老宋开车去马蓉家
addr3 = Address("马蓉家")
car2 = Vehical("本田")
old_song = Person("老宋")

old_song.drive(car2, addr3)


