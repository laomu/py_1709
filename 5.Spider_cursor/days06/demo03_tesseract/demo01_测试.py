# coding:utf-8

# 引入机器学习模块
import pytesseract
# 引入图形处理模块
from PIL import Image

# 引入一张图片
img = Image.open("cc.png")

# 识别图片
text = pytesseract.image_to_string(img)

print text