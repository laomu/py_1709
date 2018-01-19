# # 商城案例
# 用户注册、用户登录、界面跳转、商品购买
# 1.界面跳转->2.用户登录->3.用户注册->[4.商品购买]

import os

# 定义一个列表，用来保存多个用户
u1 = ["admin", "admin"]# 内置用户1 [账号, 密码]
u2 = ["manager", "manager"] # 内置用户2
users = [u1, u2]
# 定义一个集合，用于保存用户的账号列表[防止菜鸟通过代码修改数据导致出现垃圾数据]
users_set = {"admin", "manager"}

# 循环展示登录界面
while True:
	os.system("cls")
	print("\t\t商城登录界面")
	print("########################################")
	print("\t1. 用户登录")
	print("\t2. 用户注册")
	print("\t3. 退出系统")
	print("########################################")

	# 根据用户输入进行判断跳转
	c = input("请输入您的选项：")
	if c == "1": # 用户登录
		# 当我们在代码块中还没有想好写什么代码的时候
		# 为了保证代码不会出现错误，用pass占位
		# pass
		# 开发登录
		show = False# 默认情况下，认为用户没有登录，不允许展示首页
		# 开始登录操作
		username = input("请输入您的账号：")
		password = input("请输入您的密码：")
		for user in users:
			if (user[0] == username) and (user[1] == password):
				# 登录成功
				show = True
				input("登录成功，按任意键进入系统.")
				break
		else:
			# 循环执行结束了，都没有找到对应的账号密码->登录失败
			show = False
			input("账号或者密码有误，按任意键返回登录菜单")


		# 循环展示登录界面
		while show:# True展示/False不展示
			os.system("cls")
			print("\t\t商城首页")
			print("~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~")
			print("\t1. 进入购物超市")
			print("\t2. 休闲小游戏")
			print("\t3. 返回登录菜单")
			print("~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~")

			# 根据用户输入进行判断跳转
			c = input("请输入您的选项：")
			if c == "1":# 购物超市
				#pass
				# 循环展示超市商品
				while True:
					os.system("cls")
					print("\t\t商城超市")
					print("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
					print("商品编号\t商品名称\t商品单价\t商品库存\t商品描述")
					print("1\t\t肉夹馍\t5.00\t20\t天下第一馍")
					print("2\t\t刀削面\t10.00\t160\t天下第一面")
					print("3\t\t羊肉串\t20.00\t200\t天下第一串")
					print("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")

					# 根据用户选项进行购买
					c = input("请输入要购买的商品编号(输入bye返回上一级页面):")
					if c == "bye":
						input("谢谢光临..按任意键返回.")
						break
					else:
						input("没有这个商品，按任意键重新购买")
						continue

			elif c == "2":# 休闲游戏
				input("系统正在升级中，按任意键继续...")
			elif c == "3":# 返回上一级菜单
				input("谢谢惠顾，按任意键返回...")
				break
			else:# 其他选项
				input("没有这个选项，按任意键继续...")
				continue

	elif c == "2": # 用户注册
		# 开始注册，用户输入注册的账号和密码
		while True:
			# 展示注册界面，并接受用户输入数据
			os.system("cls")
			print("^^^^^^^^^^^^^^^^^^^^^^^^^")
			print("\t欢迎注册商城用户")
			print("\t请按照提示输入正确的数据")
			print("^^^^^^^^^^^^^^^^^^^^^^^^^")
			username = input("请输入注册账号：")
			# 限制1：账号不能重复
			if username in users_set:
				input("账号已经存在，请按任意键返回使用其他账号注册")
				continue

			# 如果账号已经存在，中断当前循环，重新开始注册
			if valid:
				continue


			password = input("请输入注册密码：")
			passwd2 = input("请确认您的密码：")
			if password != passwd2:
				input("两次密码输入不一致，请重新注册.")
				continue

			# 用户输入完数据，创建保存用户数据的列表
			user = [username, password]
			users_set.add(username)
			# 将用户添加到系统中
			users.append(user)

			print("Congratulations，您已经拥有我们的会员账号了")
			input("按任意键返回登录菜单，使用您的账号登录系统，尽情享受吧...")
			break

	elif c == "3":
		input("系统正在升级中，按任意键继续...")

	else:
		input("没有这个选项，按任意键继续...")


