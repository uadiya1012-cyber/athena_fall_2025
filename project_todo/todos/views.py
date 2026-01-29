from django.shortcuts import render, redirect
from .models import Todo

from django.utils import timezone

# Create your views here.
def index(request):
	if request.method == 'POST':
		# Create new todo
		if 'title' in request.POST:
			title = request.POST.get('title', '').strip()
			if title:
				Todo.objects.create(title=title)
			return redirect('home')

		# Toggle completion
		if 'toggle_id' in request.POST:
			try:
				tid = int(request.POST.get('toggle_id'))
				todo = Todo.objects.get(id=tid)
				todo.is_done = not todo.is_done
				todo.updated_at = timezone.now()
				todo.save()
			except (ValueError, Todo.DoesNotExist):
				pass
			return redirect('home')

		# Delete
		if 'delete_id' in request.POST:
			try:
				did = int(request.POST.get('delete_id'))
				Todo.objects.filter(id=did).delete()
			except ValueError:
				pass
			return redirect('home')

	# GET -> render list
	todos = Todo.objects.all().order_by('-created_at')
	return render(request, 'todos/index.html', {'todos': todos})
