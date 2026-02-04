# contacts/views.py
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib import messages
from django.db.models import Q
from .models import Contact, Category
from .forms import ContactForm, CategoryForm, ContactSearchForm


# Contact List with Search
def contact_list(request):
    contacts = Contact.objects.all()
    form = ContactSearchForm(request.GET)

    if form.is_valid():
        query = form.cleaned_data.get('query')
        category = form.cleaned_data.get('category')
        favorites_only = form.cleaned_data.get('favorites_only')

        if query:
            contacts = contacts.filter(
                Q(first_name__icontains=query) |
                Q(last_name__icontains=query) |
                Q(email__icontains=query)
            )
        if category:
            contacts = contacts.filter(category=category)
        if favorites_only:
            contacts = contacts.filter(is_favorite=True)

    return render(request, 'contacts/list.html', {
        'contacts': contacts,
        'form': form
    })


# Contact Detail
def contact_detail(request, pk):
    contact = get_object_or_404(Contact, pk=pk)
    return render(request, 'contacts/detail.html', {'contact': contact})


# Contact Create
def contact_create(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            contact = form.save()
            messages.success(request, 'Contact created successfully!')
            return redirect('contact_detail', pk=contact.pk)
    else:
        form = ContactForm()

    return render(request, 'contacts/form.html', {
        'form': form,
        'title': 'Add Contact'
    })


# Contact Update
def contact_update(request, pk):
    contact = get_object_or_404(Contact, pk=pk)

    if request.method == 'POST':
        form = ContactForm(request.POST, instance=contact)
        if form.is_valid():
            form.save()
            messages.success(request, 'Contact updated successfully!')
            return redirect('contact_detail', pk=pk)
    else:
        form = ContactForm(instance=contact)

    return render(request, 'contacts/form.html', {
        'form': form,
        'title': 'Edit Contact',
        'contact': contact
    })


# Contact Delete
def contact_delete(request, pk):
    contact = get_object_or_404(Contact, pk=pk)

    if request.method == 'POST':
        contact.delete()
        messages.success(request, 'Contact deleted successfully!')
        return redirect('contact_list')

    return render(request, 'contacts/confirm_delete.html', {
        'contact': contact
    })


# Toggle Favorite
def contact_toggle_favorite(request, pk):
    contact = get_object_or_404(Contact, pk=pk)
    contact.is_favorite = not contact.is_favorite
    contact.save()
    return redirect('contact_list')
