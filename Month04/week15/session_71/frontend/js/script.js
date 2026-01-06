// Notification container
const notificationContainer = document.getElementById('notification-container');

// showNotification
function showNotification(message, type = 'info', duration = 3000) {
    console.log('show notification');
    // 1. notification div үүсгэх
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;

    // 2. Icon тодорхойлох
    const icons = {
        success: '✓',
        error: '✕',
        info: 'ℹ'
    };

    // 3. innerHTML тохируулах
    notification.innerHTML = `
        <span class="notification-icon">${icons[type]}</span>
        <span class="notification-text">${message}</span>
        <button class="notification-close">×</button>
    `;

    // 4. Container-д нэмэх
    notificationContainer.appendChild(notification);

    // 5. Close button event
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        removeNotification(notification);
    });

    // 6. Auto remove
    setTimeout(() => {
        removeNotification(notification);
    }, duration);
}

function removeNotification(notification) {
    notification.classList.add('hiding');
    setTimeout(() => {
        notification.remove();
    }, 300);
}

// console.log(showNotification('Тавтай морилно уу!', 'success'));



// Exercise 1: Шийдэл бичих хэсэг

const btnClick = document.getElementById('btn-click');
const outputClick = document.getElementById('output-click');

btnClick.addEventListener('click', function () {
    console.log('Button clicked!');

    // Output-д нэмэх
    const line = document.createElement('div');
    line.className = 'output-line';
    line.innerHTML = `<span class="timestamp">${new Date().toLocaleTimeString()}</span> Button clicked!`;

    outputClick.appendChild(line);
});


// Exercise 2: Шийдэл бичих хэсэг

const btnCount = document.getElementById('btn-count');
const btnReset = document.getElementById('btn-reset');
let count = 0;

btnCount.addEventListener('click', () => {
    count++;
    btnCount.innerHTML = `Clicks: ${count}`;
});

btnReset.addEventListener('click', () => {
    count = 0;
    btnCount.textContent = 'Clicks: 0';
});



// Exercise 3: Шийдэл бичих хэсэг

const cardDblclick = document.getElementById('card-dblclick');

cardDblclick.addEventListener('click', () => {
    // Class toggle
    cardDblclick.classList.toggle('selected');

    // Status update
    const status = cardDblclick.querySelector('.status');
    const isSelected = cardDblclick.classList.contains('selected');

    if (isSelected) {
        status.className = 'status status-success';
        status.innerHTML = '<span class="status-dot"></span> Selected';
    } else {
        status.className = 'status status-warning';
        status.innerHTML = '<span class="status-dot"></span> Not selected';
    };
});


// Exercise 4: Шийдэл бичих хэсэг

const hoverBox = document.getElementById('hover-box');
const outputHover = document.getElementById('output-hover');

hoverBox.addEventListener('mouseenter', () => {
    hoverBox.textContent = 'Inside!';
    hoverBox.classList.add('active');

    logEvent(outputHover, 'mouseenter', 'Mouse entered the box');
});

hoverBox.addEventListener('mouseleave', () => {
    hoverBox.textContent = 'Hover Me!';
    hoverBox.classList.remove('active');

    logEvent(outputHover, 'mouseleave', 'Mouse left the box');
});

// Helper function
function logEvent(output, type, message) {
    const line = document.createElement('div');
    line.className = 'output-line';
    line.innerHTML = `
        <span class="timestamp">${new Date().toLocaleTimeString()}</span>
        <span class="event-type">${type}</span>: ${message}
    `;
    output.appendChild(line);
    output.scrollTop = output.scrollHeight;
};


// Exercise 5: Шийдэл бичих хэсэг

const trackerBox = document.getElementById('tracker-box');
const trackerDot = document.getElementById('tracker-dot');
const trackerCoords = document.getElementById('tracker-coords');

trackerBox.addEventListener('mousemove', (e) => {
    // Box-ийн хүрээ авах
    const rect = trackerBox.getBoundingClientRect();

    // Box дотор координат
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Dot байрлал шинэчлэх
    trackerDot.style.left = x + 'px';
    trackerDot.style.top = y + 'px';

    // Координат текст
    trackerCoords.textContent = `X: ${Math.round(x)}, Y: ${Math.round(y)}`;
});


// Exercise 6: Шийдэл бичих хэсэг

const btnHold = document.getElementById('btn-hold');
const outputHold = document.getElementById('output-hold');
let holdStart = null;

btnHold.addEventListener('mousedown', () => {
    btnHold.style.background = '#dc2626';
    btnHold.textContent = 'Holding...';
    holdStart = Date.now();

    logEvent(outputHold, 'mousedown', 'Button pressed');
});

btnHold.addEventListener('mouseup', () => {
    btnHold.style.background = '';

    const duration = Date.now() - holdStart;
    btnHold.textContent = 'Hold Me';

    logEvent(outputHold, 'mouseup', `Released after ${duration}ms`);
});

// Mouse-г товчноос гаргахад мөн буцаах
btnHold.addEventListener('hold', () => {
    btnHold.style.background = '';
    btnHold.textContent = 'Hold Me';
});


// Exercise 7: Шийдэл бичих хэсэг

const parentCard = document.getElementById('parent-card');
const outputTarget = document.getElementById('output-target');

parentCard.addEventListener('click', (e) => {
    const targetId = e.target.id || 'no-id';
    const currentTargetId = e.currentTarget.id;

    const line = document.createElement('div');
    line.className = 'output-line';
    line.innerHTML = `
        <span class="event-type">target:</span> #${targetId} |
        <span class="event-type">currentTarget:</span> #${currentTargetId}
    `;

    outputTarget.appendChild(line);
    outputTarget.scrollTop = outputTarget.scrollHeight;
});


// Exercise 8: Шийдэл бичих хэсэг

const linkPrevented = document.getElementById('link-prevented');
const outputPrevent = document.getElementById('output-prevent');

linkPrevented.addEventListener('click', (e) => {
    // Default зогсоох (хуудас руу очихгүй)
    e.preventDefault();

    const line = document.createElement('div');
    line.className = 'output-line';
    line.innerHTML = `
        <span class="timestamp">${new Date().toLocaleTimeString()}</span>
        Link clicked but navigation <span class="event-type">prevented</span>!
    `;

    outputPrevent.appendChild(line);
});

// Normal link-д зүгээр л лог хийх
document.getElementById('link-normal').addEventListener('click', (e) => {
    // preventDefault() дуудахгүй - navigate хийнэ
    console.log('Navigating to:', e.target.href);
});

// Exercise 9: Шийдэл бичих хэсэг

const counterValue = document.getElementById('counter-value');
const counterInc = document.getElementById('counter-inc');
const counterDec = document.getElementById('counter-dec');
const counterReset = document.getElementById('counter-reset');

let counter = 0;

function updateCounter() {
    counterValue.textContent = counter
};

counterInc.addEventListener('click', () => {
    counter++;
    updateCounter();
});

counterDec.addEventListener('click', () => {
    counter--;
    updateCounter();
});

counterReset.addEventListener('click', () => {
    counter = 0;
    updateCounter();
});


// Exercise 10: Шийдэл бичих хэсэг

const gallery = document.getElementById('gallery');
const selectedItems = document.getElementById('selected-items');

gallery.addEventListener('click', (e) => {
    const item = e.target.closest('.gallery-item');
    if (!item) return;

    // Ctrl/Cmd дарсан эсэх
    const multiSelect = e.ctrlKey || e.metaKey;

    if (!multiSelect) {
        // Бүх сонголтыг цуцлах
        gallery.querySelectorAll('.gallery-item').forEach(el => {
            el.classList.remove('selected');
        });
    };

    // Одоогийн item toggle
    item.classList.toggle('selected');

    // Сонгосон ID-уудыг цуглуулах
    const selected = gallery.querySelectorAll('.gallery-item.selected');
    const ids = Array.from(selected).map(el => el.dataset.id);

    selectedItems.textContent = ids.length > 0 ? ids.join(', ') : 'None';
});



// Гэрийн даалгавар 1: Toggle Switch

const toggleNotifications = document.getElementById('toggle-notifications');
const toggleLabel = document.getElementById('toggle-label');

const toggleDarkmode = document.getElementById('toggle-darkmode');
const darkmodeLabel = document.getElementById('darkmode-label');

// Notifications toggle
toggleNotifications.addEventListener('click', () => {
    toggleNotifications.classList.toggle('active');

    const isOn = toggleNotifications.classList.contains('active');
    toggleLabel.textContent = `Notifications: ${isOn ? 'ON' : 'OFF'}`;
});

// Dark mode toggle
toggleDarkmode.addEventListener('click', () => {
    toggleDarkmode.classList.toggle('active');

    const isOn = toggleDarkmode.classList.contains('active');
    darkmodeLabel.textContent = `Dark Mode: ${isOn ? 'ON' : 'OFF'}`;

    document.body.style.backgroundColor = isOn ? '#0f172a' : '';
    document.body.style.color = isOn ? '#e5e7eb' : '';
});


// Гэрийн даалгавар 2: Color Picker

const colorPicker = document.getElementById('color-picker');

colorPicker.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (!btn) return;

    const color = btn.dataset.color;
    document.body.style.backgroundColor = color;
    showNotification('Өнгө амжилттай солигдлоо!', 'success');
});







