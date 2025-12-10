import requests
from bs4 import BeautifulSoup

# Төсөл 1
# url = "https://quotes.toscrape.com"
# response = requests.get(url)
# soup = BeautifulSoup(response.text, "html.parser")

# quotes = soup.find_all("div", class_="quote")

# result = [
#     f"\"{q.find('span', class_='text').get_text(strip=True)}\" - {q.find('small').get_text(strip=True)}"
#     for q in quotes
# ]

# for i, item in enumerate(result, 1):
#     print(f"{i}. {item}")

# Төсөл 2
# url = "https://books.toscrape.com"
# response = requests.get(url)
# soup = BeautifulSoup(response.text, "html.parser")

# books = soup.find_all("article", class_="product_pod")

# result = [
#     {"book": book.find("h3").find("a") ["title"], "price": book.find("p", class_="price_color").text, "rating": book.find("p", class_="star-rating")["class"][1]} for book in books
# ]
# print(result)

# Төсөл 3
# url = "https://en.wikipedia.org/wiki/Python_(programming_language)"
# response = requests.get(url)
# soup = BeautifulSoup(response.text, "html.parser")

# links = soup.find_all("a", href=True)
# print(links)

# result = [a["href"] for a in links if a.get("href", "").startswith("https://")]

# result = list(set(result))

# for i, link in enumerate(result, 1):
#     print(f"{link}")


# Төсөл 4
# url = "https://news.ycombinator.com"
# response = requests.get(url)
# soup = BeautifulSoup(response.text, "html.parser")

# titles = soup.find_all("span", class_="titleline")
# scores = soup.find_all("span", class_="score")

# for i, title in enumerate(titles[:10], 1):
#     title_text = title.find("a").text
#     score_text = scores[i - 1].text
#     print(f"{i}. {title_text} {score_text}")

# Төсөл 5
url = "https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops"
response = requests.get(url)
soup = BeautifulSoup(response.text, "html.parser")

items = soup.find_all("div", class_="col-md-4 col-xl-4 col-lg-4")

products = []

for item in items:
    name = item.find("a", class_="title").get_text(strip=True)
    price = item.find("h4", class_="price").get_text(strip=True)
    description = item.find("p", class_="description").get_text(strip=True)

    products.append({
        "name": name,
        "price": price,
        "description": description
    })

for p in products:
    print(f"Нэр: {p['name']} | Үнэ: {p['price']} | Тайлбар: {p['description']}")



