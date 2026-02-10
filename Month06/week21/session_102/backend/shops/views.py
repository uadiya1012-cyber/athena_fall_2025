from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt
import json

PRODUCTS = [
    {"id": 1, "name": "Дэвтэр", "price": 9.99},
    {"id": 2, "name": "Үзэг", "price": 1.50},
    {"id": 3, "name": "Баллуур", "price": 2.00},
]

def get_products(request):
    return JsonResponse({"products": PRODUCTS})

def get_cart(request):
    cart = request.session.get('cart', {'items': {}})
    total = sum (
        float(item['price']) * item['qty']
        for item in cart['items'].values()
    )

    return JsonResponse({
        'cart': cart,
        'total': f"{total:.2f}"
    })

@csrf_exempt
@require_http_methods(["POST"])
def add_to_cart(request):
    try:
        data = json.loads(request.body)
        product_id = str(data['productId'])
    except:
        return JsonResponse({'error': 'Invalid JSON'}, status=400)

    cart = request.session.get('cart', {'items': {}})
    product = next((p for p in PRODUCTS if p['id'] == int(product_id)), None)
    if not product:
        return JsonResponse({'error': 'Product not found'}, status=400)
    
    items = cart['items']
    if product_id in items:
        items[product_id] ['qty'] += 1
    else:
        items[product_id] = {
            'id': product['id'],
            'name': product['name'],
            'price': product['price'],
            'qty': 1
        }
    request.session['cart'] = cart
    request.session.modified = True
    return get_cart(request)
    

@csrf_exempt
@require_http_methods(["POST"])
def remove_from_cart(request):
    try:
        data = json.loads(request.body)
        product_id = str(data['productId'])

    except:
        return JsonResponse({'error': 'Invalid JSON'}, status=400)

    cart = request.session.get('cart', {'items': {}})
    items = cart['items']

    if product_id in items:
        if items[product_id]['qty'] > 1:
            items[product_id]['qty'] -= 1
        else:
            del items[product_id]

    request.session['cart'] = cart
    request.session.modified = True
    return get_cart(request) 

@csrf_exempt
@require_http_methods(["POST"])
def clear_cart(request):
    request.session['cart'] = {'items': {}}
    request.session.modified = True
    return get_cart(request)
