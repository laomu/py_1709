'''
项目配置信息模块
'''
import os

BASE_DIR = os.path.dirname(__file__)

# 公共配置
common = {
    "template_path": os.path.join(BASE_DIR, "templates"),
    "static_path": os.path.join(BASE_DIR, "static"),
    "debug": True,
}

# 缓存数据库redis配置
# redis_config = {
#     "": ""
# }