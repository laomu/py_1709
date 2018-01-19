from django.conf.urls import url

from . import views


urlpatterns = [
    url(r'^index1/$', views.index1, name="index1"),
    url(r'^index2/$', views.index2, name="index2"),
    url(r'^index3/$', views.index3, name="index3"),
]