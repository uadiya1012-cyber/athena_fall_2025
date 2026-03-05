from django.shortcuts import render, redirect
from django.contrib.auth import login
from django.contrib.auth.decorators import login_required
from .forms import CustomUserCreationForm
from .decorators import role_required

def register(request):
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('employee_dashboard')
    else:
        form = CustomUserCreationForm()
    return render(request, 'register.html', {'form': form})

@login_required
def employee_dashboard(request):
    return render(request, 'employee_dashboard.html')

@login_required
@role_required(allowed_roles=['ADMIN', 'MANAGER'])
def manager_dashboard(request):
    return render(request, 'manager_dashboard.html')

@login_required
@role_required(allowed_roles=['ADMIN'])
def admin_settings(request):
    return render(request, 'admin_settings.html')