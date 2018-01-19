from django.conf.urls import url

from . import views

# 给子项目路由命名
app_name = "ul"

urlpatterns = [
    url(r'^delete/$', views.delete, name="delete"),
    url(r'^(?P<obj_id>\d+)/detail/$', views.detail, name="detail"),
    url(r'^.*$', views.index, name="index"),
]