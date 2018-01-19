from django.conf.urls import url

from . import views


urlpatterns = [
    url(r'^param/(?P<name>[a-z]+)/rest/$', views.rest_test, name="rest_test"),
    url(r'^get/$', views.get_test, name="get_test"),
    url(r'^post/$', views.post_test, name="post_test"),
    url(r'^.*$', views.index, name="index"),
]