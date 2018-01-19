from django.db import models


# Create your models here.
class GoodsType(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)

    pid = models.ForeignKey("self", null=True, blank=True)
