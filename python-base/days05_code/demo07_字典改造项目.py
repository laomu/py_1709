# 定义两个用户:规则   使用字典定义用户
user1 = {"username": "admin", "password": "123123"}
user2 = {"username": "manager", "password": "111111"}

# 定义一个字典，保存多个用户，规则：key账号--value用户
users = {"admin": user1, "manager": user2}


# 1.展示登录界面
while True:
	print("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
	print("\t\t1.登录")
	print("\t\t2.注册")
	print("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")

	# 用户输入选项，跳转
	c = input("请输入选项：")
	if c == "1":#登录
		# 1. 登录操作
		# 用户输入账号+密码
		cus_name = input("请输入账号：")
		cus_pass = input("请输入密码：")
		# 判断登录
		if cus_name in users:# 判断账号是否存在
			exist_user = users.get(cus_name)# 获取字典中存在的用户
			if (exist_user.get("username") == cus_name)\
				and (exist_user.get("password") == cus_pass):
				input("登录成功，按任意键进入主界面")
			else:
				input("密码输入错误，按任意键返回")
				continue
		else:
			input("账号不存在，按任意键返回重新操作")
			continue

		# 1.1. 展示主界面
		while True:
			print("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
			print("\t\t主界面")
			print("\t\t主界面")
			print("\t\t主界面")
			print("\t\t主界面")
			input("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")

	elif c == "2":#注册
		# 2. 注册
		while True:
			print("#########################")
			print("\t\t正在注册")
			print("\t\t正在注册")
			print("\t\t正在注册")
			print("#########################")
			# 用户输入注册的账号和密码
			uname = input("请输入注册账号：")
			# 判断账号是否存在
			if uname in users:
				input("账号已经存在，按任意键返回重新输入")
				continue

			# 输入两次密码
			p1 = input("请输入密码：")
			p2 = input("请再次输入密码：")
			if p1 != p2:
				input("两次密码输入不一致，按任意键返回重新注册")
				continue

			# 创建用户字典
			reg_user = {"username": uname, "password": p1}
			# 添加到系统中
			users[uname] = reg_user

			input("注册成功，按任意键返回登录")
			break

	else:
		input("没有这个选项，按任意键返回")