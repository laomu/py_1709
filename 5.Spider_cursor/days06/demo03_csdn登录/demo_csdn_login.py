# coding:utf-8

# 引入自动化测试
from selenium import webdriver

# 启动phantomjs无界面浏览器
driver = webdriver.PhantomJS("../phantomjs-2.1.1-windows/bin/phantomjs")

# 1.访问登录页面
driver.get("https://passport.csdn.net/account/login?ref=toolbar")

# 截图查看是否访问成功
# driver.save_screenshot("csdn1.png")

# 2.登录表单中填写数据
driver.find_element_by_id("username").send_keys(u'15682808270')
driver.find_element_by_id("password").send_keys(u'DAMUpython2016')

# 截图查看数据是否填写正常
#driver.save_screenshot("csdn2.png")

# 3.开始登录
btn = driver.find_element_by_css_selector("#fm1 .logging")
btn.click()

# 打印登录之后的页面
driver.save_screenshot("csdn3.png")
# driver.page_source 得到渲染数据之后的网页源代码->提取数据

'''
1. 对于数据量并不是很大的常规数据采集，一般使用requests直接采集数据即可
2. 对于目标数据进行了非常复杂的反爬虫操作的网站，一般使用selenium+phantomjs进行数据采集
    phantomjs：无界面浏览器，在操作过程中相对于其他浏览器操作效率较高！
3. 对于数据量较大的爬虫采集数据的行为，一般通过多线程或者多进程的方式以及scrapy框架和它分布式操作的方式采集数据

# 数据采集遇到的问题：
1) 目标网页发爬虫操作非常复杂，通过s+p完成数据采集：QQ空间个人中心页面
2) 目标网页是服务器直接渲染生成的HTML网页[包含数据]：智联招聘[django职位前5页数据采集->筛选工作岗位-薪水-公司]
3) 目标网页数据是通过Ajax方式在已经生成的网页上，使用DOM操作进行渲染的，服务器通过ajax地址返回的是json数据：内涵段子
    通过p+s 完成这样的网页的数据采集[同样：selenium+phantomjs直接采集网页即可]
    
扩展：用tesseract完成图形验证码的识别[正确率]
'''