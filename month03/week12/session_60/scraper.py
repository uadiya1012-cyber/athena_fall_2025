import requests
from bs4 import BeautifulSoup
import json

def fetch_page(url):
    """Вэб хуудас татах"""
    response = requests.get(url)

    if response.status_code == 200:
        return response.text
    return None


def parse_quotes(html):
    """HTML-ээс ишлэлүүдийг ялгах"""
    soup = BeautifulSoup(html, "html.parser")
    quote_divs = soup.find_all("div", class_="quote")

    # List comprehension ашиглах
    quotes = [
        {
            "text": q.find("span", class_="text").get_text(strip=True),
            "author": q.find("small", class_="author").get_text(strip=True),
            "tags": [tag.get_text() for tag in q.find_all("a", class_="tag")],
        }
        for q in quote_divs
    ]

    return quotes


def save_to_json(data, filename):
    """JSON файлд хадгалах"""
    with open(filename, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)


# -------------------------
# Үндсэн програм
# -------------------------
url = "https://quotes.toscrape.com"

# 1. Хуудас татах
html = fetch_page(url)

# 2. Мэдээлэл ялгах
if html:
    quotes = parse_quotes(html)

    # 3. JSON файлд хадгалах
    save_to_json(quotes, "quotes_data.json")

    print(f"{len(quotes)} ишлэлийг quotes_data.json файлд хадгаллаа!")
else:
    print("Хуудас татахад алдаа гарлаа!")
