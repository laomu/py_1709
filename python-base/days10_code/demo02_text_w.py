# 以w的方式打开文件
f = open("d:/shuaishuai.txt", "w")
# 向文件中写入数据
#f.write("粮仓，我来了...")
f.write("思桐，~你个死鬼，不要发现我..")
# 关闭文件
f.close()
"""
w方式：打开文件，并且向文件中写入数据
* 如果文件不存在，创建文件并写入数据
* 如果文件存在，清空文件原来的数据并写入数据 
"""