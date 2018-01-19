# coding:utf-8

'''
BeautifulSoup4
> 基础理论：[爬虫程序——性能的要求、时间的限制]相对较弱
> DOM操作：参考JavaScript DOM操作属性和函数【面试较多】
> CSS操作：参考CSS语法~项目实际操作较多，但是面试基本问题不多
    在你的爬虫项目中，使用过BS4吗？
        用过，经常用，一般用他的select函数直接操作css来完成数据筛选！
    那你用过它的DOM操作吗？
        偶尔用过，它的DOM结构树的数据查询，和JavaScript中的DOM操作有点类似，
        在用的时候更加灵活，可以操作的参数可以是名称、可以是正则，所以在有些时候会用到！
    什么时候会用到呢？
        我没有用过，我们同事用过，我给改成CSS了！因为两种操作方式对于性能处理来说
        并没有特别好的提升，CSS语法相对于DOM筛选可读性更好！

JSONPath->针对json数据进行结构化匹配的描述语言，类似xpath
'''
# 引入BS4
from bs4 import BeautifulSoup

# 加载文档，构建soup DOM对象
soup = BeautifulSoup(open("index.html"), "lxml")

# CSS操作，核心操作函数：select()
# 1.标签选择器
span_e = soup.select("span")
print(span_e)

# 2.ID选贼气
h1_id = soup.select("#title")
print(h1_id)

# 3.class 选择器
p_class = soup.select(".content")
print(p_class)

# 4. 包含选择器
p_e = soup.select("#container p")
print(p_e)

# 5. 子类选择器
p_e = soup.select("#container > p")
print(p_e)


# 6. 属性选择器
div_attr = soup.select("div[class]")
print(div_attr)

div_attr2 = soup.select("div[id='intro']")
print(div_attr2)
