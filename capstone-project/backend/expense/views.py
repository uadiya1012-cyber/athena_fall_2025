from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from .models import Expense, Category
from .forms import ExpenseForm, CategoryForm

def expense_list(request):
    """Үндсэн хуудас - бүх зардлуудыг харуулна. Support category filter and HTMX partial responses."""
    category_id = request.GET.get('category')
    categories = Category.objects.all().order_by('name')
    if category_id:
        expenses = Expense.objects.filter(category__id=category_id).order_by('-date')
        try:
            selected_category = Category.objects.get(id=category_id)
        except Category.DoesNotExist:
            selected_category = None
    else:
        expenses = Expense.objects.all().order_by('-date')
        selected_category = None

    form = ExpenseForm()

    context = {
        'expenses': expenses,
        'form': form,
        'category_form': CategoryForm(),
        'categories': categories,
        'selected_category': selected_category,
    }

    # If request from HTMX, return only the table partial so hx-swap can replace it.
    if request.headers.get('HX-Request') == 'true' or request.headers.get('Hx-Request') == 'true':
        return render(request, 'expense/partials/expense_table.html', context)

    return render(request, 'expense/expense_list.html', context)

def create_expense(request):
    """HTMX endpoint - зардлыг үүсгээд шинэчилсэн хүснэгтийг буцаана."""
    if request.method == 'POST':
        form = ExpenseForm(request.POST)
        if form.is_valid():
            form.save()
            expenses = Expense.objects.all().order_by('-date')
            return render(
                request,
                'expense/partials/expense_table.html',
                {
                    'expenses': expenses,
                    'form': ExpenseForm(),
                    'message': 'Зардал амжилттай үүслээ!'
                }
            )
        else:
            expenses = Expense.objects.all().order_by('-date')
            return render(
                request,
                'expense/partials/expense_table.html',
                {
                    'expenses': expenses,
                    'form': ExpenseForm(),
                    'message': 'Алдааг засна уу.'
                }
            )

def edit_expense(request, pk):
    """HTMX endpoint - зардлын мөрийг засварлах inline формоор солих."""
    expense = get_object_or_404(Expense, pk=pk)
    form = ExpenseForm(instance=expense)
    return render(
        request,
        'expense/partials/expense_edit_row.html',
        {
            'expense': expense,
            'form': form
        }
    )

def update_expense(request, pk):
    """HTMX endpoint - зардлыг шинэчилж, шинэчилсэн хүснэгтийг буцаана."""
    expense = get_object_or_404(Expense, pk=pk)
    if request.method == 'POST':
        form = ExpenseForm(request.POST, instance=expense)
        if form.is_valid():
            form.save()
            expenses = Expense.objects.all().order_by('-date')
            return render(
                request,
                'expense/partials/expense_table.html',
                {
                    'expenses': expenses,
                    'form': ExpenseForm(),
                    'message': 'Зардал амжилттай шинэчлэгдлээ!'
                }
            )
        else:
            expenses = Expense.objects.all().order_by('-date')
            return render(
                request,
                'expense/partials/expense_table.html',
                {
                    'expenses': expenses,
                    'form': ExpenseForm(),
                    'message': 'Алдааг засна уу.'
                }
            )
        
def delete_expense(request, pk):
    """HTMX endpoint - зардлыг устгаж, шинэчилсэн хүснэгтийг буцаана."""
    expense = get_object_or_404(Expense, pk=pk)
    if request.method == 'POST':
        expense.delete()
        expenses = Expense.objects.all().order_by('-date')
        return render(
            request,
            'expense/partials/expense_table.html',
            {
                'expenses': expenses,
                'form': ExpenseForm(),
                'message': 'Зардал амжилттай устгагдлаа!'
            }
        )
    return render(
        request,
        'expense/partials/expense_table.html',
        {
            'expenses': Expense.objects.all().order_by('-date'),
            'form': ExpenseForm(),
            'message': 'Алдааг засна уу.'
        }
    )


# Category CRUD Views (HTMX)
def category_list(request):
    """HTMX endpoint - бүх category-уудыг буцаана."""
    categories = Category.objects.all().order_by('name')
    return render(
        request,
        'expense/partials/category_list.html',
        {
            'categories': categories,
            'category_form': CategoryForm()
        }
    )



def create_category(request):
    """HTMX endpoint - шинэ category үүсгээд category list partial буцаана."""
    if request.method == 'POST':
        form = CategoryForm(request.POST)
        if form.is_valid():
            form.save()
            categories = Category.objects.all().order_by('name')
            return render(
                request,
                'expense/partials/category_list.html',
                {
                    'categories': categories,
                    'category_form': CategoryForm(),
                    'message': 'Category амжилттай үүслээ!'
                }
            )
        else:
            categories = Category.objects.all().order_by('name')
            return render(
                request,
                'expense/partials/category_list.html',
                {
                    'categories': categories,
                    'category_form': form,
                    'message': 'Алдааг засна уу.'
                }
            )


def edit_category(request, pk):
    category = get_object_or_404(Category, pk=pk)
    form = CategoryForm(instance=category)
    return render(
        request,
        'expense/partials/category_form.html',
        {
            'category': category,
            'category_form': form
        }
    )


def update_category(request, pk):
    category = get_object_or_404(Category, pk=pk)
    if request.method == 'POST':
        form = CategoryForm(request.POST, instance=category)
        if form.is_valid():
            form.save()
            categories = Category.objects.all().order_by('name')
            return render(
                request,
                'expense/partials/category_list.html',
                {
                    'categories': categories,
                    'category_form': CategoryForm(),
                    'message': 'Category амжилттай шинэчлэгдлээ!'
                }
            )
        else:
            return render(
                request,
                'expense/partials/category_form.html',
                {
                    'category': category,
                    'category_form': form,
                    'message': 'Алдааг засна уу.'
                }
            )


def delete_category(request, pk):
    category = get_object_or_404(Category, pk=pk)
    if request.method == 'POST':
        category.delete()
        categories = Category.objects.all().order_by('name')
        return render(
            request,
            'expense/partials/category_list.html',
            {
                'categories': categories,
                'category_form': CategoryForm(),
                'message': 'Category устгагдлаа!'
            }
        )
    return render(
        request,
        'expense/partials/category_list.html',
        {
            'categories': Category.objects.all().order_by('name'),
            'category_form': CategoryForm(),
            'message': 'Алдааг засна уу.'
        }
    )



