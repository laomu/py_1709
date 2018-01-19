from django.conf.urls import url

from . import views

app_name = "cachepy"


urlpatterns = [
    url(r'^add/$', views.add, name="add"),
    url(r'^.*$', views.index, name="index"),
]