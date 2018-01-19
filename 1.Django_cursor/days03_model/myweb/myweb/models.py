from django.db import models


#  myweb:modles:Person
class Person(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)