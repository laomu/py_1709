# 二进制文件的数据写入
b = open("d:/test", "wb")

# 向二进制文件中写入数据
b.write("hello".encode("utf-8"))

# 关闭文件
b.close()