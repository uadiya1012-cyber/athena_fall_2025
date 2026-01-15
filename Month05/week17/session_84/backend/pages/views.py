from django.shortcuts import render

# Create your views here.
def home(request):
    context = {
        'title': 'Welcome',
        'message': 'Hello Django!',
        'user_name': 'Adiya!'
    }
    return render(request, 'pages/home.html', context)

def about(request):
    return render(request, 'pages/about.html')

def contact(request):
    contacts = [
        {'name': 'Adiyakhuu', 'phone': '90550597'},
        {'name': 'Adiyakhuu', 'phone': '90550597'},
        {'name': 'Adiyakhuu', 'phone': '90550597'}
    ]
    return render(request, 'pages/contact.html', {'contacts': contacts})
