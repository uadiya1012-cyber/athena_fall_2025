console.log('localstorage');

let student = {
    'id': 1,
    'name': 'Adiya',
    'major': 'Computer Science'
}

console.log(typeof (student)); // object

localStorage.setItem('student', student);
localStorage.setItem('studentString', JSON.stringify(student));

const savedStudent = localStorage.getItem('student');
console.log(savedStudent);
console.log(typeof (savedStudent));

const savedObjStudent = JSON.parse(localStorage.getItem('studentString'));
console.log(savedObjStudent);
console.log(typeof (savedObjStudent));

