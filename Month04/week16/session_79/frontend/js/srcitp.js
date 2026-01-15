// Exercise 1: Basic GET Request
// Зорилго: fetch(), response.json(), then/catch

const output1 = document.getElementById('output-1')
const ex1PostId = document.getElementById('ex1-postId')
const ex1Btn = document.getElementById('ex1-btn')

function log1(message, type = 'info') {
    const time = new Date().toLocaleTimeString()
    const line = document.createElement('div')
    line.className = `output-line ${type}`
    line.innerHTML = `<span class="timestamp">${time}</span>${message}`
    output1.appendChild(line)
    output1.scrollTop = output1.scrollHeight
}

ex1Btn.addEventListener('click', () => {
    output1.innerHTML = ''
    const postId = ex1PostId.value || 1

    log1(`Fetching post #${postId}...`, 'info')

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => {
            log1(`Status: ${response.status} ${response.statusText}`, 'info')

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`)
            }

            return response.json()
        })
        .then(post => {
            log1(`✓ Post loaded successfully`, 'success')
            log1(`ID: ${post.id}`, 'info')
            log1(`Title: ${post.title}`, 'info')
            log1(`Body: ${post.body.substring(0, 100)}...`, 'info')
        })
        .catch(error => {
            log1(`✗ Error: ${error.message}`, 'error')
        })
})


// Exercise 2: Fetch & Display Users
// Зорилго: Data fetch хийж DOM-д харуулах

const output2 = document.getElementById('output-2')
const ex2Users = document.getElementById('ex2-users')
const ex2Btn = document.getElementById('ex2-btn')

function log2(message, type = 'info') {
    const time = new Date().toLocaleTimeString()
    const line = document.createElement('div')
    line.className = `output-line ${type}`
    line.innerHTML = `<span class="timestamp">${time}</span>${message}`
    output2.appendChild(line)
}

ex2Btn.addEventListener('click', () => {
    output2.innerHTML = ''
    ex2Users.innerHTML = '<div class="text-center"><span class="spinner"></span> Loading...</div>'

    log2('Fetching users...', 'info')

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch users')
            }
            return response.json()
        })
        .then(users => {
            log2(`✓ Loaded ${users.length} users`, 'success')

            ex2Users.innerHTML = ''

            users.forEach(user => {
                const card = document.createElement('div')
                card.className = 'card'
                card.innerHTML = `
                    <div class="user-card">
                        <div class="user-avatar">${user.name.charAt(0)}</div>
                        <div class="user-info">
                            <div class="user-name">${user.name}</div>
                            <div class="user-email">${user.email}</div>
                        </div>
                    </div>
                    <div class="card-meta">
                        📍 ${user.address.city} | 🏢 ${user.company.name}
                    </div>
                `
                ex2Users.appendChild(card)
            })
        })
        .catch(error => {
            log2(`✗ Error: ${error.message}`, 'error')
            ex2Users.innerHTML = `<div class="text-center" style="color: #ef4444;">Failed to load users</div>`
        })
})


// Exercise 3: POST Request
// Зорилго: POST method, body, headers
const output3 = document.getElementById('output-3')
const ex3Title = document.getElementById('ex3-title')
const ex3Body = document.getElementById('ex3-body')
const ex3Btn = document.getElementById('ex3-btn')

function log3(message, type = 'info') {
    const time = new Date().toLocaleTimeString()
    const line = document.createElement('div')
    line.className = `output-line ${type}`
    line.innerHTML = `<span class="timestamp">${time}</span>${message}`
    output3.appendChild(line)
    output3.scrollTop = output3.scrollHeight
}

ex3Btn.addEventListener('click', () => {
    output3.innerHTML = ''

    const title = ex3Title.value.trim()
    const body = ex3Body.value.trim()

    if (!title || !body) {
        log3('Please fill in all fields', 'error')
        return
    }

    log3('Creating post...', 'info')

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(({
            title: title,
            body: body,
            userId: 1
        }))
    })
        .then(response => {
            log3(`Status: ${response.status}`, 'info')
            return response.json()
        })
        .then(data => {
            log3('✓ Post created successfully!', 'success')
            log3(`New post ID: ${data.id}`, 'success')
            log3(`Title: ${data.title}`, 'info')

            // Clear form
            ex3Title.value = ''
            ex3Body.value = ''
        })
        .catch(error => {
            log3(`✗ Error: ${error.message}`, 'error')
        })
})



// Exercise 4: Error Handling
// Зорилго: HTTP errors vs Network errors

const output4 = document.getElementById('output-4')
const ex4Valid = document.getElementById('ex4-valid')
const ex4Invalid = document.getElementById('ex4-invalid')
const ex4Network = document.getElementById('ex4-network')

function log4(message, type = 'info') {
    const time = new Date().toLocaleTimeString()
    const line = document.createElement('div')
    line.className = `output-line ${type}`
    line.innerHTML = `<span class="timestamp">${time}</span>${message}`
    output4.appendChild(line)
    output4.scrollTop = output4.scrollHeight
}

function fetchWithErrorHandling(url) {
    output4.innerHTML = ''
    log4(`Fetching: ${url}`, 'info')

    fetch(url)
        .then(response => {
            log4(`Response status: ${response.status}`, 'info')
            log4(`Response OK: ${response.ok}`, 'info')

            // Check for HTTP errors
            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status} ${response.statusText}`)
            }

            return response.json()
        })
        .then(data => {
            log4('✓ Success!', 'success')
            log4(`Data: ${JSON.stringify(data).substring(0, 100)}...`, 'success')
        })
        .catch(error => {
            // Check error type
            if (error.name === 'TypeError') {
                log4('✗ Network Error: Unable to reach server', 'error')
            } else {
                log4(`✗ ${error.message}`, 'error')
            }
        })
}

// Valid URL
ex4Valid.addEventListener('click', () => {
    fetchWithErrorHandling('https://jsonplaceholder.typicode.com/posts/1')
})

// Invalid URL (404)
ex4Invalid.addEventListener('click', () => {
    fetchWithErrorHandling('https://jsonplaceholder.typicode.com/posts/99999')
})

// Network Error (invalid domain)
ex4Network.addEventListener('click', () => {
    fetchWithErrorHandling('https://invalid-domain-that-does-not-exist.com/api')
})



// Exercise 5: Loading States
// Зорилго: Loading, success, error states UI

const output5 = document.getElementById('output-5')
const ex5Status = document.getElementById('ex5-status')
const ex5Btn = document.getElementById('ex5-btn')

function log5(message, type = 'info') {
    const time = new Date().toLocaleTimeString()
    const line = document.createElement('div')
    line.className = `output-line ${type}`
    line.innerHTML = `<span class="timestamp">${time}</span>${message}`
    output5.appendChild(line)
    output5.scrollTop = output5.scrollHeight
}

function setStatus(status, text) {
    ex5Status.className = `status-badge ${status}`

    if (status === 'loading') {
        ex5Status.innerHTML = `<span class="spinner"></span> ${text}`
    } else {
        ex5Status.textContent = text
    }
}

// Simulate slow API
function slowFetch(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch(url)
                .then(response => response.json())
                .then(resolve)
                .catch(reject)
        }, 2000)  // 2 second delay
    })
}

ex5Btn.addEventListener('click', () => {
    output5.innerHTML = ''
    ex5Btn.disabled = true

    // Loading state
    setStatus('Loading!', 'Loading...')
    log5('Request started...', 'info')

    slowFetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(post => {
            // Success state
            setStatus('success', '✓ Success')
            log5('✓ Data loaded!', 'success')
            log5(`Title: ${post.title}`, 'info')
        })
        .catch(error => {
            // Error state
            setStatus('error', '✗ Error')
            log5(`✗ Error: ${error.message}`, 'error')
        })
        .finally(() => {
            ex5Btn.disabled = false
        })
})



// Exercise 6: Search with Debounce
// Зорилго: Debounced search with fetch

const output6 = document.getElementById('output-6')
const ex6Results = document.getElementById('ex6-results')
const ex6Search = document.getElementById('ex6-search')

let searchTimeout = null
let allUsers = []

function log6(message, type = 'info') {
    const line = document.createElement('div')
    line.className = `output-line ${type}`
    line.textContent = message
    output6.innerHTML = ''
    output6.appendChild(line)
}

// Load users once
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        allUsers = users
        log6(`Loaded ${users.length} users. Start typing to search...`, 'info')
    })

function searchUsers(query) {
    log6(`Searching for: "${query}"`, 'info')

    const results = allUsers.filter(user =>
        user.name.toLowerCase().includes(query.toLowerCase()) ||
        user.email.toLowerCase().includes(query.toLowerCase())
    )

    ex6Results.innerHTML = ''

    if (results.length === 0) {
        log6('No users found', 'warning')
        return
    }

    log6(`Found ${results.length} user(s)`, 'success')

    results.forEach(user => {
        const card = document.createElement('div')
        card.className = 'card'
        card.innerHTML = `
            <div class="user-card">
                <div class="user-avatar">${user.name.charAt(0)}</div>
                <div class="user-info">
                    <div class="user-name">${user.name}</div>
                    <div class="user-email">${user.email}</div>
                </div>
            </div>
        `
        ex6Results.appendChild(card)
    })
}

ex6Search.addEventListener('input', (e) => {
    const query = e.target.value.trim()

    // Clear previous timeout
    if (searchTimeout) {
        fetch(searchTimeout)
    }

    if (!query) {
        ex6Results.innerHTML = ''
        log6('Type to search...', 'info')
        return
    }

    // Debounce - 300ms
    searchTimeout = setTimeout(() => {
        searchUsers(query)
    }, 300)
})



// Exercise 7: Parallel Requests
// Зорилго: Promise.all() with fetch

const output7 = document.getElementById('output-7')
const ex7Data = document.getElementById('ex7-data')
const ex7UserId = document.getElementById('ex7-userId')
const ex7Btn = document.getElementById('ex7-btn')

function log7(message, type = 'info') {
    const line = document.createElement('div')
    line.className = `output-line ${type}`
    line.textContent = message
    output7.appendChild(line)
}

ex7Btn.addEventListener('click', () => {
    output7.innerHTML = ''
    ex7Data.innerHTML = '<div class="text-center"><span class="spinner"></span> Loading...</div>'

    const userId = ex7UserId.value || 1
    const startTime = Date.now()

    log7(`Fetching data for user #${userId}...`, 'info')

    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(r => r.json())

    const postsPromise = fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(r => r.json())

    const todosPromise = fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
        .then(r => r.json())

    Promise.all([userPromise, postsPromise, todosPromise])
        .then(([user, posts, todos]) => {
            const elapsed = Date.now() - startTime
            log7(`✓ All data loaded in ${elapsed}ms`, 'success')

            ex7Data.innerHTML = ''

            // User card
            const userCard = document.createElement('div')
            userCard.className = 'card'
            userCard.innerHTML = `
                <div class="card-title">👤 User Info</div>
                <div class="card-body">
                    <strong>${user.name}</strong><br>
                    ${user.email}<br>
                    📍 ${user.address.city}
                </div>
            `

            // Posts card
            const postsCard = document.createElement('div')
            postsCard.className = 'card'
            postsCard.innerHTML = `
                <div class="card-title">📝 Posts</div>
                <div class="card-body">
                    <strong>${posts.length}</strong> total posts
                </div>
            `

            // Todos card
            const completedTodos = todos.filter(t => t.completed).length
            const todosCard = document.createElement('div')
            todosCard.className = 'card'
            todosCard.innerHTML = `
                <div class="card-title">✅ Todos</div>
                <div class="card-body">
                    <strong>${completedTodos}/${todos.length}</strong> completed
                </div>
            `

            ex7Data.appendChild(userCard)
            ex7Data.appendChild(postsCard)
            ex7Data.appendChild(todosCard)
        })
        .catch(error => {
            log7(`✗ Error: ${error.message}`, 'error')
            ex7Data.innerHTML = '<div class="text-center" style="color: #ef4444;">Failed to load data</div>'
        })
})




// Exercise 8: AbortController
// Зорилго: Request цуцлах

const output8 = document.getElementById('output-8')
const ex8Start = document.getElementById('ex8-start')
const ex8Cancel = document.getElementById('ex8-cancel')

let currentController = null

function log8(message, type = 'info') {
    const time = new Date().toLocaleTimeString()
    const line = document.createElement('div')
    line.className = `output-line ${type}`
    line.innerHTML = `<span class="timestamp">${time}</span>${message}`
    output8.appendChild(line)
    output8.scrollTop = output8.scrollHeight
}

ex8Start.addEventListener('click', () => {
    output8.innerHTML = ''

    // Create new AbortController
    currentController = new AbortController()

    ex8Start.disabled = true
    ex8Cancel.disabled = false

    log8('Starting request (5 second delay)...', 'info')

    // Simulate slow request
    const slowUrl = 'https://httpbin.org/delay/5'  // 5 second delay

    fetch(slowUrl, {
        signal: currentController.signal
    })
        .then(response => response.json())
        .then(data => {
            log8('✓ Request completed!', 'success')
            log8(`Response: ${JSON.stringify(data).substring(0, 100)}`, 'info')
        })
        .catch(error => {
            if (error.name === 'AbortError') {
                log8('⚠️ Request was cancelled', 'warning')
            } else {
                log8(`✗ Error: ${error.message}`, 'error')
            }
        })
        .finally(() => {
            ex8Start.disabled = false
            ex8Cancel.disabled = true
            currentController = null
        })
})

ex8Cancel.addEventListener('click', () => {
    if (currentController) {
        currentController.abort()
        log8('Cancelling request...', 'warning')
    }
})


// Exercise 9: CRUD Operations
// Зорилго: GET, POST, PUT, DELETE

const output9 = document.getElementById('output-9')
const ex9Id = document.getElementById('ex9-id')
const ex9Title = document.getElementById('ex9-title')
const ex9Btn = document.getElementById('ex9-btn')
const tabs = document.querySelectorAll('.tab')

let currentMethod = 'get'

function log9(message, type = 'info') {
    const time = new Date().toLocaleTimeString()
    const line = document.createElement('div')
    line.className = `output-line ${type}`
    line.innerHTML = `<span class="timestamp">${time}</span>${message}`
    output9.appendChild(line)
    output9.scrollTop = output9.scrollHeight
}

// Tab switching
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'))
        tab.classList.add('active')
        currentMethod = tab.dataset.action

        // Show/hide title input
        ex9Title.style.display = (currentMethod === 'post' || currentMethod === 'put')
            ? 'block' : 'none'
    })
})

ex9Btn.addEventListener('click', () => {
    output9.innerHTML = ''

    const id = ex9Id.value || 1
    const title = ex9Title.value || 'Updated Title'
    const baseUrl = 'https://jsonplaceholder.typicode.com/posts'

    let url = baseUrl
    let options = {}

    switch (currentMethod) {
        case 'get':
            url = `${baseUrl}/${id}`
            log9(`GET ${url}`, 'info')
            break

        case 'post':
            options = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, body: 'Content', userId: 1 })
            }
            log9(`POST ${url}`, 'info')
            break

        case 'put':
            url = `${baseUrl}/${id}`
            options = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: parseInt(id), title, body: 'Updated', userId: 1 })
            }
            log9(`PUT ${url}`, 'info')
            break

        case 'delete':
            url = `${baseUrl}/${id}`
            options = { method: 'DELETE' }
            log9(`DELETE ${url}`, 'info')
            break
    }

    fetch(url, options)
        .then(response => {
            log9(`Status: ${response.status}`, response.ok ? 'success' : 'error')
            return response.json()
        })
        .then(data => {
            log9(`Response: ${JSON.stringify(data, null, 2)}`, 'success')
        })
        .catch(error => {
            log9(`Error: ${error.message}`, 'error')
        })
})



// Exercise 10: Pagination
// Paginated data fetch

const output10 = document.getElementById('output-10')
const ex10Posts = document.getElementById('ex10-posts')
const ex10Page = document.getElementById('ex10-page')
const ex10Prev = document.getElementById('ex10-prev')
const ex10Next = document.getElementById('ex10-next')

let currentPage = 1
const postsPerPage = 6
const totalPosts = 100

function log10(message, type = 'info') {
    output10.innerHTML = `<div class="output-line ${type}">${message}</div>`
}

function fetchPosts(page) {
    ex10Posts.innerHTML = '<div class="text-center"><span class="spinner"></span> Loading...</div>'

    const start = (page - 1) * postsPerPage + 1

    fetch(`https://jsonplaceholder.typicode.com/posts?_start=${start - 1}&_limit=${postsPerPage}`)
        .then(response => response.json())
        .then(posts => {
            ex10Posts.innerHTML = ''

            posts.forEach(post => {
                const card = document.createElement('div')
                card.className = 'card'
                card.innerHTML = `
                    <div class="card-title">${post.title.substring(0, 30)}...</div>
                    <div class="card-body">${post.body.substring(0, 80)}...</div>
                    <div class="card-meta">Post #${post.id}</div>
                `
                ex10Posts.appendChild(card)
            })

            log10(`Showing posts ${start}-${start + posts.length - 1} of ${totalPosts}`, 'success')
        })
        .catch(error => {
            log10(`Error: ${error.message}`, 'error')
        })
}

function updatePagination() {
    const totalPages = Math.ceil(totalPosts / postsPerPage)

    ex10Page.textContent = `Page ${currentPage} of ${totalPages}`
    ex10Prev.disabled = currentPage === 1
    ex10Next.disabled = currentPage === totalPages
}

ex10Prev.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--
        updatePagination()
        fetchPosts(currentPage)
    }
})

ex10Next.addEventListener('click', () => {
    const totalPages = Math.ceil(totalPosts / postsPerPage)
    if (currentPage < totalPages) {
        currentPage++
        updatePagination()
        fetchPosts(currentPage)
    }
})

// Initial load
fetchPosts(currentPage)
updatePagination()









