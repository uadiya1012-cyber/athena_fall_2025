// exercise 1

// 1. main-title элемент сонгох
const mainTitle = document.getElementById('main-title')

// 2. Текст агуулгыг хэвлэх
console.log('Title:', mainTitle.textContent)// "Dashboard"
// 3. user-list элемент сонгох
const userList = document.getElementById('user-list')

// 4. Tag нэр хэвлэх
console.log('Tag name:', userList.tagName)// "UL"

// exercise 2

// 1. subtitle сонгох
const subtitle = document.querySelector('.subtitle')
console.log('Subtitle:', subtitle.textContent)// "Welcome to your dashboard"
// 2. featured card сонгох
const featuredCard = document.querySelector('.featured')
// эсвэл: document.querySelector('.card.featured')
console.log('Featured:', featuredCard)

// 3. active nav link сонгох
const activeLink = document.querySelector('nav a.active')
// эсвэл: document.querySelector('nav .active')
console.log('Active link:', activeLink.textContent)// "Home"
// 4. tech category card сонгох
const techCard = document.querySelector('[data-category="tech"]')
console.log('Tech card:', techCard)

// exercise 3

// 1. Бүх card-уудыг сонгох
const allCards = document.querySelectorAll('.card')

// 2. Тоог хэвлэх
console.log('Card count:', allCards.length)// 3
// 3. Бүх nav link-үүд
const navLinks = document.querySelectorAll('nav a')

// 4. Link текстүүдийг array болгох
const linkTexts = []
navLinks.forEach(link => {
    linkTexts.push(link.textContent)
})
console.log('Nav links:', linkTexts)// ["Home", "Products", "Users", "Settings"]
// Өөр арга: Array.from + map
const linkTexts2 = Array.from(navLinks).map(link => link.textContent)


// exercise 4

// 1. Бүх user list item-үүд
const userItems = document.querySelectorAll('.user-list li')

// 2 & 3. forEach ашиглан нэр болон index хэвлэх
userItems.forEach((item, index) => {
    const userName = item.querySelector('.user-name')
    console.log(`User ${index + 1}: ${userName.textContent}`)
})

// Output:
// User 1: Alice Johnson
// User 2: Bob Smith
// User 3: Carol Williams
// User 4: David Brown
// User 5: Eva Martinez

// exercise 5

// 1. card-title сонгох
const cardTitle = document.querySelector('.card-title')

// 2. Parent card олох
const parentCard = cardTitle.parentElement
console.log('Parent card:', parentCard)// <div class="card" data-id="1">
// 3. closest section олох
const section = cardTitle.closest('section')
console.log('Section:', section)// <section id="cards-section">
// 4. Section ID хэвлэх
console.log('Section ID:', section.id)// "cards-section"


// exercise 6

// 1. user-list сонгох
const userList1 = document.getElementById('user-list')

// 2. Children тоо
console.log('Children count:', userList1.children.length)// 5
// 3. Эхний хүүхдийн data-user-id
const firstChild = userList1.firstElementChild
console.log('First user ID:', firstChild.dataset.userId)// "101"
// 4. Сүүлийн хүүхдийн нэр
const lastChild = userList1.lastElementChild
const lastName = lastChild.querySelector('.user-name')
console.log('Last user name:', lastName.textContent)// "Eva Martinez"


// exercise 7 
// 1. Featured card сонгох
const featuredCard1 = document.querySelector('.featured')

// 2. Өмнөх sibling-ийн data-id
const prevCard = featuredCard1.previousElementSibling
console.log('Previous card ID:', prevCard.dataset.id)// "1"
// 3. Дараагийн sibling-ийн title
const nextCard = featuredCard1.nextElementSibling
const nextTitle = nextCard.querySelector('.card-title')
console.log('Next card title:', nextTitle.textContent)// "Third Card"


// exercise 8
// 1. Бүх stat-box элементүүд
const statBoxes = document.querySelectorAll('.stat-box')

// 2. forEach ашиглан мэдээлэл хэвлэх
statBoxes.forEach(box => {
    const statType = box.dataset.stat
    const statNumber = box.querySelector('.stat-number').textContent
    console.log(`${statType}: ${statNumber}`)
})

// Output:
// users: 1,234
// orders: 567
// revenue: $89K

// exercise 9
// 1. Admin user-ийн нэр
const adminUser = document.querySelector('.user-role.admin')
const adminLi = adminUser.parentElement// li руу очих
const adminName = adminLi.querySelector('.user-name')
console.log('Admin:', adminName.textContent)// "Alice Johnson"
// Эсвэл илүү хялбар:
const adminName2 = document.querySelector('.user-role.admin')
    .parentElement.querySelector('.user-name')

// 2. Бүх editor-уудын нэр
const editors = document.querySelectorAll('.user-role.editor')
const editorNames = []
editors.forEach(editor => {
    const li = editor.parentElement
    const name = li.querySelector('.user-name')
    editorNames.push(name.textContent)
})
console.log('Editors:', editorNames)// ["Bob Smith", "David Brown"]
// 3. 3-р user
const thirdUser = document.querySelector('.user-list li:nth-child(3)')
const thirdName = thirdUser.querySelector('.user-name')
console.log('Third user:', thirdName.textContent)// "Carol Williams"


// exercise 10

function getDashboardSummary() {
    // Title
    const title = document.getElementById('main-title').textContent

    // Subtitle
    const subtitle = document.querySelector('.subtitle').textContent

    // Nav links
    const navLinksElements = document.querySelectorAll('nav a')
    const navLinks = Array.from(navLinksElements).map(link => link.textContent)

    // Card count
    const cardCount = document.querySelectorAll('.card').length

    // Featured card title
    const featuredCardTitle = document.querySelector('.featured .card-title').textContent

    // User count
    const userCount = document.getElementById('user-list').children.length

    // Admin name
    const adminLi = document.querySelector('.user-role.admin').parentElement
    const adminName = adminLi.querySelector('.user-name').textContent

    // Stats
    const stats = {}
    document.querySelectorAll('.stat-box').forEach(box => {
        const key = box.dataset.stat
        const value = box.querySelector('.stat-number').textContent
        stats[key] = value
    })

    return {
        title,
        subtitle,
        navLinks,
        cardCount,
        featuredCardTitle,
        userCount,
        adminName,
        stats
    }
}

// Тест
const summary = getDashboardSummary()
console.log(summary)

/* Output:
{
    title: "Dashboard",
    subtitle: "Welcome to your dashboard",
    navLinks: ["Home", "Products", "Users", "Settings"],
    cardCount: 3,
    featuredCardTitle: "Featured Card",
    userCount: 5,
    adminName: "Alice Johnson",
    stats: {
        users: "1,234",
        orders: "567",
        revenue: "$89K"
    }
}
*/