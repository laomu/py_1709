from django.db import models


# Create your models here.
class Album(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    desc = models.TextField()
    cover = models.ImageField(upload_to="./static/album")


class Photo(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    photo = models.ImageField(upload_to="./static/album/photos")

    album = models.ForeignKey(Album, on_delete=models.CASCADE)
