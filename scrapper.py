import concurrent.futures
import urllib.request

import requests
from bs4 import BeautifulSoup
from pathlib import Path

baseUrl = 'https://www.ceneo.pl'


def create_folder_if_doesnt_exist(name):
    Path(f"photos/{name}").mkdir(parents=True, exist_ok=True)


def get_products_page(url):
    page = requests.get(f"{baseUrl}/{url}")
    soup = BeautifulSoup(page.content, 'html.parser')
    a_links = soup.find_all('a', class_='js_conv go-to-product grid-item__thumb')
    result = [link['href'][1:] for link in a_links]
    return result


def generate_page_link(i):
    return f"{baseUrl}/Zegarki;0020-200-0-0-{i}.htm"


def validate_page(index):
    first_search_link = f"{baseUrl}/Zegarki"
    page_link = generate_page_link(index)
    response = requests.get(page_link)
    if not (response.url == first_search_link):
        return page_link
    else:
        return None


def get_pages_to_scrap():
    with concurrent.futures.ThreadPoolExecutor(max_workers=100) as executor:
        futures = []
        result = [f"{baseUrl}/Zegarki"]
        for index in range(1, 100):
            futures.append(executor.submit(validate_page, index=index))
        for future in concurrent.futures.as_completed(futures):
            page = future.result()
            if page:
                result.append(page)
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


def get_img_src(soup):
    a = soup.find_all('a', class_='js_gallery-anchor js_image-preview')
    return a[0].contents[1]['src'][2:]


def save_img(product_id, url, category):
    filename = f"{product_id}.jpg"
    create_folder_if_doesnt_exist(category)
    urllib.request.urlretrieve(f"https://{url}", f"photos/{category}/{filename}")


def analyse_product(product_id):
    product_link = f"{baseUrl}/{product_id}"
    page = requests.get(product_link)
    soup = BeautifulSoup(page.content, 'html.parser')
    soup.prettify()
    img_src = get_img_src(soup)
    save_img(product_id, img_src, 'category')

    product = {'id': product_id, 'img': img_src}
    return product


def analyse_products(products_to_scrap):
    with concurrent.futures.ThreadPoolExecutor(max_workers=100) as executor:
        futures = []
        result = []
        i = 0
        for product_id in products_to_scrap:
            futures.append(executor.submit(analyse_product, product_id=product_id))
        for future in concurrent.futures.as_completed(futures):
            products = future.result()
            result += products
            i += 1
            print(f"Scrapping {i}/{len(products_to_scrap)}")

        return result


pages_to_scrap = get_pages_to_scrap()
print(f"Found total: {pages_to_scrap} pages to scrap")
products_to_scrap = get_products_to_scrap(pages_to_scrap)
print(f"Found total {len(products_to_scrap)} products to scrap")
products = analyse_products(products_to_scrap)
