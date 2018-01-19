from django.conf.urls import url

from . import views

app_name = "myblog"

urlpatterns = [
    url(r'^verify_code/$', views.verify_code, name="verify_code"),
    url(r'^comment_pub/$', views.comment_pub, name="comment_pub"),
    url(r'^(?P<a_id>\d+)/article_detail/$', views.article_detail, name="article_detail"),
    url(r'^article_all/$', views.article_all, name="article_all"),
    url(r'^article_self/$', views.article_self, name="article_self"),
    url(r'^article_pub/$', views.article_pub, name="article_pub"),
    url(r'^users_say/$', views.users_say, name="users_say"),
    url(r'^register/$', views.register, name="register"),
    url(r'^logout/$', views.logout, name="logout"),
    url(r'^login/$', views.login, name="login"),
    url(r'^.*$', views.index, name="index"),
]