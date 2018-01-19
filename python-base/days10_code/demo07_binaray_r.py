# 二进制文件的读取
d = open("d:/test", "rb")

# 读取数据
c = d.read()
print(c)

# 关闭文件
d.close()