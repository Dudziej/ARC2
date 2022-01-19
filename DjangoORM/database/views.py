import json

from django.db.models import Q
from django.http import HttpResponse
from database.utilis import load_data, init_data, generate_jsons, init_data_one
from database.models import ZegarekOne, Wzor, Zegarek
from rest_framework.decorators import api_view


@api_view(['GET'])
def fill_database(request):
    data = load_data('../Scrapper/data_faker.json')
    data_len = len(data)
    init_data(data, data_len)
    return HttpResponse(f"Added {data_len} records")


@api_view(['GET'])
def fill_database_one(reqest):
    data = load_data('../Scrapper/data_faker.json')
    data_len = len(data)
    init_data_one(data, data_len)
    return HttpResponse("Done")


def get_jsons(request):
    generate_jsons()
    return HttpResponse("Done")


@api_view(['GET'])
def r_1_1_1(request):
    result = ZegarekOne.objects.all()
    list(result)
    return HttpResponse("OK")


def r_2_1_1(request):
    wzory = Wzor.objects.filter(text__exact='logo')
    result = Zegarek.objects.filter(wzor__in=wzory)
    list(result)
    return HttpResponse("OK")


def r_2_2_1(request):
    result = Zegarek.objects.filter(wzor__text__exact='logo')
    list(result)
    return HttpResponse("OK")


def r_2_3_1(request):
    result = ZegarekOne.objects.filter(wzor__exact='logo')
    list(result)
    return HttpResponse("OK")


def r_3_1_1(request):
    result = Wzor.objects.all()
    list(result)
    return HttpResponse("OK")


def r_3_2_1(request):
    result = ZegarekOne.objects.all().distinct('wzor')
    list(result)
    return HttpResponse("OK")


def r_4_1_1(request):
    result = Zegarek.objects.filter(
        Q(wzor__text__exact='logo', kolor__text__exact='czarny') | Q(kolor__text__exact='czarne'))
    list(result)
    return HttpResponse("OK")


def r_4_2_1(request):
    result = ZegarekOne.objects.filter(Q(wzor__exact='logo', kolor__exact='czarny') | Q(kolor__exact='czarne'))
    list(result)
    return HttpResponse("OK")


def r_5_1_1(request):
    result = Zegarek.objects.filter(Q(wzor__text__exact='logo') & ~Q(kolor__text__exact='czarny'))
    list(result)
    return HttpResponse("OK")


def r_5_2_1(request):
    result = ZegarekOne.objects.filter(Q(wzor__exact='logo') & ~Q(kolor__exact='czarny'))
    list(result)
    return HttpResponse("OK")


def r_6_1_1(request):
    result = Zegarek.objects.all().order_by('kolor__text')
    list(result)
    return HttpResponse("OK")


def r_6_2_1(request):
    result = ZegarekOne.objects.all().order_by('kolor')
    list(result)
    return HttpResponse("OK")


def r_7_1_1(request):
    result = Zegarek.objects.filter(kolor__text__startswith="cz")
    list(result)
    return HttpResponse("OK")


def r_7_2_1(request):
    result = ZegarekOne.objects.filter(kolor__startswith="cz")
    list(result)
    return HttpResponse("OK")
