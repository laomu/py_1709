# 将代码中的数据，写入到文件中保存起来
# 主要使用到的技术有：IO、pickle序列化
# 【序列化~就是将数据按照一定的顺序进行排列保存的过程】

# 定义一个字典，保存用户信息的字典
u1 = {"username":"admin", "password": "123123"}
u2 = {"username":"manager", "password": "manager"}

users = {"admin": u1, "manager": u2}


# 将用户信息保存到文件中
# 打开文件——二进制的方式打开文件
import pickle
f = open("d:/data", "wb")

# 将字典数据写入到文件中：将字典users写入到文件f中
pickle.dump(users, f)

# 关闭文件
f.close()