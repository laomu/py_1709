# 定义一个简单的加法运算
# 异常处理：在python中，经常使用try-except:来进行操作
# 将可能出现异常的代码，包含在try中
# 在except中添加出现异常之后处理的代码

# 异常代码
'''
num1 = input("请输入第一个操作数据：")
n1 = int(num1)

num2 = input("请输入第二个操作数据：")
n2 = int(num2)

res = n1 + n2
print("计算结果：%s" % res)


print("程序运行结束，谢谢光临！")
'''
try:
    num1 = input("请输入第一个操作数据：")
    n1 = int(num1)

    num2 = input("请输入第二个操作数据：")
    n2 = int(num2)

    res = n1 + n2
    print("计算结果：%s" % res)
except:
    print("sawadika，您的误操作导致程序出现问题，请检查输入的数据是否合法.")


print("程序运行结束，谢谢光临！")