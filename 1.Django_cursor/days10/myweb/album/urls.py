from django.conf.urls import url

from . import views

app_name = "album"

urlpatterns = [
    url(r'^(?P<a_id>\d+)/photo_upload/$', views.photo_upload, name="photo_upload"),
    url(r'^(?P<a_id>\d+)/album_detail/$', views.album_detail, name="album_detail"),
    url(r'^album_create/$', views.album_create, name="album_create"),
    url(r'^.*$', views.index, name="index"),
]