from django.conf.urls import url

from . import views

urlpatterns = [
    url(r"^req/$", views.index, name="index"),
    url(r"^resp/$", views.index2, name="index2"),
]