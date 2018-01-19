# 读取文本文件中的数据
f = open("d:/shuaishuai.txt", "r")

# 读取数据
content = f.read()
print(content)

# 关闭文件
f.close()