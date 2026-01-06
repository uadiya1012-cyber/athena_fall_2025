// Exercise 1: Advanced Countdown Timer
// Зорилго: setinterval, clearinterval, pause/resume

const timer1Display = document.getElementById('timer-1')
const timer1Input = document.getElementById('timer-1-input')
const timer1Start = document.getElementById('timer-1-start')
const timer1Pause = document.getElementById('timer-1-pause')
const timer1Reset = document.getElementById('timer-1-reset')
const timer1Status = document.getElementById('timer-1-status')

let timer1Interval = null
let timer1Remaining = 10
let timer1IsRunning = false

function updateTimer1Display() {
    timer1Display.textContent = timer1Remaining

    // Remove all state classes
    timer1Display.classList.remove('warning', 'danger')

    // Add appropriate class
    if (timer1Remaining <= 0) {
        timer1Display.classList.add('danger')
        timer1Display.textContent = '🎉 Done!'
    } else if (timer1Remaining <= 3) {
        timer1Display.classList.add('warning')
    }
}

function updateTimer1Status(status) {
    timer1Status.className = `status ${status}`
    timer1Status.innerHTML = `
        <span class="status-dot"></span>
        ${status === 'running' ? 'Running' : 'Idle'}
    `
}

timer1Start.addEventListener('click', () => {
    if (timer1IsRunning) return

    if (timer1Remaining <= 0) {
        timer1Remaining = parseInt(timer1Input.value) || 10
    }

    timer1IsRunning = true
    updateTimer1Status('running')
    timer1Start.disabled = true
    timer1Pause.disabled = false

    timer1Interval = setInterval(function () {
        timer1Remaining--
        updateTimer1Display()

        if (timer1Remaining <= 0) {
            clearInterval(timer1Interval)
            timer1IsRunning = false
            updateTimer1Status('idle')
            timer1Start.disabled = false
            timer1Pause.disabled = true
        }
    }, 1000)
})

timer1Pause.addEventListener('click', () => {
    if (!timer1IsRunning) return

    clearInterval(timer1Interval)
    timer1IsRunning = false
    updateTimer1Status('idle')
    timer1Start.disabled = false
    timer1Pause.disabled = true
    timer1Start.textContent = '▶ Resume'
})

timer1Reset.addEventListener('click', () => {
    clearInterval(timer1Interval)
    timer1IsRunning = false
    timer1Remaining = parseInt(timer1Input.value) || 10
    updateTimer1Display()
    updateTimer1Status('idle')
    timer1Start.disabled = false
    timer1Pause.disabled = true
    timer1Start.textContent = '▶ Start'
})

// Initialize
updateTimer1Display()



// Exercise 2: Stopwatch with Laps
// Зорилго: setinterval ашиглан stopwatch, lap recording

const stopwatchDisplay = document.getElementById('stopwatch')
const stopwatchStart = document.getElementById('stopwatch-start')
const stopwatchLap = document.getElementById('stopwatch-lap')
const stopwatchReset = document.getElementById('stopwatch-reset')
const lapList = document.getElementById('lap-list')

let stopwatchInterval = null
let stopwatchTime = 0  // milliseconds
let stopwatchRunning = false
let lapCount = 0

function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000)
    const hours = Math.floor(totalSeconds / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = totalSeconds % 60

    return [hours, minutes, seconds]
        .map(n => n.toString().padStart(2, '0'))
        .join(':')
}

function updateStopwatchDisplay() {
    stopwatchDisplay.textContent = formatTime(stopwatchTime)
}

stopwatchStart.addEventListener('click', () => {
    if (stopwatchRunning) {
        // Stop
        clearInterval(stopwatchInterval)
        stopwatchRunning = false
        stopwatchStart.textContent = '▶ Start'
        stopwatchStart.className = 'btn btn-success'
        stopwatchLap.disabled = true
    } else {
        // Start
        stopwatchRunning = true
        stopwatchStart.textContent = '⏸ Stop'
        stopwatchStart.className = 'btn btn-danger'
        stopwatchLap.disabled = false

        stopwatchInterval = setInterval(() => {
            stopwatchTime += 10  // 10ms increments
            updateStopwatchDisplay()
        }, 10)
    }
})

stopwatchLap.addEventListener('click', () => {
    if (!stopwatchRunning) return

    lapCount++
    const lapItem = document.createElement('div')
    lapItem.className = 'lap-item'
    lapItem.innerHTML = `
        <span>Lap ${lapCount}</span>
        <span>${formatTime(stopwatchTime)}</span>
    `
    lapList.insertBefore(lapItem, lapList.firstChild)
})

stopwatchReset.addEventListener('click', () => {
    clearInterval(stopwatchInterval)
    stopwatchRunning = false
    stopwatchTime = 0
    lapCount = 0
    updateStopwatchDisplay()
    stopwatchStart.textContent = '▶ Start'
    stopwatchStart.className = 'btn btn-success'
    stopwatchLap.disabled = true
    lapList.innerHTML = ''
})

updateStopwatchDisplay()


// Exercise 3: Auto-Save(Debounce)
// Зорилго: Debounce pattern практик

const autosaveTextarea = document.getElementById('autosave-textarea')
const autosaveStatus = document.getElementById('autosave-status')
const autosaveTime = document.getElementById('autosave-time')
const output3 = document.getElementById('output-3')

let autosaveTimeout = null
let saveCount = 0

function log3(message) {
    const time = new Date().toLocaleTimeString()
    const line = document.createElement('div')
    line.className = 'output-line'
    line.innerHTML = `<span class="timestamp">${time}</span>${message}`
    output3.appendChild(line)
    output3.scrollTop = output3.scrollHeight
}

function saveDocument(content) {
    saveCount++
    const preview = content.substring(0, 50) + (content.length > 50 ? '...' : '')
    log3(`💾 Save #${saveCount}: "${preview}"`)
    autosaveStatus.textContent = '✅ Saved!'
    autosaveTime.textContent = `Last saved: ${new Date().toLocaleTimeString()}`

    // Reset status after 2s
    setTimeout(() => {
        autosaveStatus.textContent = '📝 Ready to edit'
    }, 2000)
}

autosaveTextarea.addEventListener('input', (e) => {
    // Show typing status
    autosaveStatus.textContent = '✏️ Typing...'

    // Clear previous timeout
    if (autosaveTimeout) {
        clearTimeout(autosaveTimeout)
    }

    // Set new timeout for auto-save
    autosaveTimeout = setTimeout(function () {
        const content = e.target.value.trim()
        if (content) {
            saveDocument(content)
        }
    }, 2000)  // 2 seconds
})



// Exercise 4: Live Search (Debounce)
// Зорилго: Search input debounce

const searchInput = document.getElementById('search-input')
const typingIndicator = document.getElementById('typing-indicator')
const output4 = document.getElementById('output-4')

let searchTimeout = null

// Simulated user database
const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com' },
    { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com' }
]

function log4(message, isResult = false) {
    if (!isResult) {
        const time = new Date().toLocaleTimeString()
        const line = document.createElement('div')
        line.className = 'output-line'
        line.innerHTML = `<span class="timestamp">${time}</span>${message}`
        output4.appendChild(line)
    } else {
        output4.innerHTML = message
    }
    output4.scrollTop = output4.scrollHeight
}

function searchUsers(query) {
    log4(`🔍 Searching for: "${query}"`)

    // Simulate API delay
    setTimeout(() => {
        const results = users.filter(user =>
            user.name.toLowerCase().includes(query.toLowerCase()) ||
            user.email.toLowerCase().includes(query.toLowerCase())
        )

        if (results.length > 0) {
            const html = results.map(user => `
                <div class="output-line">
                    👤 ${user.name} (${user.email})
                </div>
            `).join('')
            log4(html, true)
        } else {
            log4('No users found', true)
        }

        typingIndicator.classList.remove('show')
    }, 300)
}

searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim()

    // Show typing indicator
    if (query) {
        typingIndicator.classList.add('show')
    }

    // Clear previous timeout
    if (searchTimeout) {
        clearTimeout(searchTimeout)
    }

    if (!query) {
        typingIndicator.classList.remove('show')
        output4.innerHTML = '<div class="output-line">Type to search...</div>'
        return
    }

    // Debounced search
    searchTimeout = setTimeout(() => {
        searchUsers(query)
    }, 500)
})


// Exercise 5: Scroll Position (Throttle)
// Зорилго: Throttle pattern практик

const scrollContainer = document.getElementById('scroll-container')
const scrollPosition = document.getElementById('scroll-position')
const output5 = document.getElementById('output-5')

let scrollEventCount = 0
let throttledCount = 0

function log5(message) {
    const line = document.createElement('div')
    line.className = 'output-line'
    line.textContent = message
    output5.appendChild(line)

    // Keep only last 10 lines
    while (output5.children.length > 10) {
        output5.removeChild(output5.firstChild)
    }
    output5.scrollTop = output5.scrollHeight
}

// Throttle function
function throttle(func, limit) {
    let inThrottle = false

    return function (...args) {
        if (!inThrottle) {
            func.apply(this, args)
            inThrottle = true

            setTimeout(function () {
                inThrottle = false
            }, limit)
        }
    }
}

// Throttled scroll handler
const handleScroll = throttle(function (scrollTop) {
    throttledCount++
    scrollPosition.textContent = `Scroll: ${scrollTop}px`
    log5(`📍 Position: ${scrollTop}px (Event #${scrollEventCount}, Handled #${throttledCount})`)
}, 100)

scrollContainer.addEventListener('scroll', (e) => {
    scrollEventCount++
    handleScroll(e.target.scrollTop)
})



// Exercise 6: Notification Queue
// Зорилго: Sequential setTimeout, queue pattern

const notification = document.getElementById('notification')
const notifyBtn = document.getElementById('notify-btn')
const notifyManyBtn = document.getElementById('notify-many-btn')
const output6 = document.getElementById('output-6')

const notificationQueue = []
let isShowingNotification = false
let notificationCount = 0

function log6(message) {
    const time = new Date().toLocaleTimeString()
    const line = document.createElement('div')
    line.className = 'output-line'
    line.innerHTML = `<span class="timestamp">${time}</span>${message}`
    output6.appendChild(line)
    output6.scrollTop = output6.scrollHeight
}

function showNotification(message) {
    notification.textContent = message
    notification.classList.add('show')
    log6(`📢 Showing: "${message}"`)

    // Auto-hide after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show')
        log6(`🔕 Hidden: "${message}"`)

        isShowingNotification = false
        processQueue()
    }, 3000)
}

function processQueue() {
    if (isShowingNotification || notificationQueue.length === 0) {
        return
    }

    isShowingNotification = true
    const message = notificationQueue.splice(0, 1)[0]  // Remove first item
    showNotification(message)
}

function queueNotification(message) {
    notificationQueue.push(message)
    log6(`📥 Queued: "${message}" (Queue size: ${notificationQueue.length})`)
    processQueue()
}

notifyBtn.addEventListener('click', () => {
    notificationCount++
    queueNotification(`Notification #${notificationCount}`)
})

notifyManyBtn.addEventListener('click', () => {
    for (let i = 0; i < 3; i++) {
        notificationCount++
        queueNotification(`Notification #${notificationCount}`)
    }
})



// Exercise 7: File Upload Simulation
// Зорилго: Progress animation with setinterval 

const uploadProgress = document.getElementById('upload-progress')
const uploadStart = document.getElementById('upload-start')
const uploadCancel = document.getElementById('upload-cancel')
const uploadStatus = document.getElementById('upload-status')

let uploadInterval = null
let progress = 0

uploadStart.addEventListener('click', () => {
    if (uploadInterval) return

    progress = 0
    uploadStart.disabled = true
    uploadCancel.disabled = false
    uploadStatus.textContent = '📤 Uploading...'

    uploadInterval = setInterval(() => {
        // Random increment (1-5%)
        progress += Math.floor(Math.random() * 5) + 1

        if (progress >= 100) {
            progress = 100
            clearInterval(uploadInterval)
            uploadInterval = null
            uploadStart.disabled = false
            uploadCancel.disabled = true
            uploadStatus.textContent = '✅ Upload Complete!'
        }

        uploadProgress.style.width = progress + '%'
        uploadProgress.textContent = progress + '%'
    }, 200)
})

uploadCancel.addEventListener('click', () => {
    if (uploadInterval) {
        clearInterval(uploadInterval)
        uploadInterval = null
    }

    uploadStart.disabled = false
    uploadCancel.disabled = true
    uploadStatus.textContent = '❌ Upload Cancelled'

    // Reset after 2 seconds
    setTimeout(() => {
        progress = 0
        uploadProgress.style.width = '0%'
        uploadProgress.textContent = '0%'
        uploadStatus.textContent = ''
    }, 2000)
})



// Exercise 8: Auto Slideshow
// Зорилго: setinterval slidshow, hover pause

const slideshow = document.getElementById('slideshow')
const slides = slideshow.querySelectorAll('.slide')
const dots = document.querySelectorAll('.slide-dot')
const slidePrev = document.getElementById('slide-prev')
const slideNext = document.getElementById('slide-next')
const slideToggle = document.getElementById('slide-toggle')

let currentSlide = 0
let slideshowInterval = null
let isPlaying = true

function showSlide(index) {
    // Wrap around
    if (index >= slides.length) index = 0
    if (index < 0) index = slides.length - 1

    currentSlide = index

    // Update slides
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === currentSlide)
    })

    // Update dots
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide)
    })
}

function nextSlide() {
    showSlide(currentSlide + 1)
}

function prevSlide() {
    showSlide(currentSlide - 1)
}

function startSlideshow() {
    if (slideshowInterval) return

    slideshowInterval = setInterval(nextSlide, 3000)
    isPlaying = true
    slideToggle.textContent = '⏸ Pause'
}

function stopSlideshow() {
    if (slideshowInterval) {
        clearInterval(slideshowInterval)
        slideshowInterval = null
    }
    isPlaying = false
    slideToggle.textContent = '▶ Play'
}

// Button controls
slideNext.addEventListener('click', nextSlide)
slidePrev.addEventListener('click', prevSlide)
slideToggle.addEventListener('click', () => {
    if (isPlaying) {
        stopSlideshow()
    } else {
        startSlideshow()
    }
})

// Dot navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => showSlide(index))
})

// Pause on hover
slideshow.addEventListener('mouseenter', stopSlideshow)
slideshow.addEventListener('mouseleave', () => {
    if (slideToggle.textContent.includes('Pause')) {
        startSlideshow()
    }
})

// Initialize
startSlideshow()



// Exercise 9: Retry Pattern
// Зорилго: Recursive setTimeout retry

const retryBtn = document.getElementById('retry-btn')
const output9 = document.getElementById('output-9')

function log9(message, isError = false) {
    const time = new Date().toLocaleTimeString()
    const line = document.createElement('div')
    line.className = 'output-line'
    line.style.color = isError ? '#ef4444' : '#e2e8f0'
    line.innerHTML = `<span class="timestamp">${time}</span>${message}`
    output9.appendChild(line)
    output9.scrollTop = output9.scrollHeight
}

// Simulated API call (50% fail rate)
function fetchApi(callback) {
    setTimeout(() => {
        const success = Math.random() > 0.5
        if (success) {
            callback(null, { data: 'Success data!' })
        } else {
            callback(new Error('Network error'), null)
        }
    }, 500)
}

// Fetch with retry
function fetchWithRetry(maxRetries, currentAttempt = 1) {
    log9(`🔄 Attempt ${currentAttempt}/${maxRetries}...`)

    fetchApi((error, data) => {
        if (error) {
            log9(`❌ Attempt ${currentAttempt} failed: ${error.message}`, true)

            if (currentAttempt < maxRetries) {
                log9(`⏳ Retrying in 1 second...`)

                setTimeout(function () {
                    fetchWithRetry(maxRetries, currentAttempt + 1)
                }, 1000)
            } else {
                log9(`💥 All ${maxRetries} attempts failed!`, true)
                retryBtn.disabled = false
            }
        } else {
            log9(`✅ Success: ${JSON.stringify(data)}`)
            retryBtn.disabled = false
        }
    })
}

retryBtn.addEventListener('click', () => {
    output9.innerHTML = ''
    retryBtn.disabled = true
    fetchWithRetry(3)  // Max 3 attempts
})



// Exercise 10: API Polling
// Зорилго: Periodic data fetching with setinterval

const pollData = document.getElementById('poll-data')
const pollStart = document.getElementById('poll-start')
const pollStop = document.getElementById('poll-stop')
const pollStatus = document.getElementById('poll-status')
const output10 = document.getElementById('output-10')

let pollInterval = null
let pollCount = 0

function log10(message) {
    const time = new Date().toLocaleTimeString()
    const line = document.createElement('div')
    line.className = 'output-line'
    line.innerHTML = `<span class="timestamp">${time}</span>${message}`
    output10.appendChild(line)

    while (output10.children.length > 8) {
        output10.removeChild(output10.firstChild)
    }
    output10.scrollTop = output10.scrollHeight
}

function updatePollStatus(running) {
    pollStatus.className = `status ${running ? 'running' : 'idle'}`
    pollStatus.innerHTML = `
        <span class="status-dot"></span>
        ${running ? 'Polling...' : 'Stopped'}
    `
}

function fetchData() {
    pollCount++
    const randomValue = Math.floor(Math.random() * 1000)
    pollData.textContent = randomValue
    log10(`📡 Poll #${pollCount}: Received value ${randomValue}`)
}

pollStart.addEventListener('click', () => {
    if (pollInterval) return

    pollStart.disabled = true
    pollStop.disabled = false
    updatePollStatus(true)

    // Immediate first fetch
    fetchData()

    // Then poll every 2 seconds
    pollInterval = setInterval(fetchData, 2000)
})

pollStop.addEventListener('click', () => {
    if (pollInterval) {
        clearInterval(pollInterval)
        pollInterval = null
    }

    pollStart.disabled = false
    pollStop.disabled = true
    updatePollStatus(false)
    log10('🛑 Polling stopped')
})








