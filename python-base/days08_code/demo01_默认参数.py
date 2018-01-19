# 函数的参数
# 函数要执行需要的数据

def test(x):
	print("用户输入了：%s" % x)
#函数执行需要数据，那就给它数据
#test("hello python!")
# 不给数据，会出现错误！
#test()
#TypeError: test() missing 1 required positional argument: 'x'

# 1. 在某些情况下，函数的参数并不是必须的~
# 传递参数，就使用参数中的数据，不传递参数就使用默认数据
# 函数参数的默认值
def test2(x="default value"):
	print("用户输入了：%s" % x)

test2("hello python!, i am coming....")
test2()

