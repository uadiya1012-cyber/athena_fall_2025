const modal = document.getElementById('my-modal');
const btn = document.getElementById('open-modal-button');
const closeBtn = document.getElementsByClassName('close-button')[0];

btn.onclick = function () {
    modal.style.display = 'block';
};

closeBtn.onclick = function () {
    modal.style.display = 'none';
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};