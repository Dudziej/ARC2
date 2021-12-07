import concurrent
import concurrent.futures

from scrapper import UrlGenerator, ProductsIDsScrapper, URL_BASE,  timer, ProductScrapper, get_products


def get_pages_performance():
    urls = UrlGenerator(URL_BASE).get_urls(50)

    th = [1, 2, 4, 8, 12, 16, 32, 64, 128]
    for x in th:
        start = timer()
        ProductsIDsScrapper(x).get_products_IDs_thread(urls)
        end = timer()
        print(f"It took {(end - start)} seconds to scrap pages | THREADS: {x}")


def get_products_scrap_performance():
    urls = UrlGenerator(URL_BASE).get_urls(1)
    products_IDs = ProductsIDsScrapper(16).get_products_IDs_thread(urls)[:50]
    th = [1, 2, 4, 8, 12, 16, 32, 64, 128]
    for x in th:
        get_products(products_IDs, x)


get_products_scrap_performance()
