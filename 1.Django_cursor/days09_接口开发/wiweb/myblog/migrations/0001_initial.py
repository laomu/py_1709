# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2017-12-07 06:53
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Users',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('username', models.CharField(max_length=50)),
                ('password', models.CharField(max_length=50)),
                ('nickname', models.CharField(max_length=50)),
            ],
        ),
    ]
