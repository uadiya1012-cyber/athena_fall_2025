from django.shortcuts import render

# Create your views here.
def home(request):
    context = {
        'name': 'Адъяахүү',
        'title': 'Full-Stack Web Developer',
        'tagline': 'I build things for the web.',
    }

    return render(request, 'pages/home.html', context)

def about(request):
    context = {
        'bio': 'Би бол Python, Django, болон JavaScript-ийг ашиглан вэб аппликейшнүүдийг хөгжүүлэгч.',
        'skills': [
            {'name': 'Python', 'level': '90'},
            {'name': 'Django', 'level': '85'},
            {'name': 'JavaScript', 'level': '80'},
            {'name': 'HTML/CSS', 'level': '95'},
            {'name': 'PostgreSQL', 'level': '75'},
        ],
        'education': [
            {'institution': 'МУИС',
             'degree': 'Компьютерийн ухааны бакалавр',
             'year': '2020-2024'},
        ],
    }
    return render(request, 'pages/about.html', context)

def projects(request):
    project = [
        {
            'id': 1,
            'title': 'E-commerce Website',
            'description': 'Django-р хийсэн онлайн дэлгүүрийн вэб сайт.',
            'technologies': ['Django', 'PostgreSQL', 'Stripe'],
            'image': 'ecommerce.png',
        },
        {
            'id': 2,
            'title': 'Task Manager',
            'description': 'React + Django REST API',
            'technologies': ['React', 'Django REST', 'Redux'],
            'image': 'task_manager.png',
        },
        {
            'id': 3,
            'title': 'Weather App',
            'description': 'JavaScript weather app',
            'technologies': ['JavaScript', 'API', 'CSS'],
            'image': 'weather.png',
        },
    ]
    return render(request, 'pages/projects.html', {'projects': project})

def project_detail(request, project_id):
    # In real app, fetch project from database
    projects = {
        '1': {
            'title': 'E-commerce Website',
            'description': 'Django-р хийсэн бүрэн онлайн дэлгүүр. Хэрэглэгчийн бүртгэл, сагс, төлбөр, захиалга.',
            'technologies': ['Django', 'PostgreSQL', 'Stripe', 'Redis'],
            'github': 'https://github.com/user/ecommerce',
            'live': 'https://ecommerce.example.com',
            'features': [
                'Хэрэглэгчийн бүртгэл, нэвтрэх',
                'Бүтээгдэхүүний хайлт ба шүүлтүүр',
                'Сагс ба checkout үйл явц',
                'Stripe төлбөр',
                'Захиалгын түүх',
            ],
        },
     }
    project = projects.get((project_id))
    return render(request, 'pages/project_detail.html', {'project': project, 'project_id': project_id})

def contact(request):
    context = {
        'email': 'batbold@example.com',
        'phone': '+976 9900-1234',
        'location': 'Улаанбаатар, Монгол',
        'socials': {
            'LinkedIn': 'https://www.linkedin.com/in/batbold',
            'GitHub': 'https://github.com/user/batbold',
            'Twitter': 'https://twitter.com/batbold',
        },
    }
    return render(request, 'pages/contact.html', context)