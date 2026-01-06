// Exercise 1: Execution Order Prediction
// Зорилго: Sync vs Async execution order ойлгох

const output1 = document.getElementById('output-1')
const ex1Btn = document.getElementById('ex1-btn')
const ex1Clear = document.getElementById('ex1-clear')

function log1(message) {
    const time = new Date().toLocaleTimeString()
    const line = document.createElement('div')
    line.className = 'output-line'
    line.innerHTML = `<span class="timestamp">${time}</span>${message}`
    output1.appendChild(line)
}

ex1Btn.addEventListener('click', () => {
    output1.innerHTML = ''

    log1('1. Start')

    setTimeout(() => {
        log1('2. setTimeout 0ms')
    }, 0)

    setTimeout(() => {
        log1('3. setTimeout 1000ms')
    }, 1000)

    log1('4. Middle')

    setTimeout(() => {
        log1('5. setTimeout 500ms')
    }, 500)

    log1('6. End')
})

ex1Clear.addEventListener('click', () => {
    output1.innerHTML = ''
})



// Exercise 2: Delayed Message
// Зорилго: setTimeout callback ашиглах

const output2 = document.getElementById('output-2')
const ex2Message = document.getElementById('ex2-message')
const ex2Delay = document.getElementById('ex2-delay')
const ex2Btn = document.getElementById('ex2-btn')

function log2(message, type = 'info') {
    const time = new Date().toLocaleTimeString()
    const line = document.createElement('div')
    line.className = 'output-line'
    line.innerHTML = `<span class="timestamp">${time}</span>${message}`
    output2.appendChild(line)
    output2.scrollTop = output2.scrollHeight
}

ex2Btn.addEventListener('click', () => {
    const message = ex2Message.value || 'Hello!'
    const delay = parseInt(ex2Delay.value) || 2000

    log2(`📤 Sending "${message}" in ${delay}ms...`)

    setTimeout(function () {
        log2(`📩 Message received: "${message}"`)
    }, delay)
})


// Exercise 3: Countdown Timer
// Зорилго: setInterval, clearInterval ашиглах

const timerDisplay = document.getElementById('timer-display')
const ex3Seconds = document.getElementById('ex3-seconds')
const ex3Start = document.getElementById('ex3-start')
const ex3Stop = document.getElementById('ex3-stop')
const ex3Reset = document.getElementById('ex3-reset')

let countdownInterval = null
let currentSeconds = 10

function updateDisplay() {
    timerDisplay.textContent = currentSeconds
}

ex3Start.addEventListener('click', () => {
    // Өмнөх interval байвал цэвэрлэх
    if (countdownInterval) {
        clearInterval(countdownInterval)
    }

    currentSeconds = parseInt(ex3Seconds.value) || 10
    updateDisplay()

    countdownInterval = setInterval(function () {
        currentSeconds--
        updateDisplay()

        if (currentSeconds <= 0) {
            clearInterval(countdownInterval)
            timerDisplay.textContent = '🎉 Done!'
        }
    }, 1000)
})

ex3Stop.addEventListener('click', () => {
    if (countdownInterval) {
        clearInterval(countdownInterval)
        countdownInterval = null
    }
})

ex3Reset.addEventListener('click', () => {
    if (countdownInterval) {
        clearInterval(countdownInterval)
        countdownInterval = null
    }
    currentSeconds = parseInt(ex3Seconds.value) || 10
    updateDisplay()
})


// Exercise 4: Progress Bar
// Зорилго: setInterval-р animation хийх


const progressFill = document.getElementById('progress-fill')
const progressText = document.getElementById('progress-text')
const ex4Start = document.getElementById('ex4-start')
const ex4Reset = document.getElementById('ex4-reset')

let progressInterval = null
let progress = 0

ex4Start.addEventListener('click', () => {
    if (progressInterval) return  // Already running

    progress = 0

    progressInterval = setInterval(() => {
        progress++

        progressFill.style.width = progress + '%'
        progressText.textContent = progress

        if (progress >= 100) {
            clearInterval(progressInterval)
            progressInterval = null
        }
    }, 50)  // 50ms * 100 = 5 seconds total
})

ex4Reset.addEventListener('click', () => {
    if (progressInterval) {
        clearInterval(progressInterval)
        progressInterval = null
    }
    progress = 0
    progressFill.style.width = '0%'
    progressText.textContent = '0'
})


// Exercise 5: Traffic Light Simulation
// Зорилго: Дараалсан setTimeout ашиглах

const lights = {
    red: document.querySelector('.light.red'),
    yellow: document.querySelector('.light.yellow'),
    green: document.querySelector('.light.green')
}

const ex5Start = document.getElementById('ex5-start')
const ex5Stop = document.getElementById('ex5-stop')

let trafficTimeout = null
let isRunning = false

function setLight(color) {
    // Бүх гэрэл унтраах
    Object.values(lights).forEach(light => {
        light.classList.remove('active')
    })
    // Зөвхөн тухайн өнгө асаах
    lights[color].classList.add('active')
}

function trafficCycle() {
    if (!isRunning) return

    // Red - 3 seconds
    setLight('red')

    trafficTimeout = setTimeout(() => {
        if (!isRunning) return

        // Yellow - 1 second
        setLight('yellow')

        trafficTimeout = setTimeout(() => {
            if (!isRunning) return

            // Green - 3 seconds
            setLight('green')

            trafficTimeout = setTimeout(trafficCycle, 3000)
        }, 1000)
    }, 3000)
}

ex5Start.addEventListener('click', () => {
    if (isRunning) return
    isRunning = true
    trafficCycle()
})

ex5Stop.addEventListener('click', () => {
    isRunning = false
    if (trafficTimeout) {
        clearTimeout(trafficTimeout)
    }
    // Бүх гэрэл унтраах
    Object.values(lights).forEach(light => {
        light.classList.remove('active')
    })
})


// Exercise 6: Debounce Function
// Зорилго: Debounce pattern ойлгох

const ex6Input = document.getElementById('ex6-input')
const output6 = document.getElementById('output-6')

let debounceTimeout = null

function log6(message) {
    const time = new Date().toLocaleTimeString()
    const line = document.createElement('div')
    line.className = 'output-line'
    line.innerHTML = `<span class="timestamp">${time}</span>${message}`
    output6.appendChild(line)
    output6.scrollTop = output6.scrollHeight
}

function search(query) {
    log6(`🔍 Searching for: "${query}"`)
}

ex6Input.addEventListener('input', (e) => {
    const query = e.target.value

    // Өмнөх timeout-г цуцлах
    if (debounceTimeout) {
        clearTimeout(debounceTimeout)
    }

    log6(`⏳ Typing: "${query}"`)

    // Шинэ timeout тохируулах
    debounceTimeout = setTimeout(function () {
        if (query.trim()) {
            search(query)
        }
    }, 500)
})


// Exercise 7: Sequential Callbacks
// Зорилго: Callback дараалал

const output7 = document.getElementById('output-7')
const ex7Btn = document.getElementById('ex7-btn')
const ex7Spinner = document.getElementById('ex7-spinner')

function log7(message) {
    const time = new Date().toLocaleTimeString()
    const line = document.createElement('div')
    line.className = 'output-line'
    line.innerHTML = `<span class="timestamp">${time}</span>${message}`
    output7.appendChild(line)
}

// Async operations with callbacks
function step1(callback) {
    log7('Step 1: Starting...')
    setTimeout(() => {
        log7('Step 1: ✓ Complete')
        callback()
    }, 1000)
}

function step2(callback) {
    log7('Step 2: Processing...')
    setTimeout(() => {
        log7('Step 2: ✓ Complete')
        callback()
    }, 1500)
}

function step3(callback) {
    log7('Step 3: Finishing...')
    setTimeout(() => {
        log7('Step 3: ✓ Complete')
        callback()
    }, 1000)
}

ex7Btn.addEventListener('click', () => {
    output7.innerHTML = ''
    ex7Spinner.classList.add('show')

    // Sequential execution
    step1(function () {
        step2(function () {
            step3(function () {
                log7('🎉 All steps completed!')
                ex7Spinner.classList.remove('show')
            })
        })
    })
})


// Exercise 8: Error-First Callback
// Зорилго: Error handling callback pattern

const output8 = document.getElementById('output-8')
const ex8Btn = document.getElementById('ex8-btn')

function log8(message, isError = false) {
    const line = document.createElement('div')
    line.className = 'output-line'
    line.style.color = isError ? '#ef4444' : '#10b981'
    line.textContent = message
    output8.appendChild(line)
}

// Simulated async operation with error-first callback
function fetchData(callback) {
    log8('Fetching data...')

    setTimeout(() => {
        // Random: 50% success, 50% error
        const success = Math.random() > 0.5

        if (success) {
            // callback(error, data)
            callback(null, { id: 1, name: 'John Doe' })
        } else {
            callback(new Error('Network error!'), null)
        }
    }, 1000)
}

ex8Btn.addEventListener('click', () => {
    output8.innerHTML = ''

    fetchData(function (error, data) {
        if (error) {
            log8('❌ Error: ' + error.message, true)
            return
        }

        log8('✅ Success!')
        log8(`Data: ${JSON.stringify(data)}`)
    })
})


// Exercise 9: Multiple Timers
// Зорилго: Олон timer удирдах
const output9 = document.getElementById('output-9')
const ex9Btn = document.getElementById('ex9-btn')
const ex9Stop = document.getElementById('ex9-stop')

const timerIds = []

function log9(message) {
    const time = new Date().toLocaleTimeString()
    const line = document.createElement('div')
    line.className = 'output-line'
    line.innerHTML = `<span class="timestamp">${time}</span>${message}`
    output9.appendChild(line)
    output9.scrollTop = output9.scrollHeight
}

ex9Btn.addEventListener('click', () => {
    output9.innerHTML = ''

    // Timer 1: Every 1 second
    const timer1 = setInterval(() => {
        log9('⏰ Timer 1 (1s interval)')
    }, 1000)
    timerIds.push(timer1)

    // Timer 2: Every 2 seconds
    const timer2 = setInterval(function () {
        log9('🕐 Timer 2 (2s interval)')
    }, 2000)
    timerIds.push(timer2)

    // Timer 3: One-time after 3 seconds
    const timer3 = setTimeout(() => {
        log9('⌛ Timer 3 (one-time 3s)')
    }, 3000)
    timerIds.push(timer3)

    log9('🚀 All timers started!')
})

ex9Stop.addEventListener('click', () => {
    timerIds.forEach(id => {
        clearInterval(id)
        clearTimeout(id)
    })
    timerIds.length = 0  // Clear array
    log9('🛑 All timers stopped!')
})


// Exercise 10: Event Loop Quiz
// Зорилго: Event Loop ойлголтыг шалгах

const output10 = document.getElementById('output-10')
const ex10Btn = document.getElementById('ex10-btn')
const ex10Run = document.getElementById('ex10-run')

function log10(message) {
    const line = document.createElement('div')
    line.className = 'output-line'
    line.textContent = message
    output10.appendChild(line)
}

ex10Btn.addEventListener('click', () => {
    output10.innerHTML = ''
    log10('Expected output order:')
    log10('1. A (sync)')
    log10('2. C (sync)')
    log10('3. E (sync)')
    log10('4. B (setTimeout 0ms - goes to queue)')
    log10('5. D (setTimeout 100ms)')
})

ex10Run.addEventListener('click', () => {
    output10.innerHTML = ''
    log10('Running code...')
    log10('')

    log10('A')

    setTimeout(() => log10('B'), 0)

    log10('C')

    setTimeout(() => log10('D'), 100)

    log10('E')
})










