# 主要内容

### 1.关于短连接和长连接的区别
### 2.python中的长连接实现——websocket
### 3.长连接案例——聊天室消息无缝推送——在线客服功能
### 4.【简书】项目需求分析[周末任务]

# 下周预告
### 1. GIT版本管理协同开发
### 2. Flask微框架
### 3. Flask微框架项目案例[小型项目][贴吧|论坛|在线教育平台|学校门户]


# tornado长连接

B/S结构的网络软件：网站

在网站应用中，一般情况下，都是通过HTTP连接来完成客户端
浏览器和服务器之间的交互过程中的

HTTP连接是一种无状态的短连接

Websocket连接~服务器->客户端消息 实时推送不需要客户端
主动刷新获取数据！

# tornado中长连接websocket的实现

短连接：对讲机|步话机

长连接：手机电话

### 1.简单案例~实现消息在客户端和服务器之间的无缝推送。

### 2.案例~实现多人操作聊天室。

### 3.扩展~结合cookie完成多人聊天室的完善功能。

# tornado阶段项目案例：简书项目

## 简书在线社区建设项目
### 1. 需求分析[**]
### 2. 详细设计[*-]
### 3. 功能开发[--]

使用tornado 项目模块化结构进行开发
