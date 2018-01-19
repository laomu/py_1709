from django.conf.urls import url

from . import views

app_name = "tp"

urlpatterns = [
    url(r'^t1/$', views.t1, name="t1"),
    url(r'^t2/$', views.t2, name="t2"),
    url(r'^t3/$', views.t3, name="t3"),
    url(r'^p1/$', views.p1, name="p1"),
    url(r'^p2/$', views.p2, name="p2"),
    url(r'^p3/$', views.p3, name="p3"),
    url(r'^.*$', views.index, name="index"),
]