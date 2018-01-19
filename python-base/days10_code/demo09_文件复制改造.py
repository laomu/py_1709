# 复制文件：按照二进制的方式复制文件
# 1. 确定要复制的文件和复制到的目标文件
# 要复制的文件source
source = open("D:/迅雷下载/dhxy3.mkv", "rb")
# 复制到的文件target
target = open("d:/大话XIYOU3.mkv", "wb")

# 2. 从源文件读取数据，写入到目标文件中
print("开始复制.....")
buff = 1024 * 1024 * 1024
while True:
	# 死循环，无限读取，每次读取到buff个字节的数据到content中
	content = source.read(buff)
	# print(content的大小)
	if content == b'':
		print("文件复制结束")
		break
	# 将数据写入到target文件中,此时文件内容会临时存在缓存[内存]中
	target.write(content)
	# 将内存中临时存储的数据，主动送给文件
	target.flush()


print("复制完成")
# 3. 关闭文件
target.close()
source.close()
