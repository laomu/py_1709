users = []
name = "tom"

# 在函数中使用全局变量
"""
name没有通过global name引入的话，数据不允许修改
	函数中定义的name会被当成一个同名的局部变量
users尽管没有通过global users引入，但是users列表
内部的数据是可以修改的

"""
def regist():
	name = "jerry"
	users.append("tom")
	users.append("jerry")

regist()
print(users)
print("name = %s" % name)
