# DRF Pagination Types

Django REST Framework дээр **Pagination** нь их хэмжээний өгөгдлийг жижиг хэсгүүдэд хувааж API-аар буцаах механизм юм.

---

# 1. PageNumberPagination

## Тайлбар

Data-г **page дугаараар** авах pagination төрөл.

?page=1
?page=2
?page=3

## Example Request

GET /api/products/?page=2

## Example Response

```json
{
  "count": 50,
  "next": "http://api/products/?page=3",
  "previous": "http://api/products/?page=1",
  "results": [
    { "id": 1, "name": "Product 1" }
  ]
}
Visual
Page 1
[1][2][3][4][5][6][7][8][9][10]

Page 2
[11][12][13][14][15][16][17][18][19][20]
Давуу тал

Хамгийн энгийн pagination

Frontend дээр page button хийхэд амар

Admin panel style navigation

Сул тал

Том dataset дээр performance буурах боломжтой

2. LimitOffsetPagination
Тайлбар

Data-г limit болон offset ашиглан авах pagination.

limit = хэдэн item авах
offset = хаанаас эхлэх
Example Request
GET /api/products/?limit=10&offset=20
Example Response
{
  "count": 100,
  "next": "/api/products/?limit=10&offset=30",
  "previous": "/api/products/?limit=10&offset=10",
  "results": [
    { "id": 21, "name": "Product 21" }
  ]
}
Visual
limit=5 offset=0
[1][2][3][4][5]

limit=5 offset=5
[6][7][8][9][10]
Давуу тал

Flexible

Infinite scroll хийхэд тохиромжтой

Сул тал

Page number байхгүй

UX дээр ойлгоход бага зэрэг төвөгтэй

3. Custom Pagination
Тайлбар

Pagination response structure-г developer өөрөө customize хийдэг.

Example Code
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response


class CustomPagination(PageNumberPagination):

    page_size = 10

    def get_paginated_response(self, data):
        return Response({
            "meta": {
                "total": self.page.paginator.count,
                "page": self.page.number,
                "pages": self.page.paginator.num_pages
            },
            "results": data
        })
Example Response
{
  "meta": {
    "total": 100,
    "page": 1,
    "pages": 10
  },
  "results": [
    { "id": 1, "name": "Product 1" }
  ]
}
Давуу тал

Response format бүрэн control хийж болно

Frontend-д илүү тохируулах боломжтой

Production API дээр их ашиглагддаг

Pagination Types Comparison
Pagination Type	Query Parameter	Use Case
PageNumberPagination	?page=2	Traditional pagination
LimitOffsetPagination	?limit=10&offset=20	Infinite scroll
Custom Pagination	Developer defined	Production APIs
Frontend Perspective
Pagination	Frontend Implementation
PageNumber	Page buttons
LimitOffset	Infinite scroll
Cursor	Social media feeds
Summary
PageNumberPagination → Page-based navigation

LimitOffsetPagination → Position-based navigation

CustomPagination → Custom API response structure
```
