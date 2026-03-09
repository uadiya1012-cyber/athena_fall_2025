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
            return redirect('user_dashboard')
    else:
        form = CustomUserCreationForm()
    return render(request, 'accounts/register.html', {'form': form})
    
@login_required
def user_dashboard(request):
    return render(request, 'accounts/user_dashboard.html')

@login_required
@role_required(allowed_roles=['ADMIN', 'MODERATOR'])
def moderator_dashboard(request):
    return render(request, 'accounts/moderator_dashboard.html')

@login_required
@role_required(allowed_roles=['ADMIN'])
def admin_settings(request):
    return render(request, 'accounts/admin_settings.html')


