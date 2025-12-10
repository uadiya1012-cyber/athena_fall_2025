from bs4 import BeautifulSoup

html = """
    <ul>
        <li>Python</li>
        <li>Javascript</li>
        <li>HTML</li>
        <li>CSS</li>
    </ul>
"""

soap = BeautifulSoup(html, "html.parser")
items = soap.find_all("li")
print(items)
for item in items:
    print(item.text)
