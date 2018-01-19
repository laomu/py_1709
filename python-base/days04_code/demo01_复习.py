"""
以下代码，存在一个BUG，请自行测试完善
"""

# 1.展示商品信息
# 商品名称
name = "康师傅牛肉面"
# 商品单价
price = 3.5
# 商品库存
stock = 100

# 实现循环购买的功能
while True:
	# 展示界面
	print("#"*50)
	print("商品名称：%s" % name)
	print("商品单价：%s" % price)
	print("商品库存：%s" % stock)
	print("#"*50)

	# 2. 用户开始购买
	# 输入购买数量
	count = input("请输入批发数量：")
	#  计算应付金额
	pay = int(count) * price

	# 提示用户付款
	print("\n\n您购买的商品总数量：%s包" % count)
	print("您应付金额：%s元" % pay)
	money = input("请输入付款金额:")
	# 找零
	balance = float(money) - pay
	if balance < 0:
		print("金额不足，本次购买失败，重新购买.")
		continue

	# 3. 购买结束，提示用户是否继续
	stock -= int(count)# 库存减去用户购买的数量

	print("~"*50)
	print("\t\t购买小票")
	print("\t商品名称：%s" % name)
	print("\t商品单价：%s" % price)
	print("\t购买数量：%s包" % count)
	print("\t应付金额：%s元" % pay)
	print("\t实付金额：%s元" % money)
	print("\t找零：%s元" % balance)
	print("~"*50)

	# 4. 是否继续购买，通过循环控制
	goon = input("是否继续购买(Y/N)？")
	if goon == "Y":
		continue
	else:
		print("谢谢惠顾，欢迎下次光临...")
		break
