try:
    file = open("d:/test.txt")

    content = file.read()#FileNotFoundError

    print(content)

    file.close()
except FileNotFoundError as err:
    print("程序中出现了错误")
    print(err)


print("程序执行结束...")