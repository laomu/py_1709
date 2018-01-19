from django.db import models

# Create your models here.
class PersonManager(models.Manager):

    def create_obj(self, **kw):
        return self.create(**kw)

    def find_all(self):
        return self.all()


class Person(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)

    p_manager = PersonManager()


