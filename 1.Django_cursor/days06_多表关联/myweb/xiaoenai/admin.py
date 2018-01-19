from django.contrib import admin

# Register your models here.
from . import models

admin.site.register(models.Boy)
admin.site.register(models.Girl)
admin.site.register(models.GirlSay)
