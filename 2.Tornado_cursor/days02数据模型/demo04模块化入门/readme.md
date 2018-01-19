# 模块化开发

核心：将处理不同功能的代码，封装在不同的模块中

通过不同模块之间的配合，完成功能整体流程的实现

项目就会出现多个模块文件，多个模块文件之间可以互相引用

模块化开发回顾：Django项目就是模块化开发的项目结构
```
mysite/ 项目根目录
    mysite/ 根项目
    myblog/ 子模块应用
        models.py 数据类型模块
            class User:
            class Person:
            class Article:
            ....
        views.py 视图处理模块
            from . import models 引入另一个模块
            
            def index(request):
            def login(request):
            def regist(reqeust):
            
            views模块+models模块共同完成数据处理
        urls.py 路由处理模块
            from . imoprt views
            ...
            urls模块和views模块 路由处理功能
        forms_manager.py 表单处理模块
        modles_manager.py 数据管理模块
    manager.py 程序启动入口
```

模块化开发：
1.划分模块~
合理的模块划分，能最大程序的优化代码结构。

2.代码开发~
针对独立的模块，进行相应功能代码开发，能在
模块化的基础上，合理并且有效的利用有限的代码
完成更多的功能[代码的复用]

3.注意问题~
一旦实现模块化开发，不同的模块之间可能需要互相引用

一定要注意，模块应用陷入死循环的问题，如A模块中引入了B模块
B模块中引入了C模块，C模块中引入了A模块

A->import B->B-> import C->C->import A
此时就会陷入死循环引用的问题，很容易造成内存泄漏问题

