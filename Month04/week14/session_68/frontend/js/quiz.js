console.log('Exercise 01');

let element = document.getElementById('title');
element.textContent = '<b>Bold</b>';// string
element.innerHTML = '<b>Bold</b>';// tag

// quiz 02
console.log('Quiz 02');
let input = document.querySelector('input');
console.log(typeof input.value);// 


// quiz 03
console.log('Quiz 03');
element.style.backgroundColor = 'red';
element.style.fontSize = '20px';


// quiz 04
console.log('quiz 04');
element.classList.add('active');
element.classList.remove('active');
element.classList.toggle('active');
element.classList.contains('active');
