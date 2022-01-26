import json

from django.db.models import Q
from django.http import HttpResponse
from database.utilis import load_data, init_data, generate_jsons
from database.models import Wzor, Zegarek_A_10, Zegarek_A_20, Zegarek_A_40, Zegarek_DN_100, Zegarek_DN_10, Zegarek_DN_1
from rest_framework.decorators import api_view


@api_view(['GET'])
def fill_database(request):
    data = load_data('../Scrapper/data_faker.json')
    data_len = len(data)
    init_data(data, data_len)
    return HttpResponse(f"Added {data_len} records")


def get_jsons(request):
    generate_jsons()
    return HttpResponse("Done")


@api_view(['GET'])
def A_10_1(request):
    result = Zegarek_A_10.objects.all()
    list(result)
    return HttpResponse("OK")


@api_view(['GET'])
def A_20_1(request):
    result = Zegarek_A_20.objects.all()
    list(result)
    return HttpResponse("OK")


@api_view(['GET'])
def A_40_1(request):
    result = Zegarek_A_40.objects.all()
    list(result)
    return HttpResponse("OK")


@api_view(['GET'])
def DN_100_1(request):
    result = Zegarek_DN_100.objects.all()
    list(result)
    return HttpResponse("OK")


@api_view(['GET'])
def DN_10_1(request):
    result = Zegarek_DN_10.objects.all()
    list(result)
    return HttpResponse("OK")


@api_view(['GET'])
def DN_1_1(request):
    result = Zegarek_DN_1.objects.all()
    list(result)
    return HttpResponse("OK")


def A_20_2(request):
    result = Zegarek_A_20.objects.filter(kolor__text__startswith="cz")
    list(result)
    return HttpResponse("OK")


def DN_100_2(request):
    result = Zegarek_DN_100.objects.filter(kolor__startswith="cz").distinct()
    list(result)
    return HttpResponse("OK")


def A_20_3(request):
    result = Zegarek_A_20.objects.all().order_by('kolor__text')
    list(result)
    return HttpResponse("OK")


def DN_100_3(request):
    result = Zegarek_DN_100.objects.all().order_by('kolor')
    list(result)
    return HttpResponse("OK")


def A_20_4(request):
    result = Wzor.objects.all()
    list(result)
    return HttpResponse("OK")


def DN_100_4(request):
    result = Zegarek_DN_100.objects.values_list('wzor', flat=True)
    set(result)
    return HttpResponse("OK")


def A_20_5(request):
    result = Zegarek_A_20.objects.filter(
        Q(wzor__text__exact='logo', kolor__text__exact='czarny') | Q(kolor__text__exact='czarne'))
    list(result)
    return HttpResponse("OK")


def DN_100_5(request):
    result = Zegarek_DN_100.objects.filter(Q(wzor__exact='logo', kolor__exact='czarny') | Q(kolor__exact='czarne'))
    list(result)
    return HttpResponse("OK")

#
# def r_1_2_1(request):
#     result = Zegarek.objects.all()
#     list(result)
#     return HttpResponse("OK")
#
#
# def r_2_1_1(request):
#     wzory = Wzor.objects.filter(text__exact='logo')
#     result = Zegarek.objects.filter(wzor__in=wzory)
#     list(result)
#     return HttpResponse("OK")
#
#
# def r_2_2_1(request):
#     result = Zegarek.objects.filter(wzor__text__exact='logo')
#     list(result)
#     return HttpResponse("OK")
#
#
# def r_2_3_1(request):
#     result = ZegarekOne.objects.filter(wzor__exact='logo')
#     list(result)
#     return HttpResponse("OK")
#
#
# def r_3_1_1(request):
#     result = Wzor.objects.all()
#     list(result)
#     return HttpResponse("OK")
#
#

#
#
# def r_4_1_1(request):
#     result = Zegarek.objects.filter(
#         Q(wzor__text__exact='logo', kolor__text__exact='czarny') | Q(kolor__text__exact='czarne'))
#     list(result)
#     return HttpResponse("OK")
#
#
# def r_4_2_1(request):
#     result = ZegarekOne.objects.filter(Q(wzor__exact='logo', kolor__exact='czarny') | Q(kolor__exact='czarne'))
#     list(result)
#     return HttpResponse("OK")
#
#
# def r_5_1_1(request):
#     result = Zegarek.objects.filter(Q(wzor__text__exact='logo') & ~Q(kolor__text__exact='czarny'))
#     list(result)
#     return HttpResponse("OK")
#
#
# def r_5_2_1(request):
#     result = ZegarekOne.objects.filter(Q(wzor__exact='logo') & ~Q(kolor__exact='czarny'))
#     list(result)
#     return HttpResponse("OK")
#
#
# def r_6_1_1(request):
#     result = Zegarek.objects.all().order_by('kolor__text')
#     list(result)
#     return HttpResponse("OK")
#
#
# def r_6_2_1(request):
#     result = ZegarekOne.objects.all().order_by('kolor')
#     list(result)
#     return HttpResponse("OK")
#
#
# def r_7_1_1(request):
#     result = Zegarek.objects.filter(kolor__text__startswith="cz")
#     list(result)
#     return HttpResponse("OK")
#
#
# def r_7_2_1(request):
#     result = ZegarekOne.objects.filter(kolor__startswith="cz")
#     list(result)
#     return HttpResponse("OK")
