import json

from django.http import HttpResponse
from database.utilis import load_data, init_data, generate_jsons, init_data_one


def fill_database(request):
    data = load_data('../Scrapper/data_faker.json')
    data_len = len(data)
    init_data(data, data_len)
    return HttpResponse(f"Added {data_len} records")


def fill_database_one(reqest):
    data = load_data('../Scrapper/data_faker.json')
    data_len = len(data)
    init_data_one(data, data_len)
    return HttpResponse("Done")


def get_jsons(request):
    generate_jsons()
    return HttpResponse("Done")


def r_1_1_1(request):
    return HttpResponse("Done")
