# 个人博客系统——函数式开发
# 1. 分析都有那些功能，每个功能定义成一个单独的函数
# 登录菜单-登录-注册菜单-注册
# show_login()  login()  show_regist() regist()
# 查看全部文章-查看单篇文章
# show_articles()	show_single_article()
# 发表文章
# publish_article()
# 删除文章
# delete_article()
# 修改文章
# update_article()
# 分析程序运行的入口：程序从哪里开始运行：login()

##############################################
# 1. 定义保存数据的全局变量
# 内置用户1
u1 = {"username":"admin", "password":"123123",
	"nickname": "old_wang", "id": "1"}
# 保存所有用户的字典
users = {"admin": u1}
# 用户编号
user_id = 1

# 内置文章1
a1 = {"id":"1", "title":"今天你python了吗？",
	"publish": "2017-09-19 00:00:00",
	"author": "old_wang",
	"content": "python是什么鬼？"}
# 保存所有文章的字典
articles = {"1":a1}
# 文章编号
a_id = 1

# ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~
# 2. 开始定义各种需要的函数
############用于展示的函数
# 展示登录菜单
def show_login():
	print("\t\t个人博客系统登录")
	print("~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~")
	print("\t\t1.用户登录")
	print("\t\t2.用户注册")
	print("\t\t3.退出系统")
	print("~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~")

	c = input("请输入您的选项：")
	if c == "1":# 用户登录
		# 调用login()函数执行用户登录
		res = login()
		if res == True:
			# 登录成功，进入首页
			input("登录成功，按任意键进入首页")
			show_index()
		else:
			# 登录失败，展示登录菜单
			input("账号或者密码有误，请重新登录")
			show_login()

	elif c == "2":# 用户注册
		# 注册~->进入注册界面
		show_regist()

	elif c == "3":# 退出系统
		pass
	else:
		input("没有这个选项.")
		# 不要关心代码运行在什么地方，只需要关心你要做什么！
		show_login()# 重新展示登录菜单

# 展示注册菜单
def show_regist():
	print("\t\t个人博客系统登录")
	print("~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~")
	print("\t\t1.根据中国法律，注册合法的账号")
	print("\t\t根据屏幕提示，输入合法的数据")
	print("\t\t您已经默认同意我们的操作协议")
	print("~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~")

	res = input("按任意键开始注册流程(输入exit返回登录菜单)....")
	if res == "exit":
		# 展示登录菜单
		show_login()

	# 开始注册，调用注册函数
	regist()





# 展示首页菜单
def show_index():
	print("\t\t个人博客系统首页")
	print("~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~")
	print("\t\t1.查看所有文章")
	print("\t\t2.发表我的文章")
	print("\t\t3.修改我的文章")
	print("\t\t4.删除我的文章")
	print("\t\t5.返回登录菜单")
	print("~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~")

	c = input("请输入您的选项:")

############用于处理数据的函数
# 定义一个处理用户登录的函数
def login():
	# 请用户输入账号+密码
	uname = input("请输入您的账号：").strip()
	passwd = input("请输入您的密码：").strip()
	# 判断登录是否成功
	if uname in users:
		# 获取当前字典中存在的用户
		exist_user = users.get(uname)
		# 判断密码
		if exist_user.get("password") == passwd:
			return True# 返回成功
		else:
			return False# 返回失败
	else:
		return False# 返回失败

# 定义一个处理用户注册的函数
def regist():

	# 正常注册
	uname = input("请输入注册账号：").strip()
	if uname in users:
		input("您注册的账号已经存在，按任意键重新注册")
		show_regist()# 展示注册菜单

	passwd = input("请输入注册密码：").strip()
	passwd2 = input("请确认密码：").strip()
	if passwd != passwd2:
		input("两次密码输入不一致，按任意键重新注册")
		show_regist()

	# 开始注册:创建一个用户对象：字典
	user = {"username": uname, "password": passwd}
	# 添加到系统全局变量中
	users[uname] = user

	# 注册成功
	input("注册成功，按任意键返回登录")
	show_login()


# 程序开始运行的入口：调用某个函数启动程序
show_login()

"""
所谓函数式编程：
1. 每个函数只做一件事，保证每个函数中的代码是最简单的。
2. 函数式开发过程中，一定要注意~我们重点关注的是我们要做什么！而不是代码执行到什么位置！

项目案例：
show_login()：展示登录菜单的函数
show_regist():展示注册菜单的函数
show_index()：展示首页界面的函数

login():用来进行用户登录处理的函数
regist()：用来进行用户注册处理的函数

我们的项目案例，程序运行的入口是：show_login()展示登录菜单开始
"""