# -*- coding:utf-8 -*-


# 第一步：先通过面向过程的方式，编写代码，爬取到需要的数据
# 第二步：优化代码，将不同功能的代码封装


def engine():
    """爬虫引擎对象:专门来调度所有的函数工作"""
    pass

def load_page(url):
    """爬取数据的函数"""
    pass

def write_data(filename, content):
    """记录数据到文件的函数"""
    pass

if __name__ == "__main__":
    engine()