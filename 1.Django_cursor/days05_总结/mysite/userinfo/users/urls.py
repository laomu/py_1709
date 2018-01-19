from django.conf.urls import url

from . import views

urlpatterns = [
    url(r"^(?P<u_id>\d+)/users_delete/$", views.users_delete, name="users_delete"),
    url(r"^(?P<u_id>\d+)/users_update/$", views.users_update, name="users_update"),
    url(r"^(?P<u_id>\d+)/users_detail/$", views.users_detail, name="users_detail"),
    url(r"^users_add/$", views.users_add, name="users_add"),
    url(r"^.*$", views.index, name="index"),
]