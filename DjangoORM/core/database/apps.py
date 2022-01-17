import json

from django.apps import AppConfig


class DatabaseConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'database'

    def ready(self):
        import os
        if os.environ.get('RUN_MAIN', None) != 'true':
            init_data()


def load_data():
    with open('data.json', encoding='utf-8') as json_file:
        return json.load(json_file)


def init_data():
    from DjangoORM.core.database.models import models
