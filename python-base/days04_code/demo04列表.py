print("列表[组合数据类型之一]")
print("列表中可以保存多个数据")
print("基本语法：列表名称(变量) = [列表中存放的数据]")

print("#"*40)
print("在一个名称为names的列表中，有顺序的存放了4个数据")
names = ["奥拉夫", "艾希", "艾薇儿", "盖伦"]
print("#"*40)
print("查询列表：")
print(names)
print("#"*40)
print("根据编号1查询数据：")
print(names[1])# 艾希
print("查询位置在3的数据(编号2)：")
print(names[2])# 艾薇儿

print("$"*50)
print("列表中的数据（增加/删除/修改/查询）：")
print("1.增加数据append()/extend()/insert()")
print("append()是在列表的末尾增加一个数据")
names.append("卡特")
print(names)
print("extend()是在列表的末尾增加多个数据")
print("append()是增加一个数据;extend()增加多个数据")
names.extend(['赵信', '剑圣', '蛮王'])
print(names)
names.append(['赵信', '剑圣', '蛮王'])
print(names)

print("insert(i, o)在指定的位置增加数据")
names.insert(1, "赏金猎人")
print(names)

print("$"*50)
print("2.修改数据，可以根据编号直接修改该编号位置的数据")
names[1] = "皮城女警"
print(names)

print("$"*50)
print("3.查询数据，根据编号查询数据")
print("3.1 直接通过列表名称，查看列表中所有数据")
print(names)
print("3.2 根据编号，查询列表中的某个数据")
print(names[1])
print("3.3. 遍历数据：把列表中的数据，依次取出来看一下")
i = 0
while i < len(names):# len(列表) 获取列表中数据的数量
	print("遍历数据：%s" % names[i])
	i += 1

print("$"*50)
print("4. 删除数据")
print("4.1. pop()删除列表中最后一个数据")
names.pop()
print(names)
print("4.2. remove(x)删除列表中指定的数据")
names.remove("卡特")
print(names)
print("4.3 clear()删除列表中所有数据")
names.clear()
print(names)