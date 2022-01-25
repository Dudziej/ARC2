import json

from database.models import Producent, Typ, Rodzaj, Wodoszczelnosc, Kolor, RodzajPaska, KsztaltKoperty, \
    Mechanizm, Zapiecie, Zegarek_DN_10, Zegarek_DN_1, Zegarek_DN_100, MaterialKoperty, RodzajSzkla, Gwarancja, \
    CechyDodatkowe, Funkcje, Styl, Popularne, \
    KrajProducenta, Wzor, LiniaZegarkow, Zegarek_A_10, Zegarek_A_20, Zegarek_A_40
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
    for i, e in enumerate(data):
        print(f"Zegarki DN: {i + 1}/{data_len}")
        create_zegarek_DN(Zegarek_DN_100, e)
        if i < 10_000:
            create_zegarek_DN(Zegarek_DN_10, e)
        if i < 1_000:
            create_zegarek_DN(Zegarek_DN_1, e)
        create_zegarek_A_10(e)
        create_zegarek_A_20(e)
        create_zegarek_A_40(e)


def create_zegarek_A_10(e):
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

    ksztalt_koperty, _ = KsztaltKoperty.objects.get_or_create(text=e['ksztalt_koperty'])
    ksztalt_koperty.save()

    kolor_tarczy, _ = Kolor.objects.get_or_create(text=e['kolor_tarczy'])
    kolor_tarczy.save()

    mechanizm, _ = Mechanizm.objects.get_or_create(text=e['mechanizm'])
    mechanizm.save()

    material_koperty, _ = MaterialKoperty.objects.get_or_create(text=e['material_koperty'])
    material_koperty.save()

    zegarek, _ = Zegarek_A_10.objects.get_or_create(id=e['id'])
    zegarek.producent = producent
    zegarek.typ = typ
    zegarek.rodzaj = rodzaj
    zegarek.wodoszczelnosc = wodoszczelnosc
    zegarek.kolor = kolor
    zegarek.rodzaj_paska = rodzaj_paska
    zegarek.ksztalt_koperty = ksztalt_koperty
    zegarek.kolor_tarczy = kolor_tarczy
    zegarek.mechanizm = mechanizm
    zegarek.material_koperty = material_koperty

    zegarek.save()


def create_zegarek_A_20(e):
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
    wzor.save()

    zegarek, _ = Zegarek_A_20.objects.get_or_create(id=e['id'])
    zegarek.producent = producent
    zegarek.typ = typ
    zegarek.rodzaj = rodzaj
    zegarek.wodoszczelnosc = wodoszczelnosc
    zegarek.kolor = kolor
    zegarek.rodzaj_paska = rodzaj_paska
    zegarek.ksztalt_koperty = ksztalt_koperty
    zegarek.kolor_tarczy = kolor_tarczy
    zegarek.mechanizm = mechanizm
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

    zegarek.save()


def create_zegarek_A_40(e):
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
    wzor.save()

    zegarek, _ = Zegarek_A_40.objects.get_or_create(id=e['id'])
    zegarek.producent = producent
    zegarek.typ = typ
    zegarek.rodzaj = rodzaj
    zegarek.wodoszczelnosc = wodoszczelnosc
    zegarek.kolor = kolor
    zegarek.rodzaj_paska = rodzaj_paska
    zegarek.ksztalt_koperty = ksztalt_koperty
    zegarek.kolor_tarczy = kolor_tarczy
    zegarek.mechanizm = mechanizm
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

    zegarek.producent2 = producent
    zegarek.typ2 = typ
    zegarek.rodzaj2 = rodzaj
    zegarek.wodoszczelnosc2 = wodoszczelnosc
    zegarek.kolor2 = kolor
    zegarek.rodzaj_paska2 = rodzaj_paska
    zegarek.ksztalt_koperty2 = ksztalt_koperty
    zegarek.kolor_tarczy2 = kolor_tarczy
    zegarek.mechanizm2 = mechanizm
    zegarek.material_koperty2 = material_koperty
    zegarek.rodzaj_szkla2 = rodzaj_szkla
    zegarek.gwarancja2 = gwarancja
    zegarek.cechy_dodatkowe2 = cechy_dodatkowe
    zegarek.funkcje2 = funkcje
    zegarek.kolor_paska2 = kolor_paska
    zegarek.styl2 = styl
    zegarek.popularne2 = popularne
    zegarek.kraj_producenta2 = kraj_producenta
    zegarek.wzor2 = wzor
    zegarek.linia_zegarkow2 = linia_zegarkow

    zegarek.save()


def generate_jsons():
    instances = [Zegarek_DN_1, Zegarek_DN_10, Zegarek_DN_100, Zegarek_A_10, Zegarek_A_20, Zegarek_A_40, Producent, Typ,
                 Rodzaj, Wodoszczelnosc, Kolor, RodzajPaska, KsztaltKoperty, Mechanizm, Zapiecie, MaterialKoperty,
                 RodzajSzkla, Gwarancja, CechyDodatkowe, Funkcje, Styl, Popularne, KrajProducenta, Wzor, LiniaZegarkow]
    for i, instance in enumerate(instances):
        print(f"{i + 1}/{len(instances)} - {instance.__name__}")
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


def create_zegarek_DN(Instance, e):
    zegarek, _ = Instance.objects.get_or_create(id=e['id'])
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

# def init_data_one(data, data_len):
#     for i, e in enumerate(data):
#         print(f"Processing data: {i + 1}/{data_len}")
#         create_zegarekONE(e)
