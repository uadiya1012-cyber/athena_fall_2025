// Exercise 1: Create Basic Promise
// Зорилго: Promise үүсгэх, then/catch ашиглах

const output1 = document.getElementById('output-1')
const ex1Btn = document.getElementById('ex1-btn')
const ex1State = document.getElementById('ex1-state')

function log1(message, type = 'info') {
    const time = new Date().toLocaleTimeString()
    const line = document.createElement('div')
    line.className = `output-line ${type}`
    line.innerHTML = `<span class="timestamp">${time}</span>${message}`
    output1.appendChild(line)
    output1.scrollTop = output1.scrollHeight
}

function updateState(state) {
    ex1State.className = `promise-state ${state}`
    const icons = { pending: '⏳', fulfilled: '✅', rejected: '❌' }
    const labels = { pending: 'Pending', fulfilled: 'Fulfilled', rejected: 'Rejected' }
    ex1State.textContent = `${icons[state]} ${labels[state]}`
}

ex1Btn.addEventListener('click', () => {
    output1.innerHTML = ''
    updateState('pending')
    log1('Creating promise...', 'info')

    const promise = new Promise(function (resolve, reject) {
        log1('Executor running... (2 second delay)', 'info')

        setTimeout(function () {
            const success = Math.random() > 0.5

            if (success) {
                resolve({ message: 'Operation successful!', value: 42 })
            } else {
                reject(new Error('Random failure occurred'))
            }
        }, 2000)
    })

    promise
        .then(function (result) {
            updateState('fulfilled')
            log1(`Success: ${JSON.stringify(result)}`, 'success')
        })
        .catch(function (error) {
            updateState('rejected')
            log1(`Error: ${error.message}`, 'error')
        })
})


// Exercise 2: Promise Chain
// Зорилго: Promise chaining, value passing

const output2 = document.getElementById('output-2')
const ex2Input = document.getElementById('ex2-input')
const ex2Btn = document.getElementById('ex2-btn')

function log2(message, type = 'info') {
    const time = new Date().toLocaleTimeString()
    const line = document.createElement('div')
    line.className = `output-line ${type}`
    line.innerHTML = `<span class="timestamp">${time}</span>${message}`
    output2.appendChild(line)
    output2.scrollTop = output2.scrollHeight
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

ex2Btn.addEventListener('click', () => {
    output2.innerHTML = ''
    const startValue = parseInt(ex2Input.value) || 5

    log2(`Starting with: ${startValue}`, 'info')

    Promise.resolve(startValue)
        .then(value => {
            log2(`Step 1: ${value} × 2 = ${value * 2}`, 'success')
            return delay(500).then(() => value * 2)
        })
        .then((value) => {
            log2(`Step 2: ${value} + 10 = ${value + 10}`, 'success')
            return delay(500).then(() => value + 10)
        })
        .then(value => {
            log2(`Step 3: ${value} ÷ 2 = ${value / 2}`, 'success')
            return delay(500).then(() => value / 2)
        })
        .then(value => {
            log2(`Step 4: ${value}² = ${value * value}`, 'success')
            return delay(500).then(() => value * value)
        })
        .then(finalValue => {
            log2(`Final result: ${finalValue}`, 'success')
        })
})


// Exercise 3: Error Handling
// Зорилго: Error propagation, recovery

const output3 = document.getElementById('output-3')
const ex3Success = document.getElementById('ex3-success')
const ex3Fail = document.getElementById('ex3-fail')
const ex3Recover = document.getElementById('ex3-recover')

function log3(message, type = 'info') {
    const time = new Date().toLocaleTimeString()
    const line = document.createElement('div')
    line.className = `output-line ${type}`
    line.innerHTML = `<span class="timestamp">${time}</span>${message}`
    output3.appendChild(line)
    output3.scrollTop = output3.scrollHeight
}

function step1() {
    log3('Step 1: Starting...', 'info')
    return new Promise(resolve => {
        setTimeout(() => {
            log3('Step 1: ✓ Complete', 'success')
            resolve('Step 1 data')
        }, 500)
    })
}

function step2(failAtStep2 = false) {
    log3('Step 2: Processing...', 'info')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (failAtStep2) {
                log3('Step 2: ✗ Failed!', 'error')
                reject(new Error('Step 2 failed'))
            } else {
                log3('Step 2: ✓ Complete', 'success')
                resolve('Step 2 data')
            }
        }, 500)
    })
}

function step3() {
    log3('Step 3: Finishing...', 'info')
    return new Promise(resolve => {
        setTimeout(() => {
            log3('Step 3: ✓ Complete', 'success')
            resolve('Step 3 data')
        }, 500)
    })
}

// Success path
ex3Success.addEventListener('click', () => {
    output3.innerHTML = ''

    step1()
        .then(() => step2(false))
        .then(() => step3())
        .then(() => {
            log3('🎉 All steps completed!', 'success')
        })
        .catch(error => {
            log3(`Error: ${error.message}`, 'error')
        })
})

// Fail path
ex3Fail.addEventListener('click', () => {
    output3.innerHTML = ''

    step1()
        .then(() => step2(true))  // Will fail
        .then(() => step3())      // Skipped!
        .then(() => {
            log3('🎉 All steps completed!', 'success')  // Skipped!
        })
        .catch((error) => {
            log3(`Caught error: ${error.message}`, 'error')
        })
})

// Recovery path
ex3Recover.addEventListener('click', () => {
    output3.innerHTML = ''

    step1()
        .then(() => step2(true))  // Will fail
        .catch(error => {
            log3(`Caught: ${error.message}`, 'warning')
            log3('Recovering with default data...', 'warning')
            return 'Recovered data'  // Recovery!
        })
        .then((data) => {
            log3(`Continuing with: ${data}`, 'info')
            return step3()
        })
        .then(() => {
            log3('🎉 Completed with recovery!', 'success')
        })
})


// Exercise 4: Promise.all - Parallel Fetch
// Зорилго: Promise.all() ашиглан parallel requests

const output4 = document.getElementById('output-4')
const ex4Cards = document.getElementById('ex4-cards')
const ex4Progress = document.getElementById('ex4-progress')
const ex4Btn = document.getElementById('ex4-btn')

function log4(message, type = 'info') {
    const time = new Date().toLocaleTimeString()
    const line = document.createElement('div')
    line.className = `output-line ${type}`
    line.innerHTML = `<span class="timestamp">${time}</span>${message}`
    output4.appendChild(line)
    output4.scrollTop = output4.scrollHeight
}

function fetchUser(id) {
    return new Promise((resolve) => {
        const delay = 500 + Math.random() * 1500  // 500-2000ms
        log4(`Fetching user ${id}...`, 'info')

        setTimeout(() => {
            log4(`User ${id} loaded!`, 'success')
            resolve({
                id,
                name: `User ${id}`,
                email: `user${id}@example.com`
            })
        }, delay)
    })
}

ex4Btn.addEventListener('click', () => {
    output4.innerHTML = ''
    ex4Cards.innerHTML = ''
    ex4Progress.style.width = '0%'

    const startTime = Date.now()
    log4('Starting parallel fetch...', 'info')

    const userIds = [1, 2, 3, 4]
    const promises = userIds.map(id => fetchUser(id))

    // Simulate progress
    let progress = 0
    const progressInterval = setInterval(() => {
        progress += 5
        if (progress <= 90) {
            ex4Progress.style.width = progress + '%'
        }
    }, 100)

    Promise.resolve(promises)
        .then((users) => {
            clearInterval(progressInterval)
            ex4Progress.style.width = '100%'

            const elapsed = Date.now() - startTime
            log4(`All users loaded in ${elapsed}ms`, 'success')

            // Display cards
            users.forEach(user => {
                const card = document.createElement('div')
                card.className = 'card'
                card.innerHTML = `
                    <div class="card-title">👤 ${user.name}</div>
                    <div class="card-value">${user.email}</div>
                `
                ex4Cards.appendChild(card)
            })
        })
        .catch(error => {
            clearInterval(progressInterval)
            log4(`Error: ${error.message}`, 'error')
        })
})


// Exercise 5: Promise.race - Timeout
// Зорилго: Promise.race() ашиглан timeout хэрэгжүүлэх

const output5 = document.getElementById('output-5')
const ex5Timeout = document.getElementById('ex5-timeout')
const ex5Btn = document.getElementById('ex5-btn')

function log5(message, type = 'info') {
    const time = new Date().toLocaleTimeString()
    const line = document.createElement('div')
    line.className = `output-line ${type}`
    line.innerHTML = `<span class="timestamp">${time}</span>${message}`
    output5.appendChild(line)
    output5.scrollTop = output5.scrollHeight
}

function slowApiCall() {
    const delay = 1000 + Math.random() * 3000  // 1-4 seconds
    log5(`API call started (will take ~${Math.round(delay)}ms)`, 'info')

    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ data: 'API response data' })
        }, delay)
    })
}

function timeout(ms) {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error(`Timeout after ${ms}ms`))
        }, ms)
    })
}

ex5Btn.addEventListener('click', () => {
    output5.innerHTML = ''

    const timeoutMs = parseInt(ex5Timeout.value) || 2000
    log5(`Setting timeout: ${timeoutMs}ms`, 'info')

    Promise.race(([
        slowApiCall(),
        timeout(timeoutMs)
    ]))
        .then(result => {
            log5(`✓ API responded: ${JSON.stringify(result)}`, 'success')
        })
        .catch(error => {
            log5(`✗ ${error.message}`, 'error')
        })
})


// Exercise 6: Promise.allSettled
// Зорилго: Promise.allSettled() - бүх үр дүнг авах

const output6 = document.getElementById('output-6')
const ex6Btn = document.getElementById('ex6-btn')

function log6(message, type = 'info') {
    const time = new Date().toLocaleTimeString()
    const line = document.createElement('div')
    line.className = `output-line ${type}`
    line.innerHTML = `<span class="timestamp">${time}</span>${message}`
    output6.appendChild(line)
    output6.scrollTop = output6.scrollHeight
}

function fetchData(id) {
    return new Promise((resolve, reject) => {
        const delay = 500 + Math.random() * 1000
        const success = Math.random() > 0.4  // 60% success rate

        setTimeout(() => {
            if (success) {
                resolve({ id, value: `Data for ${id}` })
            } else {
                reject(new Error(`Failed to fetch ${id}`))
            }
        }, delay)
    })
}

ex6Btn.addEventListener('click', () => {
    output6.innerHTML = ''
    log6('Fetching 5 items (some may fail)...', 'info')

    const promises = [1, 2, 3, 4, 5].map(id => fetchData(id))

    Promise.allSettled(promises)
        .then(results => {
            log6('All requests settled!', 'info')

            results.forEach((result, index) => {
                if (result.status === 'fulfilled') {
                    log6(`Item ${index + 1}: ✓ ${JSON.stringify(result.value)}`, 'success')
                } else {
                    log6(`Item ${index + 1}: ✗ ${result.reason.message}`, 'error')
                }
            })

            // Summary
            const fulfilled = results.filter(r => r.status === 'fulfilled').length
            const rejected = results.filter(r => r.status === 'rejected').length

            log6(`Summary: ${fulfilled} succeeded, ${rejected} failed`, 'warning')
        })
})


// Exercise 7: Sequential vs Parallel
// Зорилго: Хугацааны ялгааг харуулах

const output7 = document.getElementById('output-7')
const ex7Sequential = document.getElementById('ex7-sequential')
const ex7Parallel = document.getElementById('ex7-parallel')

function log7(message, type = 'info') {
    const time = new Date().toLocaleTimeString()
    const line = document.createElement('div')
    line.className = `output-line ${type}`
    line.innerHTML = `<span class="timestamp">${time}</span>${message}`
    output7.appendChild(line)
    output7.scrollTop = output7.scrollHeight
}

function fetchItem(id) {
    return new Promise(resolve => {
        const delay = 1000  // 1 second each
        setTimeout(() => {
            resolve(`Item ${id}`)
        }, delay)
    })
}

// Sequential
ex7Sequential.addEventListener('click', () => {
    output7.innerHTML = ''
    const startTime = Date.now()
    log7('Starting SEQUENTIAL fetch...', 'info')

    fetchItem(1)
        .then(item1 => {
            log7(`Got: ${item1}`, 'success')
            return fetchItem(2)
        })
        .then(item2 => {
            log7(`Got: ${item2}`, 'success')
            return fetchItem(3)
        })
        .then(item3 => {
            log7(`Got: ${item3}`, 'success')

            const elapsed = Date.now() - startTime
            log7(`Total time: ${elapsed}ms (expected ~3000ms)`, 'warning')
        })
})

// Parallel
ex7Parallel.addEventListener('click', () => {
    output7.innerHTML = ''
    const startTime = Date.now()
    log7('Starting PARALLEL fetch...', 'info')

    Promise.all([
        fetchItem(1),
        fetchItem(2),
        fetchItem(3)
    ])
        .then((items) => {
            items.forEach(item => {
                log7(`Got: ${item}`, 'success')
            })

            const elapsed = Date.now() - startTime
            log7(`Total time: ${elapsed}ms (expected ~1000ms)`, 'warning')
            log7('Parallel is ~3x faster!', 'success')
        })
})


// Exercise 8: Retry Pattern
// Зорилго: Promise-based retry logic

const output8 = document.getElementById('output-8')
const ex8Btn = document.getElementById('ex8-btn')

function log8(message, type = 'info') {
    const time = new Date().toLocaleTimeString()
    const line = document.createElement('div')
    line.className = `output-line ${type}`
    line.innerHTML = `<span class="timestamp">${time}</span>${message}`
    output8.appendChild(line)
    output8.scrollTop = output8.scrollHeight
}

function unreliableApi() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.7  // 30% success rate
            if (success) {
                resolve({ data: 'Success!' })
            } else {
                reject(new Error('API failed'))
            }
        }, 500)
    })
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

function fetchWithRetry(maxRetries, currentAttempt = 1) {
    log8(`Attempt ${currentAttempt}/${maxRetries}...`, 'info')

    return unreliableApi()
        .then(result => {
            log8(`✓ Success on attempt ${currentAttempt}!`, 'success')
            return result
        })
        .catch(error => {
            log8(`✗ Attempt ${currentAttempt} failed`, 'error')

            if (currentAttempt < maxRetries) {
                log8(`Retrying in 1 second...`, 'warning')
                return delay(1000).then(() => {
                    return fetchWithRetry(maxRetries, currentAttempt + 1)
                })
            } else {
                throw new Error(`All ${maxRetries} attempts failed`)
            }
        })
}

ex8Btn.addEventListener('click', () => {
    output8.innerHTML = ''
    ex8Btn.disabled = true

    fetchWithRetry(3)
        .then(result => {
            log8(`Final result: ${JSON.stringify(result)}`, 'success')
        })
        .catch(error => {
            log8(`${error.message}`, 'error')
        })
        .finally(() => {
            ex8Btn.disabled = false
        })
})


// Exercise 9: Promise Queue
// Зорилго: Tasks-г нэг нэгээр боловсруулах
const output9 = document.getElementById('output-9')
const ex9Add = document.getElementById('ex9-add')
const ex9Start = document.getElementById('ex9-start')
const ex9Clear = document.getElementById('ex9-clear')

let taskQueue = []
let taskCount = 0

function log9(message, type = 'info') {
    const time = new Date().toLocaleTimeString()
    const line = document.createElement('div')
    line.className = `output-line ${type}`
    line.innerHTML = `<span class="timestamp">${time}</span>${message}`
    output9.appendChild(line)
    output9.scrollTop = output9.scrollHeight
}

function processTask(task) {
    return new Promise(resolve => {
        log9(`Processing: ${task.name}...`, 'info')
        setTimeout(() => {
            log9(`✓ Completed: ${task.name}`, 'success')
            resolve(task)
        }, task.duration)
    })
}

ex9Add.addEventListener('click', () => {
    taskCount++
    const task = {
        id: taskCount,
        name: `Task ${taskCount}`,
        duration: 500 + Math.random() * 1000
    }
    taskQueue.push(task)
    log9(`Added: ${task.name} (${Math.round(task.duration)}ms)`, 'warning')
    log9(`Queue size: ${taskQueue.length}`, 'info')
})

ex9Start.addEventListener('click', () => {
    if (taskQueue.length === 0) {
        log9('Queue is empty!', 'error')
        return
    }

    const tasksToProcess = [...taskQueue]
    taskQueue = []

    log9(`Processing ${tasksToProcess.length} tasks...`, 'info')

    // Sequential processing using reduce
    tasksToProcess.reduce((promise, task) => {
        return promise.then(() => processTask(task))
    }, Promise.resolve())
        .then(() => {
            log9('🎉 All tasks completed!', 'success')
        })
})

ex9Clear.addEventListener('click', () => {
    taskQueue = []
    output9.innerHTML = ''
    log9('Queue cleared', 'info')
})


// Exercise 10: User Profile Loader
// Зорилго: Real-world parallel loading

const output10 = document.getElementById('output-10')
const ex10Profile = document.getElementById('ex10-profile')
const ex10UserId = document.getElementById('ex10-userId')
const ex10Btn = document.getElementById('ex10-btn')

function log10(message, type = 'info') {
    const time = new Date().toLocaleTimeString()
    const line = document.createElement('div')
    line.className = `output-line ${type}`
    line.innerHTML = `<span class="timestamp">${time}</span>${message}`
    output10.appendChild(line)
    output10.scrollTop = output10.scrollHeight
}

function fetchUser(id) {
    return new Promise((resolve, reject) => {
        if (id < 1) {
            reject(new Error('Invalid user ID'))
            return
        }
        setTimeout(() => {
            resolve({ id, name: `User ${id}`, email: `user${id}@example.com` })
        }, 800)
    })
}

function fetchPosts(userId) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                { id: 1, title: 'First Post' },
                { id: 2, title: 'Second Post' },
                { id: 3, title: 'Third Post' }
            ])
        }, 1000)
    })
}

function fetchFollowers(userId) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ count: Math.floor(Math.random() * 1000) + 100 })
        }, 600)
    })
}

ex10Btn.addEventListener('click', () => {
    output10.innerHTML = ''
    ex10Profile.innerHTML = ''

    const userId = parseInt(ex10UserId.value) || 1
    log10(`Loading profile for user ${userId}...`, 'info')

    const startTime = Date.now()

    Promise.all([
        fetchUser(userId),
        fetchPosts(userId),
        fetchFollowers(userId)
    ])
        .then(([user, posts, followers]) => {
            const elapsed = Date.now() - startTime
            log10(`Profile loaded in ${elapsed}ms`, 'success')

            // User card
            const userCard = document.createElement('div')
            userCard.className = 'card'
            userCard.innerHTML = `
            <div class="card-title">👤 User</div>
            <div class="card-value">${user.name}</div>
        `

            // Posts card
            const postsCard = document.createElement('div')
            postsCard.className = 'card'
            postsCard.innerHTML = `
            <div class="card-title">📝 Posts</div>
            <div class="card-value">${posts.length}</div>
        `

            // Followers card
            const followersCard = document.createElement('div')
            followersCard.className = 'card'
            followersCard.innerHTML = `
            <div class="card-title">👥 Followers</div>
            <div class="card-value">${followers.count}</div>
        `

            ex10Profile.appendChild(userCard)
            ex10Profile.appendChild(postsCard)
            ex10Profile.appendChild(followersCard)
        })
        .catch(error => {
            log10(`Error: ${error.message}`, 'error')
        })
})









