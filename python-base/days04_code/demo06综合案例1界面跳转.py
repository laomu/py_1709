# 一级页面：登录界面
# 二级界面：系统首页
# 三级界面：商品超市

# 注意：我们的界面是需要循环展示的，所以每个界面前面都是一个死循环！

# 一级页面：登录界面
while True:
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
		# 展示二级页面：首页界面
		while True:
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