# Generated by Django 3.2.8 on 2021-10-27 12:59

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('wagtailcore', '0062_comment_models_and_pagesubscription'),
        ('research', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='AnnualReport',
            fields=[
                ('page_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='wagtailcore.page')),
                ('entry_number', models.IntegerField(default=0)),
                ('authors', models.TextField()),
                ('year', models.IntegerField()),
                ('date', models.DateField()),
                ('preprint', models.BooleanField()),
                ('link', models.URLField()),
                ('abstract', models.TextField()),
                ('doi', models.CharField(max_length=255)),
            ],
            options={
                'abstract': False,
            },
            bases=('wagtailcore.page',),
        ),
        migrations.CreateModel(
            name='Conference',
            fields=[
                ('page_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='wagtailcore.page')),
                ('entry_number', models.IntegerField(default=0)),
                ('authors', models.TextField()),
                ('year', models.IntegerField()),
                ('date', models.DateField()),
                ('preprint', models.BooleanField()),
                ('link', models.URLField()),
                ('abstract', models.TextField()),
                ('doi', models.CharField(max_length=255)),
            ],
            options={
                'abstract': False,
            },
            bases=('wagtailcore.page',),
        ),
        migrations.CreateModel(
            name='Project',
            fields=[
                ('page_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='wagtailcore.page')),
                ('entry_number', models.IntegerField(default=0)),
                ('authors', models.TextField()),
                ('year', models.IntegerField()),
                ('date', models.DateField()),
                ('preprint', models.BooleanField()),
                ('link', models.URLField()),
                ('abstract', models.TextField()),
                ('doi', models.CharField(max_length=255)),
            ],
            options={
                'abstract': False,
            },
            bases=('wagtailcore.page',),
        ),
    ]
