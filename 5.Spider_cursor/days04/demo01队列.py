# -*- coding:utf-8 -*-
# python2中的队列模块
import Queue
# 队列的重点：常规队列操作[LILO队列]
# 队列的特点：线程安全的！
# 1. 常规队列LILO队列【FIFO】
q1 = Queue.Queue()

# 添加数据:吃
q1.put("a")
q1.put("b")
q1.put("c")
q1.put("d")
q1.put("e")

# 打印展示队列中的数据
print q1.queue

# 队列中获取数据：拉
print q1.get()
print q1.get()
print q1.get()
print q1.queue

print q1.get()
print q1.get()
# print q1.get() # get没有获取到数据，阻塞
print q1.queue
print "#########################"
# 2. 栈队列_LIFO
q2 = Queue.LifoQueue()

# 添加数据：吃
q2.put("1")
q2.put("2")
q2.put("3")
q2.put("4")

print q2.queue, q2.qsize()
# 取出数据：吐
print q2.get()
print q2.get()
print q2.queue, q2.qsize()

# 3.优先队列：添加的数据在提取时符合一定的优先规则
q3 = Queue.PriorityQueue()

# 4.两端队列
q4 = Queue.deque()
q4.append("a")# 从队列的右端添加数据：常规操作
q4.appendleft("b")# 从队列的左端添加数据

q4.pop()# 从右端获取并移除数据
q4.popleft()#从左端获取并移除数据