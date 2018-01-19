# 复制文件：按照二进制的方式复制文件
# 1. 确定要复制的文件和复制到的目标文件
# 要复制的文件source
source = open("D:/迅雷下载/dhxy3.mkv", "rb")
# 复制到的文件target
target = open("d:/大话西游3.mkv", "wb")

# 2. 从源文件读取数据，写入到目标文件中
content = source.read()
target.write(content)

# 3. 关闭文件
target.close()
source.close()
