# -*- coding:utf-8 -*-

import threading
import Queue

# 1.LILO队列：last in last out
print("LILO队列>>>>>>>>>>>>>>>>>>>>")
q1 = Queue.Queue()

q1.put("1")
q1.put("2")
q1.put("3")
print q1.queue
print(q1.get())
print(q1.queue)

# 2.LIFO队列: last in first out
print("LIFO队列>>>>>>>>>>>>>>>>>>>>")
q2 = Queue.LifoQueue()
q2.put("a")
q2.put("b")
q2.put("c")

print(q2.queue)
print(q2.get())
print(q2.queue)

# 3.Priority优先队列
print("Priority队列>>>>>>>>>>>>>>>>>>>>")
q3 = Queue.PriorityQueue()
q3.put("A")
q3.put("a")
q3.put("b")
q3.put("B")
q3.put("c")
q3.put("crow")
q3.put("Drow")

print(q3.queue)
print(q3.get())
print(q3.get())
print(q3.get())
print(q3.get())
print(q3.get())
print(q3.get())
print(q3.get())
print(q3.queue)

# 4.两端队列
q4 = Queue.deque()
q4.append("a")
q4.append("b")
q4.append("c")
q4.appendleft("d")
q4.appendleft("e")
q4.appendleft("f")

print(q4)
print(q4.pop())
print(q4)
print(q4.popleft())
print(q4)