try:
    file = open("d:/test.txt", "wb")

    file.write("字符串")#TypeError
except TypeError as err:
    print("程序中出现了错误:%s" % err)
finally:
    # 这里的代码，不论try中是否出现异常，都必须执行
    file.close()

print("程序运行结束")