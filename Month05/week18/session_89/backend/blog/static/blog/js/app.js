document.addEventListener('DOMContentLoaded', function () {
    console.log('Blog app loaded!');

    //Delete confirmation
    const deleteForms = document.querySelectorAll('.delete-form');
    deleteForms.forEach(form => {
        form.addEventListener('submit', function (e) {
            if (!confirm('Устгахдаа итгэлтэй байна уу?')) {
                e.preventDefault();
            }
        });
    });
});