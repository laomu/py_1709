from django.conf.urls import url

from . import views


urlpatterns = [
    url(r'^post/$', views.post_param, name="post"),# post方式传递参数
    url(r'^get/$', views.get_param, name="get"),# get方式传递参数
    url(r'^.*$', views.index, name="index"),# 观察get和post的区别
]