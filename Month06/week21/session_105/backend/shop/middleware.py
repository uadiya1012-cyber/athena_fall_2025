import time
import uuid

from django.utils.deprecation import MiddlewareMixin

class TimingMiddleware(MiddlewareMixin):
    """
    Measures request processing time and adds it to the response headers.

    Usage: Helps identify slow endpoints during development.
    """
    def process_request(self, request):
        request._start_time = time.time()
        return None
    
    def process_response(self, request, response):
        if hasattr(request, '_start_time'):
            duration = time.time() - request._start_time
            response['X-Request-Duration'] = f"{duration * 1000:.2f} ms"
        return response
    
class RequestIDMiddleware(MiddlewareMixin):
    """
    Adds a unique ID to each request for tracing and debugging.
    Usage: Correlate logs across distibuted systems.
    """
    def process_request(self, request):
        request.id = str(uuid.uuid4())
        return None
    
    def process_response(self, request, response):
        if hasattr(request, 'id'):
            response['X-Request-ID'] = request.id
        return response
    
class CartInitializerMiddleware(MiddlewareMixin):
    """
    Ensure session has a cart dictionary initialized.
    Usage: Prevents KeyError when accessing cart in views.
    """
    def process_request(self, request):
        if 'cart' not in request.session:
            request.session['cart'] = {}
        return None
    