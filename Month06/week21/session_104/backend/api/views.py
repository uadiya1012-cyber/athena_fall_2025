from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import time

@require_http_methods(["GET"])
def test_middleware(request):
    """
    Endpoint to verify middleware is workin
    Simulates slow processing to test timing middleware.
    """
    time.sleep(0.1)

    return JsonResponse({
        "message": "Middleware test successful",
        "request_id": getattr(request, 'id', 'N/A'),
        "cart": request.session.get('cart', {})
    })

@require_http_methods(['GET'])
def csrf_token_view(request):
    """
    Endpoint that sets CSRF cookie.
    React app calls this on load to get CSRF token.
    """
    return JsonResponse({"message": "CSRF cookie set"})
