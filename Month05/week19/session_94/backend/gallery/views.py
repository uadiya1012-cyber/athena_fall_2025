from django.shortcuts import render, redirect, get_object_or_404
from django.contrib import messages
from .models import Image

# Create your views here.

def gallery(request):
    images = Image.objects.all()
    return render(request, 'gallery/index.html', {'images': images})

# upload image

def upload_image(request):
    if request.method == 'POST':
        title = request.POST.get('title', '').strip()
        image = request.FILES.get('image')

        if not title:
            messages.error(request, 'Please provide a title!')
        elif not image:
            messages.error(request, 'Please provide an image!')
        else:
            Image.objects.create(title=title, image=image)
            messages.success(request, f'Image {title} uploaded successfully.')

    
    return redirect('gallery:index')


def delete_image(request, image_id):
    if request.method == 'POST':
        image = get_object_or_404(Image, id=image_id)
        image.image.delete() # delete file
        image.delete() # delete
        messages.success(request, 'Image deleted successfully!')
    return redirect('gallery:index')



