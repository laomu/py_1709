from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^(?P<g_id>\d+)/girl_detail/$', views.girl_detail, name="girl_detail"),
    url(r'^(?P<g_id>\d+)/girl_enai/$', views.girl_enai, name="girl_enai"),
    url(r'^girl_add/$', views.girl_add, name="girl_add"),
    url(r'^boy_add/$', views.boy_add, name="boy_add"),
    url(r'^.*$', views.index, name="index"),
]