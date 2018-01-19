# 日志记录
from datetime import datetime
import sys
import time

# 获取当前的日期时间
def get_time():
	# 获取当前时间
	now = datetime.now()
	# 转换成字符串时间
	time_str = now.strftime("%Y/%m/%d %H:%M:%S")
	return time_str

# 记录用户操作到文件中
def logging(msg):
	# 打开文件
	f = open("record.log", "a")
	# 拼接要记录的数据
	info = get_time() + "::" + msg + "\r\n"
	# 将数据写入到文件中
	f.write(info)
	# 关闭文件
	f.close()

# 案例代码：用户登录操作
# print()和input()是给用户看的
# logging()记录的日志是给开发人员看的
def show_login():
	print("\t\t用户登录操作")
	print("#"*60)
	print("\t\t1.用户登录")
	print("\t\t2.用户注册")
	print("\t\t3.退出系统")
	print("#"*60)
	# 用户输入选项
	c = input("请输入选项：")
	# 记录用户操作
	logging("打开登录菜单，用户输入了选项%s" % c)

	if c == "1":
		# 记录用户操作
		logging("用户正在进行登录操作..")
		input("系统功能你正在升级中,按任意键返回")
		show_login()
	elif c == "2":
		# 记录用户操作
		logging("用户正在进行注册操作..")
		input("系统功能你正在升级中,按任意键返回")
		show_login()
	elif c== "3":
		logging("用户选择了退出系统")
		print("谢谢光临，3S后退出系统")
		time.sleep("3")
		sys.exit(1)
	else:
		logging("用户输入了非法选项，返回登录菜单")
		input("用户输入了非法选项，返回登录菜单")
		show_login()

# 启动程序
show_login()