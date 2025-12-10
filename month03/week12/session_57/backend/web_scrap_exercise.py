import requests
from bs4 import BeautifulSoup

url = "https://www.moneycontrol.com/news/business/startup/dropout-to-data-scientist-indian-firms-open-to-hiring-non-tech-candidates-with-relevant-skills-10708001.html"

response = requests.get(url)

if response.status_code == 200:
    soup = BeautifulSoup(response.text, "html.parser")

    title_tag = soup.find("h1")
    title = title_tag.get_text(strip=True) if title_tag else "Title not found"
    print("TITLE:", title)

    author_tag = soup.find("div", class_="article_author")
    author = author_tag.get_text(strip=True) if author_tag else "Author not found"
    print("AUTHOR:", author)

    date_tag = soup.find("div", class_="article_schedule")
    date = date_tag.get_text(strip=True) if date_tag else "Date not found"
    print("DATE:", date)

    content_div = soup.find("div", class_="content_wrapper")
    if content_div:
        paragraphs = content_div.find_all("p")
        article_text = "\n".join(p.get_text(strip=True) for p in paragraphs)
        print("CONTENT:\n", article_text)
    else:
        print("Content not found")
else:
    print("Failed to fetch the page:", response.status_code)
