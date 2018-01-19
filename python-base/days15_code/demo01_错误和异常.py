# 程序中的错误和异常
# 1. 错误：经常见于拼写造成的基本语法错误
# 1.1通常情况下，开发工具参差不齐~对于代码的解释并一定非常完善
# 造成了某些错误开发工具并不会提示的问题！sublime中就不会提示语法错误
# 1.2即使我们使用的是类似pycharm这样的半自动化工具，工具在运行过程中
# 也有可能出现对于代码的解释或者运行出现操作不正常的情况
# 我们需要重启软件来查看是否是编辑工具引起的错误

# PS:我们要使用工具，但是不能依赖工具
'''
print("这是一个简单的打印输出的函数")
#pritn("但是很容易由于太过熟悉而敲错")

res = input("请输入操作结果：")
if res.lower() == "yes":
    print("程序要退出")
  #print("这里由于缩进的问题，出现了程序的错误")
'''

# 2.异常：程序代码完全正确，但是在某些不正常的操作下导致程序出错崩溃退出
'''
file = open("d:/test.txt", "r")
# FileNotFoundError: [Errno 2] No such file or directory: 'd:/test.txt'
# 文件没有发现的错误：没有一个文件的名称为：d:/test.txt
content = file.read()

print(content)

file.close()
'''

# 案例2异常
res = input("请输入操作数据：")
print("用户输入了一个数据" + res)

res2 = int(input("请输入操作数据:"))
print("用户又输入了一个操作数据" + res2)
#TypeError: Can't convert 'int' object to str implicitly
# 类型错误：不能将一个int对象转换成str对象进行字符串操作