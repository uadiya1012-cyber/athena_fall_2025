from bs4 import BeautifulSoup

html = """
    <html>
        <head>
            <title> My Web site </title>
        </head>
        <body>
            <h1> Hello ! </h1>
            <p class="intro> This is example page</p>
        </body>
    </html> 
"""

soup = BeautifulSoup(html, "html.parser")
# title tag find
print(soup.title)
print(soup.title.text)