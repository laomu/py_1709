# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2017-12-04 07:20
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion
import django.db.models.manager


class Migration(migrations.Migration):

    dependencies = [
        ('xiaoenai', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelManagers(
            name='boy',
            managers=[
                ('boy_manager', django.db.models.manager.Manager()),
            ],
        ),
        migrations.AlterModelManagers(
            name='girl',
            managers=[
                ('girl_manager', django.db.models.manager.Manager()),
            ],
        ),
        migrations.AlterField(
            model_name='girl',
            name='boy',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='xiaoenai.Boy'),
        ),
    ]
