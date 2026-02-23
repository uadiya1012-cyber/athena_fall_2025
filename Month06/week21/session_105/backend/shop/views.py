from django.http import JsonResponse
from django.views.decorators.csrf import ensure_csrf_cookie
import json

PRODUCTS = [
    {"id": 1, "name": "Notebook", "price": 9.99},
    {"id": 2, "name": "Pen", "price": 1.50},
]

def products(request):
    return JsonResponse(PRODUCTS, safe=False)


def _get_cart(session):
    return session.setdefault("cart", {})


def cart(request):
    cart = _get_cart(request.session)
    items = []
    total = 0

    for pid, qty in cart.items():
        product = next(p for p in PRODUCTS if p["id"] == int(pid))
        subtotal = product["price"] * qty
        total += subtotal
        items.append({
            "id": product["id"],
            "name": product["name"],
            "price": product["price"],
            "qty": qty,
        })

    return JsonResponse({
        "items": items,
        "total": total,
        "count": sum(cart.values())
    })


def cart_add(request):
    body = json.loads(request.body)
    pid = str(body["productId"])

    cart = _get_cart(request.session)
    cart[pid] = cart.get(pid, 0) + 1
    request.session.modified = True

    return cart(request)


def cart_remove(request):
    body = json.loads(request.body)
    pid = str(body["productId"])

    cart = _get_cart(request.session)
    if pid in cart:
        del cart[pid]
        request.session.modified = True

    return cart(request)


def cart_clear(request):
    request.session["cart"] = {}
    return cart(request)


@ensure_csrf_cookie
def csrf(request):
    return JsonResponse({"detail": "CSRF cookie set"})
