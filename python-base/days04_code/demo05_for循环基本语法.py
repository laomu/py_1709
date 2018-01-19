# for循环遍历有顺序的数据
# 有顺序的数据：字符串、列表
'''
s = "hello python！我来了..."

for x in s:
	print("正在循环的数据：%s" % x)
'''

'''
# 常规循环遍历列表
names = ["艾薇儿", "艾希", "奥拉夫", "卡特"]
for name in names:
	print("正在遍历的：%s" % name)
'''

# 循环遍历列表的同时查看数据对应的下标[编号]
# 扩展：使用enumerate(有顺序的数据)
# enumerate()是将有一个有顺序的数据，添加下标
names = ["艾薇儿", "艾希", "奥拉夫", "卡特"]
for index, obj in enumerate(names):
	print("下标：%s-->>数据：%s" % (index, obj))