# 课程内容days10

1. 文件上传操作
2. 图片上传操作
3. 原始上传操作
4. 封装的上传操作
5. 头像上传功能[案例]
6. [案例]创建相册-上传照片

### 项目案例分析
创建相册功能 类似于 创建了用户的功能[周一]

上传照片功能 类似于 发表文章的功能[周一]

用户--文章  一对多

相册--照片  一对多

---

查看用户列表 -- 查看相册列表

查看某个用户发表的文章

-> 查看某个相册中的所有照片

---

相同点：功能流程一模一样

不同点：具体操作的数据类型不一样

---

# 课程内容
1. 文件上传[原始上传]
主要是Django底层的文件上传方式
了解即可[Django已经在自己的模型类中进行了封装]
了解目的[明确Django在底层是怎么操作文件上传的]
了解即可，不需要练习

2. 文件上传[封装上传]
Django的模型类中，提供了两个特殊的字段专门进行文件上传操作
FileField()用于进行文件上传
|-- ImageField()用于进行图片上传[依赖pillow模块]

[重点：需要练习熟练]

3. 用户头像[案例]
用户头像操作
    表单提交【普通的字符串数据、文件数据】
分别通过request.POST和request.FILES接收
通过模型类直接创建[文件自动上传并在数据库中存储文件路径信息]

4. 创建相册[案例]


5. 上传照片[案例]

