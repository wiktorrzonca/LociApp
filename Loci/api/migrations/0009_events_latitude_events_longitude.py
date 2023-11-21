# Generated by Django 4.2.6 on 2023-11-19 13:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_rename_created_at_messages_timestamp_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='events',
            name='latitude',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='events',
            name='longitude',
            field=models.FloatField(blank=True, null=True),
        ),
    ]