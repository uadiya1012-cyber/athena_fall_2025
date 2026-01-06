let students = [
    { name: 'Болд', grade: 85 },
    { name: 'Сарнай', grade: 92 },
    { name: 'Дорж', grade: 78 },
    { name: 'Оюука', grade: 88 },
    { name: 'Батаа', grade: 65 }
];

// TODO:
// 1. Дүн 80+ оюутнууд
let bStudents = students.filter(student => student.grade > 80);
console.log(bStudents);

// 2. Тэдний нэрүүдийг map()-аар ав
const studentNames = bStudents.map(function (student) {
    return student.name;
});
console.log(studentNames);

// 3. Дүн 70-аас доош оюутнууд
let badStudent = students.filter(student => student.grade < 70);
console.log(badStudent);