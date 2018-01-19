from django.conf.urls import url

from . import views

app_name = "myblog"

urlpatterns = [
    url(r'header_upload/', views.header_upload, name="header_upload"),
    url(r'upload/', views.upload, name="upload"),
    url(r'^.*$', views.index, name="index"),
]