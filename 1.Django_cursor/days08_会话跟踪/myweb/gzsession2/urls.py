from django.conf.urls import url  # 内置模块放在最上面引入

from . import views

app_name = "gzsession2"

urlpatterns = [
    url(r'^selfinfo/$', views.selfinfo, name="selfinfo"),
    url(r'^all_customer/$', views.all_customer, name="all_customer"),

    url(r'^register/$', views.register, name="register"),
    url(r'^login/$', views.login, name="login"),
    url(r'^.*$', views.index, name="index"),
]