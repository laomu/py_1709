# -*- coding:utf-8 -*-

# 引入测试模块
from selenium import webdriver

# 启动phantomjs无界面浏览器
driver = webdriver.PhantomJS("./phantomjs-2.1.1-windows/bin/phantomjs")

# 访问百度首页
driver.get("http://www.baidu.com")

# 查看截图
# driver.save_screenshot("baidu1.png")

# 获取百度的搜索输入框
keyword = driver.find_element_by_id("kw")
# 向输入框中输入一个要搜索的词语
keyword.send_keys(u"火车票")

# 重新查看截图，得到新的搜索页面的数据
# driver.save_screenshot("baidu2.png")

# 开始搜索：点击百度搜索按钮
btn = driver.find_element_by_id("su").click()

# 查看搜索结果页面
import time
time.sleep(2)
driver.save_screenshot("baidu3.png")