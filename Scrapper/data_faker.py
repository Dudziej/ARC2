import json
import unicodedata

from faker.providers import DynamicProvider
from unidecode import unidecode


def load_data():
    with open('data.json', encoding='utf-8') as json_file:
        return json.load(json_file)


def save_data(data):
    with open('data_faker.json', 'w+', encoding='utf-8') as outfile:
        json.dump(data, outfile, ensure_ascii=False)


def get_data_aggregated(data, keys):
    data_aggregated = {}
    for x in keys:
        data_aggregated[x] = []

    for x in data:
        for key, val in x.items():
            data_aggregated[key].append(val)
    return data_aggregated


def get_providers(data_aggregated):
    providers = {}
    for key, value in data_aggregated.items():
        provider = DynamicProvider(provider_name=key, elements=value)
        providers[key] = provider
    return providers


def get_fake_product(providers, id):
    product = {}
    for key, provider in providers.items():
        provider_result = provider.get_random_value().strip().lower()
        value = unidecode(provider_result)
        key_clean = key.replace(" ", "_").lower().replace('ł', 'l').replace('ą', 'a').replace('ż', 'z') \
            .replace('ę', 'e').replace('ó', 'o').replace('ć', 'c').replace('ś', 's')

        product[key_clean] = value
        product['id'] = id
    return product


def get_fake_products(providers, count):
    products = []
    for i in range(1, count + 1):
        products.append(get_fake_product(providers, i))
        print(f"Generowanie {i}/{count}")
    return products


def generate_products(count):
    keys = ['id', 'Producent', 'Typ', 'Rodzaj', 'Wodoszczelność', 'Kolor', 'Rodzaj paska', 'Kształt koperty',
            'Kolor tarczy', 'Mechanizm', 'Zapięcie', 'Materiał koperty', 'Rodzaj szkła', 'Gwarancja', 'Cechy dodatkowe',
            'Funkcje', 'Kolor paska', 'Styl', 'Popularne', 'Kraj producenta', 'Wzór', 'Linia zegarków']

    data = load_data()
    data_aggregated = get_data_aggregated(data, keys)
    providers = get_providers(data_aggregated)
    products = get_fake_products(providers, count)
    save_data(products)


if __name__ == '__main__':
    generate_products(count=1_000)
