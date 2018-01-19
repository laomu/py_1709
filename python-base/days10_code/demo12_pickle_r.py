# 从文件中读取代码的二进制数据

# 打开文件——二进制的方式打开并读取文件
f = open("d:/data", "rb")

# 通过pickle的load()方法将文件中的数据读取到程序中
import pickle
u = pickle.load(f)
print(u)
print(type(u))

# 关闭文件
f.close()

