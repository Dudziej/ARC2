import concurrent
import concurrent.futures
import json

import requests
from bs4 import BeautifulSoup
from pprint import pprint

URL_BASE = 'https://www.ceneo.pl/'
URL_ZEGARKI = f"{URL_BASE}Zegarki"

from timeit import default_timer as timer


class Db:

    def save_db(self, data):
        with open('data.json', 'w+', encoding='utf-8') as outfile:
            json.dump(data, outfile, ensure_ascii=False)

    def read_db(self):
        with open('data.json') as json_file:
            return json.load(json_file)


class UrlGenerator:

    def __init__(self, base_url):
        self.base_url = base_url
        self.zegarki_url = f"{self.base_url}Zegarki"

    def get_urls(self, count):
        return [self.get_url(i) for i in range(0, count)]

    def get_url(self, page_number=0):
        return f"{self.zegarki_url};0020-200-0-0-{page_number}.htm"


def get_page_soup(url):
    page = requests.get(url)
    return BeautifulSoup(page.content, 'html.parser')


class ProductsIDsScrapper:
    def __init__(self, threads):
        self.threads = threads

    @staticmethod
    def get_links(soup):
        return soup.find_all('a', class_='js_conv go-to-product grid-item__thumb')

    @staticmethod
    def get_productIDs_from_links(a_links):
        return [link['href'][1:] for link in a_links]

    def get_product_IDs(self, url):
        soup = get_page_soup(url)
        links = self.get_links(soup)
        return self.get_productIDs_from_links(links)

    def get_products_IDs_thread(self, urls):

        with concurrent.futures.ThreadPoolExecutor(max_workers=self.threads) as executor:
            futures = []
            result = []
            for url in urls:
                futures.append(executor.submit(self.get_product_IDs, url=url))
            for i, future in enumerate(concurrent.futures.as_completed(futures)):
                # print(f"Got {i}/{len(urls)} pages")
                result += future.result()

            return result


class ProductScrapper:
    categories = {'Styl', 'Wodoszczelność', 'Linia zegarków', 'Kraj producenta', 'Gwarancja', 'Producent', 'Rodzaj',
                  'Typ', 'Rodzaj paska', 'Funkcje', 'Cechy dodatkowe', 'Kształt koperty', 'Popularne', 'Kolor',
                  'Rodzaj szkła', 'Wzór', 'Kolor paska', 'Mechanizm', 'Kolor tarczy', 'Materiał koperty', 'Zapięcie'}

    def __init__(self, product_ID):
        self.product_ID = product_ID

    def get_product_url(self):
        return f"{URL_BASE}/{self.product_ID}"

    @staticmethod
    def get_tables(soup):
        return soup.find_all('table')

    @staticmethod
    def get_tr_all(table):
        return table.find_all('tr')

    @staticmethod
    def get_trs(tables):
        result = []
        for table in tables:
            trs = table.find_all_next('tr')
            for tr in trs:
                result.append(tr)
        return result

    @staticmethod
    def get_attribute(tr):
        key = tr.findNext('th').text.strip()
        value = tr.findNext('li').text.strip()
        return key, value

    def get_attributes(self, soup):
        tables = self.get_tables(soup)
        trs = self.get_trs(tables)
        result = {}
        for tr in trs:
            key, value = self.get_attribute(tr)
            if key in self.categories and key not in result:
                result[key] = value
        return result

    def get_product(self):
        url = self.get_product_url()
        soup = get_page_soup(url)
        attributes = self.get_attributes(soup)
        return {'id': self.product_ID} | attributes


def get_products(products_IDs, threads):
    products_IDs_len = len(products_IDs)
    start = timer()
    with concurrent.futures.ThreadPoolExecutor(max_workers=threads) as executor:
        futures = []
        result = []
        for product_ID in products_IDs:
            f = ProductScrapper(product_ID)
            futures.append(executor.submit(f.get_product))
        for i, future in enumerate(concurrent.futures.as_completed(futures)):
            print(f"Got {i+1}/{products_IDs_len} pages")
            result.append( future.result())
        end = timer()
        print(f"It took {(end - start) / 60} minutes to scrap products | THREADS: {threads}")
    return result


if __name__ == '__main__':
    urls = UrlGenerator(URL_BASE).get_urls(50)
    products_IDs = ProductsIDsScrapper(16).get_products_IDs_thread(urls)
    products = get_products(products_IDs, 16)
    Db().save_db(products)

    # print(get_product(product_ID))
