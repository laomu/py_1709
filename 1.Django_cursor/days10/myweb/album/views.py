from django.shortcuts import render

from . import models


# Create your views here.
def index(request):
    # 获取所有相册
    a_list = models.Album.objects.all()
    return render(request, "album/index.html", {"a_list": a_list})


def album_create(request):
    if request.method == "GET":
        return render(request, "album/album_create.html")
    elif request.method == "POST":
        name = request.POST["name"]
        cover = request.FILES["cover"]

        album = models.Album.objects.create(name=name, cover=cover)
        album.save()

        return render(request, "album/album_create.html", {"msg": "相册创建成功"})


def album_detail(request, a_id):
    album = models.Album.objects.get(pk=a_id)
    p_list = models.Photo.objects.filter(album=album)

    return render(request, "album/album_detail.html", {"album": album, "p_list": p_list})


def photo_upload(request, a_id):
    if request.method == "GET":
        return render(request, "album/photo_upload.html", {"a_id": a_id})
    elif request.method == "POST":
        name = request.POST["name"]
        photo = request.FILES["photo"]

        a_id = request.POST["a_id"]
        album = models.Album.objects.get(pk=a_id)

        photo = models.Photo.objects.create(name=name, photo=photo, album=album)
        photo.save()

        return render(request, "album/photo_upload.html", {"a_id": a_id, "msg": "上传成功"})