# 开发个人博客系统
# 分析1：要保存数据的字典【用户、文章】
# 分析2：界面之间的跳转【循环、continue、break】
# 分析3：要开发的功能【登录、查看所有文章[查看单个文章]、发表文章】
# 解决方案分析：开发程序的步骤

"""
建议：开始开发程序之前，先做一个简单的分析过程[开发步骤]
[开发步骤：定不同的小目标]
1. 定义保存数据的字典
2. 完成界面的跳转
3. 完成登录功能
	补充：什么是登录？
		> 输入账号+密码：验证你是你自己
		> [变量]记住登录的用户
4. 完成查看【当前用户发表的】所有文章功能
5. 完成发表文章功能
6. 完成查看单个文章功能
7. 添加细节处理[展示时间功能]
"""
# 1. 目标：定义保存数据的字典
# 保存用户的字典
u1 = {"username":"admin", "password":"admin",
		"nickname":"old_wang", "userid":"1"}
u2 = {"username":"manager", "password":"manager",
		"nickname":"rongrong", "userid":"2"}
users = {"admin":u1, "manager":u2}
# 保存文章的字典
a = {"id":"1", "title":"测试文章", 
"publish":"2017-09-19 12:50:16", 
"author":"old_wang", "content": "测试内容测试内容测试内容测试内容"}
a2 = {"id":"2", "title":"关于爱情", 
"publish":"2017-09-19 12:50:16", 
"author":"rongrong", 
"content": "rongrong say:关于爱情，我只想说，我们还有感情！"}
# 问题~分析的时候，认为根据作者查看所有文章比较方便~但是字典的特性是key不能重复
# 解决~不能使用用户昵称作为文章的key了~只能使用编号
articles = {"1": a, "2": a2}
article_id = 2# 记录文章编号的id


# 定义一个变量，用来记录当前登录的用户
login_user = {}

# 2.目标：完成不同界面的跳转
while True:
	print("\t\t个人博客系统")
	print("~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~")
	print("\t\t1.用户登录")
	print("\t\t2.用户注册")
	print("\t\t3.退出系统")
	print("~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~")

	# 用户输入选项，跳转界面
	c = input("请输入您的选项：")
	if c.isdigit():
		if c == "1":# 用户登录
			# 用户登录操作:输入账号+密码，完成登录
			uname = input("请输入您的账号：").strip()
			passwd = input("请输入您的密码：").strip()
			# 登录操作
			if uname in users:
				# 获取字典中已经存在的用户
				exist_user = users.get(uname)
				# 判断密码是否正确
				if exist_user.get("password") == passwd:
					# 登录成功
					input("登录成功，按任意键进入系统首页")
					login_user = exist_user
				else:
					input("您输入的密码不正确，按任意键返回重新操作")
					continue
			else:
				input("您输入的账号不存在，按任意键重新操作")
				continue

			# 展示首页界面
			while True:
				print("\t\t个人博客系统首页")
				print("#################################")
				print("\t\t1.查看所有文章")
				print("\t\t2.发表我的文章")
				print("\t\t3.修改我的文章")
				print("\t\t4.删除我的文章")
				print("\t\t5.返回登录菜单")
				print("#################################")

				c_index = input("请输入您的选项：")
				if c_index.isdigit():
					if c_index == "1":# 查看所有文章
						# 4.目标：查看所有文章
						print("\t查看所有文章[以下是当前用户发表的文章]")
						print("^@! ^@! ^@! ^@! ^@! ^@! ^@! ^@! ^@! ^@! ")
						print("编号\t标题\t作者\t发布时间\t内容")
						for key in articles.keys():
							# 获取当前正在循环的文章
							artl = articles.get(key)
							# 判断是否当前用户的文章
							#if artl.get("author") == 当前登录用户:
							if artl.get("author") == login_user.get("nickname"):
								print("%s\t%s\t%s\t%s\t%s" % \
										(	(artl.get("id")),\
											(artl.get("title")),\
											(artl.get("author")),\
											(artl.get("publish")),\
											(artl.get("content"))))
						print("^@! ^@! ^@! ^@! ^@! ^@! ^@! ^@! ^@! ^@! ")

						# 查看指定编号的文章
						c_article = input("输入文章编号查看指定文章：")
						if c_article.isdigit():
							if c_article in articles:
								# 得到用户要查看的文章
								ay = articles.get(c_article)
								# 展示文章
								print("\t\t文章标题：%s" % ay.get("title"))
								print("\t\t发布时间：%s" % ay.get("publish"))
								print("\t\t作者：%s" % ay.get("author"))
								print("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
								print("文章正文：%s" % ay.get("content"))
								print("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")

								input("查看结束，按任意键返回首页.")
							else:
								input("没有您要查看的文章，按任意键返回首页")
								continue
						else:
							input("您输入了非法字符，按任意键返回首页.")
							continue

					elif c_index == "2":# 发表文章
						# 5. 目标用户开始发表文章
						title = input("请输入文章标题：").strip()
						content = input("请输入文章内容：").strip()
						article_id += 1
						id = str(article_id)
						# 组成一个文章的字典
						ax = {"id":id, "title":title, "content":content,
								"author":login_user.get("nickname"),
								"publish":"2017-09-19 12:00:00"}
						# 添加到文章字典中:发表文章
						articles[id] = ax

					elif c_index == "3":# 修改文章
						pass
					elif c_index == "4":# 删除文章
						pass
					elif c_index == "5":# 返回登录菜单
						input("已经退出登录，按任意键返回登录菜单")
						break
					else:
						input("没有这个选项，按任意键重新操作")
						continue
				else:
					input("您输入了非法选项，按任意键重新输入")
					continue

		elif c == "2": #用户注册
			pass
		elif c == "3": # 退出系统
			pass
		else:
			input("您输入的选项不存在，请核查后重新输入.")
			continue
	else:
		input("您输入了非法选项，按任意键重新输入.")
		continue
