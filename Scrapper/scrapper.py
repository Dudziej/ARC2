import concurrent.futures
import urllib.request

import requests
from bs4 import BeautifulSoup
from pathlib import Path

import json

categories = {
    'Typ': ['Meskie', 'Damskie', 'Dzieciece', 'Unisex'],
    'Kolor_tarczy': ['Czarny', 'Srebrny', 'Bialy', 'Niebieski', 'Zloty', 'Mieszany', 'Perlowy', 'Rozowy'],
    'Rodzaj': ['Analogowe', 'Analogowo-cyfrowe', 'Cyfrowe'],
    'Styl': ['Klasyczne', 'Sportowe']
}


class Db:

    def __init__(self):
        self.data = None
        self.read_db()

    def save_db(self, data):
        self.data = data
        with open('data.json', 'w+') as outfile:
            json.dump(data, outfile)

    def read_db(self):
        with open('data.json') as json_file:
            self.data = json.load(json_file)
            return self.data


def create_folder_if_doesnt_exist(name):
    Path(name).mkdir(parents=True, exist_ok=True)


def get_products_page(url, baseUrl='https://www.ceneo.pl/Zegarki'):
    page = requests.get(f"{baseUrl}/{url}")
    soup = BeautifulSoup(page.content, 'html.parser')
    a_links = soup.find_all('a', class_='js_conv go-to-product grid-item__thumb')
    result = [link['href'][1:] for link in a_links]
    return result


def get_products_to_scrap(pages_to_scrap):
    with concurrent.futures.ThreadPoolExecutor(max_workers=100) as executor:
        futures = []
        result = []
        i = 0
        for page in pages_to_scrap:
            futures.append(executor.submit(get_products_page, url=page))
        for future in concurrent.futures.as_completed(futures):
            i += 1
            print(f"Got {i}/{len(pages_to_scrap)} pages")
            products = future.result()
            result += products
        return result


def find_img_src(soup):
    a = soup.find_all('a', class_='js_gallery-anchor js_image-preview')
    return a[0].contents[1]['src'][2:]


def save_img(product_id, url, category, type):
    filename = f"{product_id}.jpg"
    # create_folder_if_doesnt_exist(f"photos")
    # create_folder_if_doesnt_exist(f"photos/{category}")
    create_folder_if_doesnt_exist(f"photos/{category}/{type}")

    urllib.request.urlretrieve(f"https://{url}", f"photos/{category}/{type}/{filename}")


def save_img_thread(products):
    with concurrent.futures.ThreadPoolExecutor(max_workers=4) as executor:
        futures = []
        i = 0
        products_len = len(products)
        for product_id in products:
            futures.append(executor.submit(save_img,
                                           product_id=product_id,
                                           url=products[product_id]['img'],
                                           category=products[product_id]['category'],
                                           type=products[product_id]['type']))
        for future in concurrent.futures.as_completed(futures):
            future.result()
            i += 1
            print(f"Downloading image {i}/{products_len}")


def generate_url(category, type, page_number=0, baseUrl='https://www.ceneo.pl/Zegarki'):
    result = f"{baseUrl}/{category}:{type}"
    if not page_number:
        return f"{result}.htm"
    else:
        return f"{result};0020-200-0-0-{page_number}.htm"


def get_img_src(product_id, baseUrl='https://www.ceneo.pl/Zegarki'):
    product_link = f"{baseUrl}/{product_id}"
    page = requests.get(product_link)
    soup = BeautifulSoup(page.content, 'html.parser')
    soup.prettify()

    return (find_img_src(soup), product_id)


def get_img_src_thread(result):
    with concurrent.futures.ThreadPoolExecutor(max_workers=4) as executor:
        futures = []
        i = 0
        for product_id in result:
            futures.append(executor.submit(get_img_src, product_id=product_id))
        for future in concurrent.futures.as_completed(futures):
            (img_src, product_idx) = future.result()
            result[product_idx]['img'] = img_src
            i += 1
            print(f"Scrapping {i}/{len(result)}")

        return result


def init_db():
    result = {}
    for category in categories:
        types = categories[category]
        for type in types:
            page = generate_url(category, type)
            products = get_products_page(page)
            for product in products:
                result[product] = {'category': category, 'type': type}
                print("-", end='')
    return result


def main():
    db = Db()
    # a = init_db()
    # b = get_img_src_thread(result=a)
    # db.save_db(b)
    c = db.read_db()
    save_img_thread(c)


main()
