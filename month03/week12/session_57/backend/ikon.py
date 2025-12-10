# web scraping

import requests

response = requests.get('https://ikon.mn/')

#check status code
# (200 = ok, 404=not found, 500=sercer error)
print(response.status_code) # 200 - амжилттай

# HTML content-ийг нь авах
html_content = response.text
# print(html_content)
print(response.encoding)
print(response.headers)