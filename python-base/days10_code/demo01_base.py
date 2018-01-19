# 操作文件数据
# 1. 打开文件
f = open("d:/test.txt")
# 2. 传输数据，读取文件中的数据
c = f.read()
print(c)
# 3. 关闭文件
f.close()
