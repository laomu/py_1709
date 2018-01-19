# 项目中，要使用加密，建议将加密过程封装成函数
# 导入需要的加密模块
import hashlib
# 定义一个用来加密的函数
def encrypt(s, o="sha", salt="python"):
	"""
	encrypt()专门用于加密的函数
	s：要加密的明文数据
	o：加密算法
	salt：用于加密混淆的盐值
	"""
	# 1.定义一个局部变量，用来保存密文数据
	_en = None
	if o == "md5":
		# 2.1.md5加密操作
		_en = hashlib.md5(s.encode("utf-8"))
	elif o == "sha":
		# 2.2.sha512加密操作
		_en = hashlib.sha512(s.encode("utf-8"))
	else:
		print("没有这种加密算法")
		return None
	# 3.盐值混淆
	_en.update(salt.encode("utf-8"))
	# 4.获取密文数据
	_en = _en.hexdigest()
	# 5.返回密文数据
	return _en



# 来一段干货
uname = input("请输入注册账号：").strip()
passwd = input("请输入注册密码：").strip()
# 判断注册条件
# 正常情况下，可以注册，密码首先加密，然后进行保存
# passwd = encrypt(passwd) # 默认使用sha512加密，默认盐值python
# passwd = encrypt(passwd, "md5")# 使用了md5加密，默认盐值python
passwd = encrypt(passwd, "md5", "mu")
print("用户信息：账号:%s;密码:%s" % (uname, passwd))