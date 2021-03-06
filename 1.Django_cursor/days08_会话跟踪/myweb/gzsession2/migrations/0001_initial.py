# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2017-12-06 07:47
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Customer',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('username', models.CharField(max_length=50)),
                ('password', models.CharField(max_length=50)),
                ('nickname', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='CusType',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Menus',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=50)),
                ('path', models.CharField(max_length=200)),
                ('ctype', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='gzsession2.CusType')),
            ],
        ),
        migrations.AddField(
            model_name='customer',
            name='ctype',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='gzsession2.CusType'),
        ),
    ]
