import json

from django.apps import AppConfig


class DatabaseConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'database'

    def ready(self):
        import os
        if os.environ.get('RUN_MAIN', None) != 'true':
            print('initing')
            try:
                init_data()
            except Exception as e:
                print(e)


def load_data(path):
    with open(path, encoding='utf-8') as json_file:
        return json.load(json_file)


def init_data():
    print('init2')
    from database import models
    # from DjangoORM.core.database import models
    data = load_data('../../Scrapper/data_faker.json')

    for e in data:
        producent, _ = models.Producent.objects.get_or_create(text=e['producent'])
        producent.save()

        typ, _ = models.Producent.objects.get_or_create(text=e['typ'])
        typ.save()

        rodzaj, _ = models.Producent.objects.get_or_create(text=e['rodzaj'])
        rodzaj.save()

        wodoszczelnosc, _ = models.Producent.objects.get_or_create(text=e['wodoszczelnosc'])
        producent.save()

        kolor, _ = models.Producent.objects.get_or_create(text=e['kolor'])
        kolor.save()

        rodzaj_paska, _ = models.Producent.objects.get_or_create(text=e['rodzaj_paska'])
        rodzaj_paska.save()

        ksztalt_koperty, _ = models.Producent.objects.get_or_create(text=e['ksztalt_koperty'])
        ksztalt_koperty.save()

        kolor_tarczy, _ = models.Producent.objects.get_or_create(text=e['kolor_tarczy'])
        kolor_tarczy.save()

        mechanizm, _ = models.Producent.objects.get_or_create(text=e['mechanizm'])
        mechanizm.save()

        zapiecie, _ = models.Producent.objects.get_or_create(text=e['zapiecie'])
        zapiecie.save()

        zegarek = models.Zegarek()
        zegarek.save()

