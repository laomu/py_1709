# 二进制文件的复制
import os

# 1. 定义文件的名称
s = "D:/迅雷下载/战狼2.mp4"
t = "D:/ZL2.mp4"

# 2. 打开文件
s_f = open(s, "rb")
t_f = open(t, "wb")

# 3. 开始复制
# 获取一下原来文件的大小
s_size = os.path.getsize(s)# s是描述一个文件的字符串路径

# 定义一个每次读取内容的长度
buff = 1024 * 1024
print("开始复制>>>>>>>>>>>>>>>>>>>>>>>")
while True:
	# 每次读取buff个字节的数据
	content = s_f.read(buff)

	# 4. 复制结束
	if not content:# if not b'':
		print("复制结束<<<<<<<<<<<<<<<<<<<<<<<<")
		break

	# 每次写入到目标文件的数据
	t_f.write(content)
	# 将写入的数据直接保存到文件中
	t_f.flush()
	# 获取新文件的大小
	t_size = os.path.getsize(t)# t是描述一个文件的字符串路径
	print("复制进度：%.2f%%" % ((t_size/s_size) * 100))


