import json

from faker.providers import DynamicProvider


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


def get_fake_product(providers):
    product = {}
    for key, provider in providers.items():
        product[key] = provider.get_random_value()
    return product


def get_fake_products(providers, count):
    products = []
    for _ in range(0, count):
        products.append(get_fake_product(providers))
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
    generate_products(count=100000)
