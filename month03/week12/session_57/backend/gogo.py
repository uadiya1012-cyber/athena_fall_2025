import requests
from bs4 import BeautifulSoup

response = requests.get('https://gogo.mn/')
print(response.status_code)


html_content = response.text


soup = BeautifulSoup(html_content, 'html.parser')

title = soup.title.string
print("Page title:", title)
