# 一级页面：登录界面
# 二级界面：系统首页
# 三级界面：商品超市
import os
# 定义一个列表，保存多个用户
users = [["admin", "123"], ["manager", "manager"]]

# 注意1：多个用户我们要用列表来存储数据
# 注意2：每个用户有账号+密码等等特征，所以一个用户也用一个列表存储
# 注意3：登录判断的循环中，else是设置给for循环的，不是给if的

# 一级页面：登录界面
while True:
	os.system("cls")
	print("\t\t商城登录界面")
	print("#################################")
	print("\t1. 用户登录")
	print("\t2. 用户注册")
	print("\t3. 退出系统")
	print("#################################")

	# 用户输入选项，进入二级页面
	c = input("请输入您的选项：")
	if c == "1": # 登录
		# 登录操作【略...】
		#########################################
		isok = False
		# 1. 要求用户输入账号+密码
		username = input("请输入账号：")
		password = input("请输入密码：")
		# 2. 判断账号密码是否正确
		for user in users:
			if user[0] == username and user[1] == password:
				# 相当于登录成功了，break跳出循环
				isok = True
				input("登录成功，按任意键进入系统首页")
				break
		else:
			input("账号或者密码有误，按任意键重新登录")
			isok = False

		# 3. 登录成功->首页 / 登录失败-> 登录
		#########################################

		# 展示二级页面：首页界面
		while isok:# 条件True->首页 / False->登录
			os.system("cls")
			print("\t\t商城首页")
			print("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
			print("\t1.进入商品超市")
			print("\t2.休闲小游戏")
			print("\t3.返回上级界面")
			print("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")

			# 根据用户输入，判断进入三级页面/返回上级界面
			c = input("请输入您的选项：")
			if c == "1":
				# 展示商品超市界面【三级页面】
				while True:
					os.system("cls")
					print("\t\t商品超市")
					print("♀♀♀♀♀♀♀♀♀♀♀♀♀♀♀♀♀♀♀♀♀♀♀♀♀♀♀♀")
					print("商品编号\t商品名称\t商品单价\t商品库存")
					print("1\t火龙果\t4.9\t200")
					print("2\t火龙果\t4.9\t200")
					print("3\t火龙果\t4.9\t200")
					print("4\t火龙果\t4.9\t200")
					print("♀♀♀♀♀♀♀♀♀♀♀♀♀♀♀♀♀♀♀♀♀♀♀♀♀♀♀♀")

					# 提示用户输入购买商品的编号
					no = input("请输入要购买商品的编号(输入bye返回上一级)：")
					if no == "bye":
						# 从内层循环跳出，继续外层循环
						break
					else:
						print("系统正在升级中...")
						continue

			elif c == "2":
				print("系统正在升级中")
				continue
			elif c == "3":
				# 从内层循环跳出，进入外层循环继续展示登录界面
				break
			else:
				# 如果没有这个选项，内层循环继续循环
				print("没有这个选项")
				continue
	elif c == "2":
		print("系统正在升级中")
	elif c == "3":
		print("系统正在升级中")
	else:
		print("没有这个选项")