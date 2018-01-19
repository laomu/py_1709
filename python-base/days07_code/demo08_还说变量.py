# 全局变量：
name = "tom"

# 在函数中使用全局变量：查询
def say():
	print("%s说：hello，我在读取全局变量" % name)

# 在函数中使用全局变量：修改/删除
def change():
	print("开始修改全局变量")
	print("如果只是通过全局变量的名称重新赋值")
	print("其实就是重新定义了一个和全局变量同名的局部变量name")
	name = "jerry"
	print("我的新名称：%s" % name)

def change2():
	print("如果要修改全局变量，首先在函数中声明要使用全局变量")
	# 通过global关键字，声明在函数中使用全局变量name
	global name
	name = "shuke"
	print("修改全局变量，name = %s" % name)

say()
print("~~~~~~~~~~~~")
change() #没有使用global name，直接通过name修改全局变量：失败
print("~~~~~~~~~~~~")
print(name)# 测试全局变量在函数中是否被修改了
print("~~~~~~~~~~~")
change2()# 使用了global name来操作全局变量
print("~~~~~~~~~~~~~")
print(name)

"""
	1. 如果要在多个函数中，使用的共同的数据，定义成全局变量
	2. 如果在函数中，只是查询全局变量的数据，~使用使用
	3. 如果在函数中，要修改全局变量的数据~请使用“global 全局变量名称”来引入全局变量
"""