// // h1 style
// const h1 = document.querySelector('h1');
// h1.style.color = 'tomato';
// h1.style.backgroundColor = 'green';
// h1.style.textAlign = 'center';

// // main element
// const main = document.querySelector('main');

// // ===== Form үүсгэх =====
// const studentForm = document.createElement('form');

// const studentNameInput = document.createElement('input');
// studentNameInput.type = 'text';
// studentNameInput.placeholder = 'Student name';
// studentNameInput.required = true;

// const studentAgeInput = document.createElement('input');
// studentAgeInput.type = 'number';
// studentAgeInput.placeholder = 'Age';
// studentAgeInput.required = true;

// const submitButton = document.createElement('button');
// submitButton.textContent = 'Submit';

// studentForm.append(
//     studentNameInput,
//     studentAgeInput,
//     submitButton
// );

// main.appendChild(studentForm);

// // ===== LocalStorage-с өгөгдөл авах =====
// let savedStudents = JSON.parse(localStorage.getItem('students')) || [];

// // ===== Submit event =====
// studentForm.addEventListener('submit', function (event) {
//     event.preventDefault();

//     const student = {
//         name: studentNameInput.value.trim(),
//         age: studentAgeInput.value
//     };

//     // Нэр давхцаж байгаа эсэхийг шалгах
//     const isDuplicate = savedStudents.some(
//         s => s.name === student.name
//     );

//     if (isDuplicate) {
//         alert('⚠️ Ийм нэртэй сурагч аль хэдийн бүртгэгдсэн байна!');
//         return;
//     }

//     // Давхцаагүй бол хадгалах
//     savedStudents.push(student);
//     localStorage.setItem('students', JSON.stringify(savedStudents));

//     // input-ууд цэвэрлэх
//     studentNameInput.value = '';
//     studentAgeInput.value = '';

//     console.log('Saved students:', savedStudents);
// });