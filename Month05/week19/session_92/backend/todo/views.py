from django.shortcuts import render, redirect, get_object_or_404
from django.contrib import messages
from .models import Todo

def index(request):
    todos = Todo.objects.all()
    return render(request, 'todo/index.html', {'todos': todos})

def add_todo(request):
    if request.method == 'POST':
        text = request.POST.get('text', '').strip()
        if text:
            Todo.objects.create(text=text)
            messages.success(request, 'Todo added successfully')
        else:
            messages.error(request, 'Todo text cannot be empty')

    return redirect('todo:index')

def toggle_todo(request, todo_id):
    if request.method == 'POST':
        todo = get_object_or_404(Todo, id=todo_id)
        todo.is_completed = not todo.is_completed
        todo.save()
        messages.success(request, 'Todo Updated')
    return redirect('todo:index')

def delete_todo(request, todo_id):
    if request.method == 'POST':
        todo = get_object_or_404(Todo, id=todo_id)
        todo.delete()
        messages.success(request, 'Todo deleted!')
    return redirect('todo:index')