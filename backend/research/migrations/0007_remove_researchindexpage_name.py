# Generated by Django 3.2.5 on 2021-07-22 06:15

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("research", "0006_researchindexpage_name"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="researchindexpage",
            name="name",
        ),
    ]
