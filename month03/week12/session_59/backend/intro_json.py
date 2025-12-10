# JSON - Javascript Object Notation
import requests
from bs4 import BeautifulSoup
import json
# API - Application Programming Interface
url = "https://quotes.toscrape.com/"

# GET request
response = requests.get(url)
print(response.status_code)

if response.status_code == 200:
    soup = BeautifulSoup(response.text, "html.parser")
    #filter info
    quote_elements = soup.find_all("div", class_="quote")
    # list comprehension usage create list of dictionary

    quotes = [
        {
            "text": quote.find("span", class_="text").text,
            "author": quote.find("small", class_="author").text
        }
        for quote in quote_elements
    ]

    # write into JSON file
    with open("quotes.json", "w", encoding="utf-8") as file:
        json.dump(quotes, file, indent=2, ensure_ascii=False)

    print(f"{len(quotes)} quotes have been written into quotes.json")