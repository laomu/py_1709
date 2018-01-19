# -*- coding:utf-8 -*-
"""

"""
import threading
import Queue
import time

# 添加爬取数据的列表
url_queue = Queue.Queue()
for i in range(0, 100):
    url_queue.put("http://tieba.baidu.com/f?kw=%E8%8B%B1%E9%9B%84&ie=utf-8&pn=" + str(50 * i))

print(url_queue.queue)
print(url_queue.qsize())


# 爬取数据的函数
def load_page(url_queue):
    while url_queue.qsize() > 0:
        url = url_queue.get()
        print("剩余数据量：%d;%s;%s" % (url_queue.qsize(), threading.currentThread().name, url))
        #time.sleep(1)



if __name__ == "__main__":
    threads = []
    threads_num = 3
    for i in range(0, threads_num):
        ct = threading.Thread(target=load_page, args=(url_queue,))
        threads.append(ct)
    for t in threads:
        t.start()
    for t2 in threads:
        t2.join()

    print("程序运行结束")