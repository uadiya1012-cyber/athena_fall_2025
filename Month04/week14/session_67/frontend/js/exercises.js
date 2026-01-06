// DOM - Даалгавар 1

// 1. title-ийн textContent өөрчлөх
const title = document.getElementById('title');
title.textContent = 'New Title';

// 2. text-ийн style.color өөрчлөх
const text = document.getElementById('text');
text.style.color = 'red';

// 3. text-д 'highlight' class нэмэх
text.classList.add('highlight');

// DOM - Даалгавар 2

// 1. list (<ul>) элементийг авах
const list = document.getElementById('list');

// 2. Шинэ <li> элемент үүсгэх
const newItem = document.createElement('li');

// 3. textContent өгөх
newItem.textContent = 'Item 3';

// 4. list-д нэмэх
list.appendChild(newItem);



// DOM - Даалгавар 4

function createTable(data) {
    // 1. table үүсгэх
    const table = document.createElement('table');
    table.border = '1px';

    // 2. Header row
    const headerRow = document.createElement('tr');

    const thName = document.createElement('th');
    thName.textContent = 'Name';

    const thGrade = document.createElement('th');
    thGrade.textContent = 'Grade';

    headerRow.appendChild(thName);
    headerRow.appendChild(thGrade);
    table.appendChild(headerRow);

    // 3. Data rows
    data.forEach(student => {
        const row = document.createElement('tr');

        const nameTd = document.createElement('td');
        nameTd.textContent = student.name;

        const gradeTd = document.createElement('td');
        gradeTd.textContent = student.grade;

        row.appendChild(nameTd);
        row.appendChild(gradeTd);
        table.appendChild(row);
    });

    // 4. Body-д нэмэх
    document.body.appendChild(table);
}

// Test data
const students = [
    { name: 'Болд', grade: 95 },
    { name: 'Сарнай', grade: 88 },
    { name: 'Дорж', grade: 92 }
];

createTable(students);



