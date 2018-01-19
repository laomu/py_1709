# 定义了一个自定义异常，继承自BaseException
class MyError(Exception):

    def __init__(self, name, msg):
        Exception.__init__(self,name, msg)


# 自定义异常，专门用来进行抛出
try:
    # 捕捉异常
    num = int(input("亲输入一个数据"))# ValueError
except ValueError as e:
    # 捕获到异常
    print("系统异常：%s" % e)
    # 将系统比较晦涩难懂的异常，转换成自定义的异常抛出
    # 打印一句话提示~一种处理方式
    # 自定义异常~一种处理方式
    # 区别：一句话提示~~并不会引起用户的注意
    # 区别：异常~~直接崩溃报错！
    raise MyError("数据错误", "用户输入了非法数据")
