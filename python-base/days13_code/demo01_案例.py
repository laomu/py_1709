"""
##########################################
 1. 定义各种类型
 2. 开始填充类型中需要的属性和方法
 3. 回顾填充好的类型，检查封装过程有木有遗漏
##########################################
 4. 开发注册、登录【任何项目，最简单的功能 登录/注册】
 	最重要的功能【登录、注册】
##########################################
"""
import time
import random

# 定义用户类型
class User:
	
	# 定义用户的属性
	def __init__(self, username, password, \
			realname):
		# 登录账号
		self.__username = username
		# 登录密码
		self.__password = password
		# 姓名
		self.__realname = realname
		# 宠物：定义了一个空的宠物栏，可以存放一只宠物
		self.__pet = None
		# 性别
		# self.__gender = "待定"

	# 定义set/get方法
	def set_username(self, username):
		self.__username = username

	def get_username(self):
		return self.__username

	def set_password(self, password):
		self.__password = password

	def get_password(self):
		return self.__password

	def set_realname(self, realname):
		self.__realname = realname

	def get_realname(self):
		return self.__realname

	def set_pet(self, pet):
		self.__pet = pet

	def get_pet(self):
		return self.__pet

	def __str__():
		return "账号:%s;密码:%s;姓名:%s;宠物:%s"

# 定义宠物类型
class Pet:
	
	def __init__(self, nickname, kind):
		self.__nickname = nickname 	# 昵称
		self.__kind = kind 			# 品种
		self.__age = 0 				# 年龄
		self.__health = 80 			# 健康值
		self.__intimacy = 80 		# 亲密度

	def set_nickname(self, nickname):
		self.__nickname = nickname

	def get_nickname(self):
		return self.__nickname

	def set_kind(self, kind):
		self.__kind = kind

	def get_kind(self):
		return self.__kind

	def set_health(self, health):
		self.__health = health

	def get_health(self):
		return self.__health

	def set_age(self, age):
		self.__age = age

	def get_age(self):
		return self.__age

	def set_intimacy(self, intimacy):
		self.__intimacy = intimacy

	def get_intimacy(self):
		return self.__intimacy

	def eat(self):
		print("宠物在吃饭中...")

	def __str__(self):
		return "{pet:nickname:%s;age:%s;kind:%s;health:%s;intimacy:%s}"\
			% (self.__nickname, self.__age, self.__kind,\
				self.__health, self.__intimacy)

# 定义宠物医院类型
class PetHospital:
	
	def __init__(self, name):
		self.__name = name


	def set_name(self, name):
		self.__name = name

	def get_name(self):
		return self.__name

	def __str__(self):
		return "[hospital:%s]" % self.__name

	def care(self, pet):
		
		while True:
			print("宠物正在治疗中....宠物当前健康值%s" % pet.get_health())
			time.sleep(1)
			pet.set_health(pet.get_health() + 10)
			if pet.get_health() > 60:
				print("宠物治疗结束，当前健康值：%s" % pet.get_health())
				return 

# 定义界面类型
class Menu:
	
	# 没有属性

	# 定义各种方法
	def show_login(self):
		print("\t\t宠物社区")
		print("#"*50)
		print("\t\t1.用户登录")
		print("\t\t2.用户注册")
		print("\t\t3.退出系统")
		print("#"*50)

		c = input("请输入您的选项：")

		if c == "1":#用户登录操作
			# 调用登录函数
			res = self.login()
			if res:
				# 登录成功，进入首页
				self.show_index()
			else:
				# 登录失败，重新展示登录界面
				self.show_login()

		elif c == "2":# 用户注册操作
			# 展示注册界面
			self.show_regist()

		elif c == "3":# 退出系统
			pass
		else:
			input("没有这个选项，按任意键继续")
			self.show_login()

	def show_regist(self):
		print("\t\t宠物社区用户注册")
		print("~" * 50)
		print("\t请按照屏幕提示，输入正确的数据进行注册")
		print("~" * 50)
		# 开始注册，调用注册函数
		self.regist()

	def show_index(self):
		# 系统首页【领养宠物|系统首页】
		# 判断用户是否领养宠物
		if login_user.get_pet() == None:
			# 用户没有宠物，开始领养宠物
			self.adopt_pet()
		else:
			# 用户已经有宠物，展示首页
			print("\t\t宠物社区——首页")
			print("x"*50)
			print("\t1. 查看宠物信息")	# 展示信息
			print("\t2. 给宠物喂食")		# 喂食操作
			print("\t3. 陪宠物玩耍")		# 玩耍操作
			print("\t4. 给宠物看病")		# 看病操作
			print("\t5. 返回登录菜单")	# 常规操作
			print("x"*50)
			c = input("亲输入您的选项：")

			if c == "1": # 查看宠物信息
				self.show_pet_info()

			elif c == "2": # 喂食操作
				self.pet_eat()

			elif c == "3": # 玩耍操作
				self.pet_play()

			elif c == "4": # 宠物看病
				self.pet_care()

			elif c == "5":# 返回登录菜单
				input("sawadika~~拜拜~")
				self.show_login()

	# 展示宠物信息
	def show_pet_info(self):
		print("\t您领养的宠物信息如下：")
		print("~~~~~~~~~~~~~~~~~~~~~~~~")
		print("宠物昵称：%s" % login_user.get_pet().get_nickname())
		print("宠物年龄：%s" % login_user.get_pet().get_age())
		print("宠物品种：%s" % login_user.get_pet().get_kind())
		print("宠物健康值：%s" % login_user.get_pet().get_health())
		print("宠物亲密度：%s" % login_user.get_pet().get_intimacy())
		print("~~~~~~~~~~~~~~~~~~~~~~~~")
		# 减低宠物健康值：查看宠物信息，健康值-5
		h = login_user.get_pet().get_health()
		login_user.get_pet().set_health(h - 5)
		if login_user.get_pet().get_health() < 20:
			# 回收宠物
			input("宠物由于您的照顾不周，提前死亡....")
			self.pet_back()

		input("按任意键返回首页")
		self.show_index()

	# 喂食操作
	def pet_eat(self):
		print("~~~~~~~~~~~~~~~~~~~~~~~~")
		print("\t\t宠物喂食中...")
		print("~~~~~~~~~~~~~~~~~~~~~~~~")
		time.sleep(5)
		login_user.get_pet().eat()# 宠物吃东西
		print("宠物喂食结束")
		# 更改亲密度[获取原来的亲密度、增加亲密度、重新赋值]
		intimacy = login_user.get_pet().get_intimacy()
		intimacy += 3
		login_user.get_pet().set_intimacy(intimacy)
		# 增加亲密度的同时，减少健康值
		health = login_user.get_pet().get_health()
		health -= random.randint(0, 10)
		login_user.get_pet().set_health(health)
		if login_user.get_pet().get_health() < 20:
			# 回收宠物
			input("宠物由于您的照顾不周，提前死亡....")
			self.pet_back()

		input("按任意键返回首页")
		self.show_index()


	# 玩耍操作
	def pet_play(self):
		print("~~~~~~~~~~~~~~~~~~~~~~~~")
		print("\t\t宠物玩耍中...")
		print("~~~~~~~~~~~~~~~~~~~~~~~~")
		time.sleep(5)
		print("宠物玩耍结束")
		# 更改亲密度[获取原来的亲密度、增加亲密度、重新赋值]
		intimacy = login_user.get_pet().get_intimacy()
		intimacy += 5
		login_user.get_pet().set_intimacy(intimacy)
		# 增加亲密度的同时，减少健康值
		health = login_user.get_pet().get_health()
		health -= random.randint(10, 20)
		login_user.get_pet().set_health(health)
		if login_user.get_pet().get_health() < 20:
			# 回收宠物
			input("宠物由于您的照顾不周，提前死亡....")
			self.pet_back()

		input("按任意键返回首页")
		self.show_index()

	# 看病操作
	def pet_care(self):
		# 调用医院的看病的方法进行治疗
		hospital.care(login_user.get_pet())
		# 增加健康值的同时，减少亲密度
		intimacy = login_user.get_pet().get_intimacy()
		intimacy -= random.randint(10, 20)
		login_user.get_pet().set_intimacy(intimacy)
		if login_user.get_pet().get_intimacy() < 20:
			# 回收宠物
			input("宠物由于您虐待宠物，宠物叛逃.....")
			self.pet_back()

		# 返回首页
		input("治疗结束，按任意键返回首页")
		self.show_index()


	# 领养宠物的函数
	def adopt_pet(self):
		# 展示所有的宠物
		print("\t\t宠物社区——领养宠物")
		print("$" * 50)
		print("昵称\t\t品种")
		# for key, pet in pets:
		# 	print(key, pet)
		# 	#print("%s\t%s" % (pet.get_nickname(), pet.get_kind()))
		for pet in pets.values():
			print("%s\t%s" % (pet.get_nickname(), pet.get_kind()))
		print("$" * 50)

		# 领养
		c = input("亲输入您要领养的宠物昵称：")

		if c in pets:
			# 领养宠物
			input("领养成功，按任意键返回首页")
			login_user.set_pet(pets.get(c))

			# 将被领养的宠物，从宠物列表中删除
			pets.pop(c)

			self.show_index()
		else:
			input("没有这个宠物，按任意键重新领养")
			self.adopt_pet()


	def login(self):
		global login_user
		# 提示用户输入登录账号+密码
		uname = input("请输入登录账号：")
		passwd = input("请输入登录密码：")
		# 判断登录
		if uname in users:
			# 根据用户输入的账号获取系统用户对象
			exist_user = users.get(uname)
			# 判断密码是否正确
			if exist_user.get_password() == passwd:
				# 登录成功
				login_user = exist_user # 记录登录用户
				input("登录成功，按任意键进入首页")
				return True
			else:
				input("密码错误，按任意键重新登录")
				# self.login()
				return False
		else:
			input("账号不存在，按任意键重新登录")
			#self.login()
			return False


	def regist(self):
		# 提示用户输入信息
		uname = input("请输入注册账号：")
		passwd = input("请输入注册密码：")
		realname = input("请输入您的姓名：")


		# 如果输入正确，创建用户对象，开始注册
		user = User(uname, passwd, realname)

		# 将用户数据保存到系统中
		users[uname] = user

		# 跳转展示系统登录页面，提示用户使用新账号登录系统
		input("注册成功，按任意键返回登录")
		self.show_login()

	# 回收宠物
	def pet_back(self):
		# 将当前登录用户的宠物取出并删除
		pet = login_user.get_pet()
		login_user.set_pet(None)

		# 重置宠物信息
		pet.set_health(80)
		pet.set_intimacy(80)
		pet.set_age(0)

		# 将宠物添加到系统宠物字典中
		pets[pet.get_nickname()] = pet


# 开始开发，定义程序启动的地方
# 扩展：c/c++ main()--java main(String [] args)
# python程序启动的地方——任意地方
# python一旦进入面向对象程序开发，我们需要定义一个启动的入口
# 模仿其他语言，python有自己的main方法
if __name__ == "__main__":
	# 保存用户的全局变量，保存的数据是k:v  k:账号 v:用户对象
	users = {}
	# 保存的登录用户的全局变量，会记录当前登录系统的用户对象
	login_user = None

	# 增加内置宠物对象
	pet1 = Pet("小白", "九尾妖狐")
	pet2 = Pet("小灰", "三眼灵猴")
	pet3 = Pet("大黄", "啸天神犬")
	# 保存所有宠物的字典
	pets = {"小白":pet1, "小灰":pet2, "大黄":pet3}

	# 程序启动时，医院对象就存在了
	hospital = PetHospital("奇酷第一兽医医院")

	# 项目开始启动，功能开始开发
	# 创建界面对象，展示界面
	menu = Menu()

	# 展示登录界面
	menu.show_login()
