// Хуучин арга - давхар хашилт ("")
const oldWay = "Энэ бол string"

// Шинэ арга - backtick (``)
const newWay = `Энэ бол template literal`;

console.log(oldWay); // Энэ бол string
console.log(newWay); // Энэ бол template literal

const name = "Bat"
const age = 25;

const message1 = "Minii neriig " + name + " gedeg. " + age + " nastai."
console.log(message1)

// template literal
const message2 = `minii neriig ${name} gedeg. ${age} nastai.`;
console.log(message2);

const price = 5000;
const quantity = 3;
const total = `Niit dun: ${price * quantity}`;
console.log(total);

function getDiscount(amount) {
    return amount * 0.1;
}

const discount = `Hungulult: ${getDiscount(15000)}`;
console.log(discount);

const radius = 5;
const area = `toirgiin talbai: ${Math.PI * radius * radius}`;
console.log(area);


console.log(Math.sqrt(9));
console.log(Math.pow(2, 3));


const oldPoem = "Line one\nLine two\nLine three";
console.log(oldPoem);

const newPoem = `Line one
Line two
Line three`;
console.log(newPoem);

const userName = "Bat";
const userAge = 25;
const userCity = "Ulaanbaatar";

const htmlCard = `
    <div class="card">
        <h2>${userName}</h2>
        <p>nas: ${userAge}</p>
        <p>Hot: ${userCity}</p>
    </div>
`;
console.log(htmlCard);

const isLoggedIn = true;
const username = "Bat";
const greeting = `Tavtai moril, ${isLoggedIn ? `${username}!` : `zochin!`}`;
console.log(greeting);

