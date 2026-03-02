from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from .models import Contact
from .forms import ContactForm

def contact_list(request):
    """Main page - renders the full page with all contacts."""
    contacts = Contact.objects.all().order_by('-created_at')
    form = ContactForm()
    return render(
        request,
        'contacts/contact_list.html',
        {
            'contacts': contacts,
            'form': form
        }
    )

def create_contact(request):
    """HTMX endpoint - creates a contact and returns the updated table partial."""
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            contacts = Contact.objects.all().order_by('-created_at')
            return render(
                request,
                'contacts/partials/contact_table.html',
                {
                    'contacts': contacts,
                    'form': ContactForm(),
                    'message': 'Contact created successfully!'
                }
            )
        else:
            contacts = Contact.objects.all().order_by('-created_at')
            return render(
                request,
                'contacts/partials/contact_table.html',
                {
                    'contacts': contacts,
                    'form': ContactForm(),
                    'message': 'Please fix the errors below.'
                }
            )
        
def edit_contact(request, pk):
    """HTMX endpoint - returns an inline edit form replacing the contact row."""
    contact = get_object_or_404(Contact, pk=pk)
    form = ContactForm(instance=contact)
    return render(
        request,
        'contacts/partials/contact_edit_row.html',
        {
            'contact': contact,
            'form': form
        }
    )

def update_contact(request, pk):
    """HTMX endpoint - saves the edit and returns the updated row."""
    contact = get_object_or_404(Contact, pk=pk)
    if request.method == 'POST':
        form = ContactForm(request.POST, instance=contact)
        if form.is_valid():
            form.save()
            return render(
                request,
                'contacts/partials/contact_row.html',
                {
                    'contact': contact
                }
            )
        else:
            return render(
                request,
                'contacts/partials/contact_edit_row.html',
                {
                    'contact': contact,
                    'form': form,
                }
            )
        

def delete_contact(request, pk):
    """HTMX endpoint - deletes the contact and returns empty response to remove the row."""
    contact = get_object_or_404(Contact, pk=pk)
    if request.method == 'DELETE':
        contact.delete()
        return HttpResponse('')
