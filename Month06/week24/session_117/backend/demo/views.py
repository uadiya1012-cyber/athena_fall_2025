from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from .models import Item

def index(request):
    items = Item.objects.all()
    return render(request, 'index.html', {'items': items})

# get
def hello(request):
    if request.htmx:
        return HttpResponse('<p>Hello, HTMX!</p>')
    return HttpResponse('Hello Page')

# post
def add_item(request):
    name = request.POST.get('name')

    item = Item.objects.create(name=name)

    return render(request, '_item.html', {'item': item})

# delete
def delete_item(request, id):
    item = get_object_or_404(Item, id=id)
    item.delete()

    return HttpResponse('')


