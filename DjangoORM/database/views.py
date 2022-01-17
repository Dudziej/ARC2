import json

from django.http import HttpResponse
from database.utilis import load_data, init_data, generate_jsons


def fill_database(request):
    data = load_data('../Scrapper/data_faker.json')
    data_len = len(data)
    init_data(data, data_len)
    return HttpResponse(f"Added {data_len} records")


def get_jsons(request):
    generate_jsons()
    return HttpResponse("Done")
