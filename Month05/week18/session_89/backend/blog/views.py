from django.shortcuts import render, redirect, get_object_or_404
from .models import Post
from .forms import PostForm


def post_list(request):
    posts = Post.objects.all()

    return render(request, 'blog/post_list.html', {'posts': posts})



def post_create(request):
    if request.method == 'POST':
        form = PostForm(request.POST)
        if form.is_valid():
            post = form.save()
            print(post)
            return redirect('post_list')
        
    else:
        form = PostForm()
    
    return render(request, 'blog/post_form.html', {
        'form': form,
        'title': 'Шинэ нийтлэл'
    })

def post_detail(request, id):
    post = get_object_or_404(Post, id=id)

    post.views += 1

    post.save(update_fields=['views'])

    return render(request, 'blog/post_detail.html', {'post': post})


