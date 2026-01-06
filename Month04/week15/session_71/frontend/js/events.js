// DOM Selector

const eventButton = document.getElementsByClassName('click-event')[0];  // array 0 index
console.log(eventButton);

// call back function дээр дэлэгрэнгүй үзнэ.
eventButton.addEventListener('click', function (e) {
    console.log(e);
    const newElement = document.createElement('div');
    newElement.classList.add('clicked');
    // newElement.className('events');

    document.body.appendChild(newElement);
});

