# Generated by Django 4.2.6 on 2023-11-06 13:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_events_organizator_alter_messages_user_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='events',
            name='slots_number',
            field=models.PositiveIntegerField(default=0),
        ),
    ]