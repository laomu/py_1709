# -*- coding:utf-8 -*-

import threading
import Queue
import time

# 模拟原始用户需求url，存放在队列中
url_queue = Queue.Queue()
for i in range(0, 10):
    url_queue.put("https://tieba.baidu.com/f?kw=%E7%BE%8E%E5%A5%B3&ie=utf-8&pn=" + str(50 * i))


# 定义爬虫处理函数
def spider_core(urlqueue):
    while urlqueue.qsize() > 0:
        url = urlqueue.get()
        print("剩余：%d,线程%s正在爬取%s" % (urlqueue.qsize(), threading.currentThread().name, url))
        time.sleep(1)


# 启动程序的入口
if __name__ == "__main__":
    # 存储线程对象的数组
    threads = []
    # 线程数量
    threads_num = 3
    # 创建线程对象
    for i in range(0, threads_num):
        current_thread = threading.Thread(target=spider_core, args=(url_queue,))
        current_thread.start()
        threads.append(current_thread)

    for t in threads:
        t.join()

    print("程序运行结束")
