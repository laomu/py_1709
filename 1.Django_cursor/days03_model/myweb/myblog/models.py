from django.db import models


# Create your models here. myblog:author
class Author(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    age = models.IntegerField(default=0)
    gender = models.CharField(max_length=10, null=True, blank=True)