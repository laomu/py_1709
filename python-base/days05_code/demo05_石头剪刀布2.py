# 石头剪刀布游戏
import os

while True:
	os.system("cls")
	# 1. 展示界面：提示信息
	print("##########################################")
	print("\t\t石头剪刀布游戏")
	print("\t根据游戏提示，请输入您的出招")
	print("\t提示：石头  剪刀  布")
	print("##########################################")

	# 2.电脑出招
	import random
	_computer = random.randint(0,2)
	# 通过元组来定义在程序中固定的数据！
	zhaoShu = ("石头", "剪刀", "布")
	_computer = zhaoShu[_computer]

	# 3.玩家出招
	_player = input("请输入您的出招(石头/剪刀/布)：")

	# 4.PK
	print(_computer, _player)
	if (_computer == "石头" and _player == "剪刀") 	\
		or (_computer == "剪刀" and _player == "布") \
		or (_computer == "布" and _player == "石头"):

		print("电脑获胜，你输了...")
	elif _computer == _player:
		print("平局.....")
	elif (_player == "石头" and _computer == "剪刀") \
		or (_player == "剪刀" and _computer == "布") \
		or (_player == "布" and _computer == "石头"):

		print("Congratulations，你赢了...")
	else:
		input("没有这个招数，按任意键重新开始..")
		continue

	# 5.展示结果，提示是否继续
	goon = input("是否继续(Y/N)？")
	if goon == "Y":
		continue
	else:
		input("游戏结束，谢谢光临，欢迎下次惠顾！")
		break