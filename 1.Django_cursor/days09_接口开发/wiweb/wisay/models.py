from django.db import models


# Create your models here.
class WiSay(models.Model):
    id = models.AutoField(primary_key=True)
    publish_time = models.DateTimeField()
    content = models.TextField()

    # TODO 谁发表的说说：用户外键