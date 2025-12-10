from bs4 import BeautifulSoup

html = """
<div class="container">
    <div class="card">
        <h2 class="title"> Header 1 </h2>
        <p>Description 1</p>
    </div>
    <div class="card">
        <h2 class="title"> Header 2 </h2>
        <p>Description 2</p>
    </div>
</div>
"""

soup = BeautifulSoup(html, "html.parser")
# find first p
first_p = soup.find("p")
print(first_p.text)
# find by class
title = soup.find("h2", class_="title")
print(title.text)
# find by class order version
content = soup.find("h2", {"class": "title"})
print(content.text)
# CSS selector
titles = soup.select(".card .title")
for title in titles:
    print(title.text)

# only select one element
first_title = soup.select_one(".card .title")
print(first_title.text) # Header 1