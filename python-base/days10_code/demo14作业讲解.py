
# 百合网
# 用户注册——用户密码：SHA512加密
# 完善个人信息——个人介绍base64编码

# 引入系统中需要的各种模块
import os
import sys
import time
import datetime
import hashlib
import base64


# 1. 保存程序中所有数据的变量
# 保存用户数据的变量；字典
users = {}
# 定义一个全局变量，用来记录当前登录的用户
# 登录有两个步骤：账号密码验证你是你；记住你！
login_user = {}

# 2. 定义各种界面函数
def show_login():# 登录界面函数
	# pass
	# 5. 注释pass；开始开发展示登录界面的函数
	os.system("cls")
	print("\t\t百合网婚恋平台")
	print("#"*70)
	print("\t\t1. 用户登录")
	print("\t\t2. 用户注册")
	print("\t\t3. 退出系统")
	print("#"*70)

	# 用户输入选项
	c_login = input("请输入您的选项：")
	if c_login.isdigit():
		if c_login == "1":# 用户登录
			# 7. 开发登录功能
			res = login()
			if res:
				# 登录成功
				input("登录成功，按任意键访问系统首页")
				show_index()
			else:
				# 登录失败
				input("账号或者密码有误，按任意键重新登录")
				show_login()

		elif c_login == "2":# 用户注册
			#pass
			# 6.注册pass，开始开发注册功能->直接调用注册界面函数
			show_regist()

		elif c_login == "3":# 退出系统
			print("谢谢光临，3S后退出系统")
			time.sleep(1)
			print("谢谢光临，2S后退出系统")
			time.sleep(1)
			print("谢谢光临，1S后退出系统")
			time.sleep(1)
			sys.exit(1)

		else:
			input("没有这个选项，按任意键返回继续操作")
			show_login()
	else:
		input("您输入了非法字符，按任意键重新开始")
		# 展示登录菜单
		show_login()

def show_regist():# 注册界面函数
	#pass
	# 展示注册界面
	os.system("cls")
	print("#"*60)
	print("\t请根据提示输入您的数据")
	print("\t输入合法的数据进行新会员的注册")
	print("#"*60)
	# 开始注册->注册函数regist()
	regist()


def show_index():# 展示首页函数
	# 9.开发首页界面
	os.system("cls")
	print("\t\t百合网平台首页")
	print("~" * 50)
	print("\t\t1.查看个人信息")
	print("\t\t2.完善个人信息")
	print("\t\t3.返回登录菜单")
	print("~" * 50)

	c_index = input("请输入您的选项：")

def show_intro():# 展示个人信息函数
	pass

# 3. 定义处理数据的函数
def login():# 处理用户登录的函数
	# 引入全局变量login_user
	global login_user

	#pass
	# 开始执行登录操作
	uname = input("请输入您的账号：").strip()
	passwd = input("请输入您的密码：").strip()
	# 密码加密
	passwd = encrypt(passwd)

	# 判断用户账号和加密后的密码是否一致
	if uname in users:
		# 获取当前用户，继续判断密码是否一致
		cur_user = users.get(uname)
		if cur_user.get("password") == passwd:
			print("登录成功，按任意键继续")
			# 登录成功，使用全局变量login_user记录当前登录用户
			login_user = cur_user
			return True
		else:
			print("登录失败，按任意键继续")
			return False
	else:
		print("没有这个账号")
		return False

def regist():# 处理用户注册的函数
	#pass
	# 输入账号并且判断是否可用
	uname = input("请输入注册账号：").strip()
	if uname in users:
		input("账号已经存在，按任意键重新输入")
		regist()

	# 输入密码，并且判断密码可用
	passwd = input("请输入注册密码：").strip()
	passwd2 = input("请确认您的密码:").strip()
	if passwd != passwd2:
		input("两次密码输入不一致，按任意键重新注册")
		regist()

	# 加密密码，保存用户数据
	print("加密钱：%s" % passwd)
	passwd = encrypt(passwd)
	print("加密后：%s" % passwd)
	
	user = {"username": uname, "password": passwd}
	# 添加保存到系统的字典中
	users[uname] = user
	# 注册成功，跳转到登录界面
	input("Congratulations，注册成功了，按任意键返回登录菜单")
	show_login()

# 定义一个进行字符串加密的函数
def encrypt(s, f="md5", salt="bh"):
	"""
	encrypt()专门对字符串s进行加密的函数
	s：要加密的字符串
	f：加密方式：md5或者sha
	salt：加密的盐值
	return: 返回加密后的字符串
	"""
	# 定义一个变量，用来保存加密数据
	_en = None
	if f == "md5":
		_en = hashlib.md5(s.encode("utf-8"))
	elif f == "sha":
		_en = hashlib.sha512(s.encode("utf-8"))
	# 添加盐值
	_en.update(salt.encode("utf-8"))
	# 获取加密后的字符串
	_en = _en.hexdigest()
	# 返回加密后的字符串
	return _en


# 4. 定义程序运行的入口
show_login()
