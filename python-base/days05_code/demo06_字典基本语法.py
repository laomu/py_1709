# 保存项目中的账号密码
# 字典好用~和其他类型相比较，字典多了一个功能，字典中保存的每个数据~可以有一个名称[key变量]
users = {
	# key<账号>:value<用户>
	"admin":{"username":"admin", "password":"123123"}
	"admin":["admin", "123123"],

	"manager":["manager", "111111"],
	"administrator":["administrator", "123456"]
}
# 增加数据
# 字典名称[key值] = value值
users["old_wang"] = ["old_wang", "songzhe"]
print(users)

print("~~~~~~~~~~~~~~~~~~~~~")
# 修改数据
# 字典名称[key值] = value值
users["admin"] = ["admin", "111111"]
print(users)

# 查询数据
# 字典[key] 查询key对应的value值
print(users["admin"])
# 字典.get(key) 查询key对应的value值
print(users.get("admin"))

print("~!~~~~~~~~~~~~~~~~~")
# 删除数据
# pop(key)：通过key删除一个键值对 
users.pop("old_wang")
print(users)
# popitem():随机删除一个
users.popitem()
print(users)

# 其他高级操作
# 1. 获取一个字典中的所有的key
key = users.keys()
# 2. 获取所有的value
values = users.values()
# 3. 获取所有的键值对
item = users.items()