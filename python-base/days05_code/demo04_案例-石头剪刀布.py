# 石头剪刀布游戏
import os

while True:
	os.system("cls")
	# 1. 展示界面：提示信息
	print("##########################################")
	print("\t\t石头剪刀布游戏")
	print("\t根据游戏提示，请输入您的出招")
	print("\t提示：0-石头  1-剪刀  2-布")
	print("##########################################")

	# 2.电脑出招
	import random
	_computer = random.randint(0,2)
	_computer = str(_computer)

	# 3.玩家出招
	_player = input("请输入您的出招：")

	# 4.PK
	print(_computer, _player)
	if (_computer == "0" and _player == "1") or (_computer == "1" and _player == "2") or (_computer == "2" and _player == "0"):
		print("电脑获胜，你输了...")
	elif _computer == _player:
		print("平局.....")
	else:
		print("Congratulations，你赢了...")

	# 5.展示结果，提示是否继续
	goon = input("是否继续(Y/N)？")
	if goon == "Y":
		continue
	else:
		input("游戏结束，谢谢光临，欢迎下次惠顾！")
		break