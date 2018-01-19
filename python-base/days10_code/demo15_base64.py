import base64

intro = "个人介绍"

# 进行编码保存
intro_x = base64.b64encode(intro.encode("utf-8"))
print("编码后：%s" % intro_x)


# 进行解码操作
intro_y = base64.b64decode(intro_x)
# 第一次解码操作~将给定的一个base64编码数据intro_x解码成了一个二进制字符串
# 将二进制字符串，转换成字符串~decode()解码操作
print("解码后：%s" % intro_y.decode("utf-8"))