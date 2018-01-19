# -*- coding:utf-8 -*-

# 1.队列中包含多个url地址
# 2.定义爬虫函数[但是不写爬虫的实现_time模拟即可]
# 3.多线程的实现
# 4.爬虫程序代码的实现

# 引入需要的模块
import requests  # 爬虫的核心模块
import Queue     # url资源数据的核心保存模块
import threading

lock = threading.Lock()# 多个线程访问共享数据 | RLock() 当前线程频繁访问自己的数据：递归

# 一、模拟接到的需求，从n个url地址中获取数据
# https://tieba.baidu.com/f?kw=%E7%BE%8E%E5%A5%B3&ie=utf-8&pn=
# 创建一个保存url地址的LILO队列
url_queue = Queue.Queue()
# 模拟添加所有的需要爬取的地址
for pageno in range(0, 15):
    url_queue.put("https://tieba.baidu.com/f?kw=%E7%BE%8E%E5%A5%B3&ie=utf-8&pn=" + str(pageno * 50))
# 打印展示需要爬取的数据队列中的url地址
print url_queue.queue


# 二、核心爬虫程序
def spider(urlqueue):
    # 开始爬取:当urlqueue队列中，还有未操作的url地址时，爬虫不能停
    while urlqueue.qsize() > 0:
        if lock.acquire():# 给可能出现数据访问冲突的代码块上锁
            # 获取要爬取的url地址
            url = urlqueue.get()
            # 开始爬取数据的操作：后续完善爬虫采集数据的部分
            print("剩余数据：%s；线程%s开始对%s进行爬取" % (urlqueue.qsize(), threading.currentThread().name, url))

            # 爬取数据消耗时间
            headers = {
                "Referer": url,
                "User-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.7 Safari/537.36"
            }
            response = requests.get(url, headers=headers)

            filename = url[-20:] + ".html"
            with open(filename, "w") as f:
                f.write(response.text.encode("utf-8"))

            # 爬取结束
            print("爬取完成:对%s目标地址爬取完成" % url)
            # 当前执行完成会，解锁数据
            lock.release()

# 三、指定多线程
if __name__ == "__main__":
    # 声明一个变量，保存多个线程
    threads = []
    # 声明一个变量，控制启动多少个线程
    threads_num = 3
    # 创建线程对象，并启动线程
    for ct in range(0, threads_num):# for ct in [0, 1, 2]:
        # 创建线程对象
        current_thread = threading.Thread(target=spider, args=(url_queue,))
        current_thread.start()
        # 将线程保存在列表中
        threads.append(current_thread)
    # 让所有的线程join，就是让主线程等待所有子线程运行结束再推出
    for t in threads:
        t.join()

    print("程序执行结束....")
