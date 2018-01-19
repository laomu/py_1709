from django.conf.urls import url

from . import views

app_name = "wisay"

urlpatterns = [
    url(r'^say/$', views.say, name="say"),
    url(r'^.*$', views.index, name="index"),
]