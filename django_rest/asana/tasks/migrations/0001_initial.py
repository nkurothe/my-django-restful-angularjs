# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Tasks',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(max_length=100)),
                ('desc', models.CharField(max_length=150)),
                ('assignee', models.CharField(max_length=100)),
                ('assigned_to', models.CharField(max_length=50)),
                ('due_date', models.DateTimeField(blank=True)),
            ],
        ),
    ]
