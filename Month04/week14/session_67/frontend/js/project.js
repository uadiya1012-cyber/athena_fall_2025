const h1 = document.querySelector('h1');
h1.style.color = 'tomato';
h1.style.backgroundColor = 'green';
h1.style.textAlign = 'center';


const main = document.querySelector('main');

// create form

const studentForm = document.createElement('form');

const studentNameInput = document.createElement('input');
const studentAgeInput = document.createElement('input');
studentAgeInput.type = 'number';

const submitButton = document.createElement('button');
submitButton.textContent = 'Submit';

studentForm.appendChild(studentNameInput);
studentForm.appendChild(studentAgeInput);
studentForm.appendChild(submitButton);

main.appendChild(studentForm);

// add event listener buyu submitButton darah ued hadgalah uildel
const students = [];

studentForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const student = {
        'name': studentNameInput.value,
        'age': studentAgeInput.value
    }
    students.push(student);
    localStorage.setItem('students', JSON.stringify(students));

    // render students buyu oyutanuudiig haruulah
    showNames();
});

// create students table
const h2 = document.createElement('h2');
h2.textContent = 'Student List';
main.appendChild(h2);

const table = document.createElement('table');
// table.style.border = '2px solid black';
table.border = '1px';
const tableHeader = document.createElement('thead');
const headerRow = document.createElement('tr');
const th1 = document.createElement('th');
th1.textContent = 'Student Name';
const th2 = document.createElement('th');
th2.textContent = 'Student Age';
headerRow.appendChild(th1);
headerRow.appendChild(th2);
tableHeader.appendChild(headerRow);
table.appendChild(tableHeader);

main.appendChild(table);

function showNames() {
    const savedStudents = JSON.parse(localStorage.getItem('students'));
    console.log(savedStudents);
    for (let i = 0; i < savedStudents.length; i++) {
        const studentRow = document.createElement('tr');
        const studentName = document.createElement('td');
        const studentAge = document.createElement('td');

        studentRow.appendChild(studentName);
        studentRow.appendChild(studentAge);

        studentName.textContent = savedStudents[i].name;
        studentAge.textContent = savedStudents[i].age;
        table.appendChild(studentRow);
    }

}












