# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2017-12-08 04:19
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myblog', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='users',
            name='header_img',
            field=models.ImageField(upload_to='./static/headers'),
        ),
    ]