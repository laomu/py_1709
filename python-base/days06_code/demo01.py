# 商品购买流程
# 1. 字典保存所有商品
# 使用字典保存商品信息
goods1 = {"id": "1", "name":"新疆大枣", 
	"price":18.00,"stock":200}
goods2 = {"id": "2", "name":"灵宝肉夹馍", 
	"price":8.00,"stock":100}
goods3 = {"id": "3", "name":"信阳毛尖", 
	"price":1200.00,"stock":10}

# 使用字典，保存多个商品
goodses = {
	"新疆大枣":goods1, 
	"灵宝肉夹馍":goods2, 
	"信阳毛尖":goods3
}

# 2. 界面展示，循环购买商品
while True:
	# 界面展示
	for index, keys in enumerate(goodses.keys()):
		# 获取每次循环的商品
		goods = goodses.get(keys)
		print("商品序号\t商品名称\t商品单价\t商品库存")
		print("%s\t%s\t%s\t%s" % \
			(index, goods.get("name"),\
					goods.get("price"),\
					goods.get("stock")))

	# 提示用户输入购买的数据
	name = input("请输入您要购买的商品名称：")

	# 2. 购买流程
	if name in goodses:
		#商品在我们的商品字典中，获取这个商品
		buy_goods = goodses.get(name)
		# 提示用户输入购买数量
		buy_count = input("请输入购买数量:")
		if int(buy_count) > buy_goods.get("stock"):
			input("库存不足，按任意键返回重新操作")
			continue

		# 提示购买信息
		# 应付金额
		b_price = int(buy_count) * buy_goods.get("price");
		print("~"*50)
		print("您的购买信息如下，请确认并付款：")
		print("商品名称：%s" % buy_goods.get("name"))
		print("商品单价：%s" % buy_goods.get("price"))
		print("购买数量：%s" % buy_count)
		print("应付金额：%s" % (b_price))
		print("此处是广告招租位")
		print("~"*50)
		# 付款
		while True:
			buy_price = input("请输入付款金额：")		
			if float(buy_price) > b_price:
				break
			else:
				input("您输入的付款金额不足")
				continue

		# 3.购买结束，打印小票
		# 更新库存
		buy_goods["stock"] -= int(buy_count)
		# 找零
		balance = float(buy_price) - b_price
		# 打印小票
		print("~"*50)
		print("您的购买信息如下：")
		print("商品名称：%s" % buy_goods.get("name"))
		print("商品单价：%s" % buy_goods.get("price"))
		print("购买数量：%s" % buy_count)
		print("应付金额：%s" % (b_price))
		print("~~~~~~~~~~~~~~~~~~~~~~")
		print("实付金额：%s" % buy_price)
		print("找零：%s" % balance)
		print("xxxxxxxxxxxxxxxxxxxxxx")
		print("此处是广告招租位")
		print("~"*50)

		print("\n\n商品购买完成")
		res = input("是否继续购买(Y)?")
		if res != "Y":
			input("谢谢惠顾，欢迎下次光临...")
			break
	else:
		input("没有这件商品，按任意键返回重新操作.")
		continue


