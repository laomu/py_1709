from django.conf.urls import url

from . import views

app_name = "gzforms"

urlpatterns = [
    url(r"^f1/$", views.f1, name="f1"),
]