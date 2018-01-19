# 斐波那契数列:经典递归算法的【数学题】！
# 0 1 1 2 3 5 8 .....
# 核心：后一个数字，是前两个数字的和

'''
# n：获取第n个位置的数字
def f(n):
	if n == 1:
		return 0

	if n == 2 or n == 3:
		return 1
	# 返回前两个数字的和
	return f(n-1) + f(n-2)
'''

import os

def show_login():
	os.system("cls")
	print("\t\t登录界面")
	print("~ * ~ * ~ * ~ * ~ * ~ * ~ * ~")
	print("\t\t1. 用户登录")
	print("\t\t2. 用户注册")
	print("\t\t3. 退出系统")
	print("~ * ~ * ~ * ~ * ~ * ~ * ~ * ~")

	c_login = input("请输入选项：")
	if c_login.isdigit():
		# 1. 退出程序；2.延时
		if c_login == "3":
			print("3S后退出系统，下次见....")
			# 延时
			import time
			time.sleep(1)
			print("2S后退出系统，下次见....")
			time.sleep(1)
			print("1S后退出系统，下次见....")
			time.sleep(1)
			# 退出程序
			import sys
			sys.exit(1)
		else:
			input("系统正在升级中..，按任意键继续...")
			show_login()
	else:
		# 递归调用：重新调用自己展示登录界面
		input("输入了非法选项，按任意键重新操作")
		show_login()

show_login()

"""
函数式编程
核心思路：一定要记得你自己<要做什么>-<函数>
千万不要考略代码开发到什么位置
"""