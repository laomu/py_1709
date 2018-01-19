# 2.处理指定异常

try:
    num1 = int(input("请输入一个整数"))# ValueError
    print("用户输入了一个数据：" + num1)#TypeError
except ValueError:
    print("用户输入了非法数据")
except TypeError:
    print("输入的数据和字符串拼接错误")
except:
    print("出现了其他异常.")

print("程序运行结束")