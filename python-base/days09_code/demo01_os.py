# 程序用来列出给定路径下所有的文件夹和文件信息
# 通过import引入os模块
import os

# 定义一个函数，用于罗列所有的文件夹和文件
def scan_dir(path):#d:/resp_work/
	# 获取当前文件夹下所有的文件【文件夹/文件】
	file_list = os.listdir(path)#['py_1709']
	# 遍历循环
	for file in file_list:
		file = path + os.sep + file
		
		# 如果是文件，直接打印文件名称
		if os.path.isfile(file):
			print(">>>>>>>>这是一个文件：%s" % file)

		# 如果是文件夹
		if os.path.isdir(file):
			print("========这是一个文件夹：%s" % file)
			# 继续扫描该文件夹下的所有文件
			scan_dir(file)

print("~~start scan.....")
scan_dir("d:/迅雷下载/")

print("----stop scan....")