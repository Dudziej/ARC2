import json

from database.models import Producent, Typ, Rodzaj, Wodoszczelnosc, Kolor, RodzajPaska, KsztaltKoperty, \
    Mechanizm, Zapiecie, Zegarek, MaterialKoperty, RodzajSzkla, Gwarancja, CechyDodatkowe, Funkcje, Styl, Popularne, \
    KrajProducenta, Wzor, LiniaZegarkow, ZegarekOne, ZegarekOne_50, ZegarekOne_5, Zegarek_50, Zegarek_5
from django.db import transaction
from django.core import serializers
from pathlib import Path


def load_data(path):
    with open(path, encoding='utf-8') as json_file:
        return json.load(json_file)


def save_data(data, filename):
    Path("data").mkdir(parents=True, exist_ok=True)
    with open(f"data/{filename}.json", 'w+', encoding='utf-8') as outfile:
        json.dump(data, outfile, ensure_ascii=False)


@transaction.atomic
def init_data(data, data_len):
    # for i, e in enumerate(data):
    #     print(f"Processing data Zegarek 100_000: {i + 1}/{data_len}")
    #     create_zegarek(e, Zegarek)
    # for i, e in enumerate(data[:50_000]):
    #     print(f"Processing data Zegarek 50_000: {i + 1}/{50000}")
    #     create_zegarek(e, Zegarek_50)
    # for i, e in enumerate(data[:5_000]):
    #     print(f"Processing data Zegarek 5_000: {i + 1}/{5000}")
    #     create_zegarek(e, Zegarek_5)

    for i, e in enumerate(data):
        print(f"Processing data ZegarekOne: {i + 1}/{data_len}")
        create_zegarekONE(e, ZegarekOne)
    for i, e in enumerate(data[:50_000]):
        print(f"Processing data ZegarekOne_50: {i + 1}/{50_000}")
        create_zegarekONE(e, ZegarekOne_50)
    for i, e in enumerate(data[:5_000]):
        print(f"Processing data ZegarekOne_5: {i + 1}/{5_000}")
        create_zegarekONE(e, ZegarekOne_5)

    print("Done inserting!")


def create_zegarek(e, ZegarekInstance):
    producent, _ = Producent.objects.get_or_create(text=e['producent'])
    producent.save()

    typ, _ = Typ.objects.get_or_create(text=e['typ'])
    typ.save()

    rodzaj, _ = Rodzaj.objects.get_or_create(text=e['rodzaj'])
    rodzaj.save()

    wodoszczelnosc, _ = Wodoszczelnosc.objects.get_or_create(text=e['wodoszczelnosc'])
    producent.save()

    kolor, _ = Kolor.objects.get_or_create(text=e['kolor'])
    kolor.save()

    rodzaj_paska, _ = RodzajPaska.objects.get_or_create(text=e['rodzaj_paska'])
    rodzaj_paska.save()

    rodzaj_szkla, _ = RodzajSzkla.objects.get_or_create(text=e['rodzaj_szkla'])
    rodzaj_szkla.save()

    ksztalt_koperty, _ = KsztaltKoperty.objects.get_or_create(text=e['ksztalt_koperty'])
    ksztalt_koperty.save()

    kolor_tarczy, _ = Kolor.objects.get_or_create(text=e['kolor_tarczy'])
    kolor_tarczy.save()

    mechanizm, _ = Mechanizm.objects.get_or_create(text=e['mechanizm'])
    mechanizm.save()

    zapiecie, _ = Zapiecie.objects.get_or_create(text=e['zapiecie'])
    zapiecie.save()

    material_koperty, _ = MaterialKoperty.objects.get_or_create(text=e['material_koperty'])
    material_koperty.save()

    gwarancja, _ = Gwarancja.objects.get_or_create(text=e['gwarancja'])
    gwarancja.save()

    cechy_dodatkowe, _ = CechyDodatkowe.objects.get_or_create(text=e['cechy_dodatkowe'])
    cechy_dodatkowe.save()

    funkcje, _ = Funkcje.objects.get_or_create(text=e['funkcje'])
    funkcje.save()

    kolor_paska, _ = Kolor.objects.get_or_create(text=e['kolor_paska'])
    kolor_paska.save()

    styl, _ = Styl.objects.get_or_create(text=e['styl'])
    styl.save()

    popularne, _ = Popularne.objects.get_or_create(text=e['popularne'])
    popularne.save()

    kraj_producenta, _ = KrajProducenta.objects.get_or_create(text=e['kraj_producenta'])
    kraj_producenta.save()

    linia_zegarkow, _ = LiniaZegarkow.objects.get_or_create(text=e['linia_zegarkow'])
    linia_zegarkow.save()

    wzor, _ = Wzor.objects.get_or_create(text=e['wzor'])
    linia_zegarkow.save()

    zegarek, _ = ZegarekInstance.objects.get_or_create(id=e['id'])
    zegarek.producent = producent
    zegarek.typ = typ
    zegarek.rodzaj = rodzaj
    zegarek.wodoszczelnosc = wodoszczelnosc
    zegarek.kolor = kolor
    zegarek.rodzaj_paska = rodzaj_paska
    zegarek.ksztalt_koperty = ksztalt_koperty
    zegarek.kolor_tarczy = kolor_tarczy
    zegarek.mechanizm = mechanizm
    zegarek.zapiecie = zapiecie
    zegarek.material_koperty = material_koperty
    zegarek.rodzaj_szkla = rodzaj_szkla
    zegarek.gwarancja = gwarancja
    zegarek.cechy_dodatkowe = cechy_dodatkowe
    zegarek.funkcje = funkcje
    zegarek.kolor_paska = kolor_paska
    zegarek.styl = styl
    zegarek.popularne = popularne
    zegarek.kraj_producenta = kraj_producenta
    zegarek.wzor = wzor
    zegarek.linia_zegarkow = linia_zegarkow
    zegarek.zapiecie = zapiecie

    zegarek.save()


def generate_jsons():
    instances = [Zegarek, Zegarek_50, Zegarek_5, ZegarekOne, ZegarekOne_50, ZegarekOne_5, Producent, Typ, Rodzaj,
                 Wodoszczelnosc, Kolor, RodzajPaska, KsztaltKoperty, Mechanizm,
                 Zapiecie, MaterialKoperty, RodzajSzkla, Gwarancja, CechyDodatkowe, Funkcje, Styl, Popularne,
                 KrajProducenta, Wzor, LiniaZegarkow]
    for instance in instances:
        print(f"generating jsons: {instance.__name__}")
        generate_json(instance)


def generate_json(model_instance):
    zegarek = model_instance.objects.all()
    serialized = serializers.serialize('json', zegarek)

    serialized_json = json.loads(serialized)
    result = []
    for x in serialized_json:
        dict_instance = x['fields']
        dict_instance['id'] = x['pk']
        result.append(dict_instance)
    save_data(result, model_instance.__name__)


def create_zegarekONE(e, ZegarekInstance):
    zegarek, _ = ZegarekInstance.objects.get_or_create(id=e['id'])
    zegarek.producent = e['producent']
    zegarek.typ = e['typ']
    zegarek.rodzaj = e['rodzaj']
    zegarek.wodoszczelnosc = e['wodoszczelnosc']
    zegarek.kolor = e['kolor']
    zegarek.rodzaj_paska = e['rodzaj_paska']
    zegarek.ksztalt_koperty = e['ksztalt_koperty']
    zegarek.kolor_tarczy = e['kolor_tarczy']
    zegarek.mechanizm = e['mechanizm']
    zegarek.zapiecie = e['zapiecie']
    zegarek.material_koperty = e['material_koperty']
    zegarek.rodzaj_szkla = e['rodzaj_szkla']
    zegarek.gwarancja = e['gwarancja']
    zegarek.cechy_dodatkowe = e['cechy_dodatkowe']
    zegarek.funkcje = e['funkcje']
    zegarek.kolor_paska = e['kolor_paska']
    zegarek.styl = e['styl']
    zegarek.popularne = e['popularne']
    zegarek.kraj_producenta = e['kraj_producenta']
    zegarek.wzor = e['wzor']
    zegarek.linia_zegarkow = e['linia_zegarkow']
    zegarek.zapiecie = e['zapiecie']
    zegarek.save()
