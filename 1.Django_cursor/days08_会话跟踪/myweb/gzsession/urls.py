from django.conf.urls import url

from . import views

app_name = "gzsession"

urlpatterns = [
    url(r'^register/$', views.register, name="register"),
    url(r'^login/$', views.login, name="login"),
    url(r'^.*$', views.index, name="index"),
]