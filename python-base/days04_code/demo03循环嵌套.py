'''
i = 0
while i < 10:
	print("下楼")

	j = 0
	while j < 10:
		print("做俯卧撑，第%s个" % j)
		j += 1

	print("上楼")
	i += 1
'''

'''
# 打印9x9的矩形
i = 1
while i < 10:

	j = 1
	while j < 10:
		print("*", end='')
		j += 1

	print("\n")
	i += 1 
'''

'''
# 打印9x9三角形
i = 1
while i < 10:

	j = 1
	while j <= i:
		print("*", end='')
		j += 1

	print("\n")
	i += 1
'''

# 打印9x9乘法表
i = 1
while i < 10:

	j = 1
	while j <= i:
		print("%sx%s=%s\t" % (i, j, (i*j)), end='')
		j += 1

	print("\n")
	i += 1

'''
     *
    ***
   *****
  *******
 *********
***********
'''