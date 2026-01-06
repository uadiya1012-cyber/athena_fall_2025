// Exercise 1: Шийдэл бичих хэсэг

const eventsForm = document.getElementById('events-form')
const outputEvents = document.getElementById('output-events')

function logEvent(type, detail = '') {
    const line = document.createElement('div')
    line.className = 'output-line'
    line.innerHTML = `<strong>${type}</strong>${detail ? ': ' + detail : ''}`
    outputEvents.appendChild(line)
    outputEvents.scrollTop = outputEvents.scrollHeight
}

// Submit event
eventsForm.addEventListener('submit', (e) => {
    e.preventDefault()
    logEvent('SUBMIT', 'Form submitted!')
})

// Reset event
eventsForm.addEventListener('reset', (e) => {
    logEvent('RESET', 'Form reset!')
})

// Input event - username дээр
eventsForm.elements.username.addEventListener('input', (e) => {
    logEvent('INPUT', `username = "${e.target.value}"`)
})

// Change event - category дээр
eventsForm.elements.category.addEventListener('change', (e) => {
    logEvent('CHANGE', `category = "${e.target.value}"`)
})


// Exercise 2: Шийдэл бичих хэсэг

const formdataForm = document.getElementById('formdata-form')
const outputFormdata = document.getElementById('output-formdata')

formdataForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const formData = new FormData(formdataForm)

    // Бүх өгөгдлийг object болгох
    const data = Object.fromEntries(formData)

    // Skills - олон утга (getAll ашиглах)
    data.skills = formData.getAll('skills')

    // Output-д харуулах
    outputFormdata.innerHTML = ''

    for (const [key, value] of Object.entries(data)) {
        const line = document.createElement('div')
        line.className = 'output-line'

        const displayValue = Array.isArray(value)
            ? value.join(', ')
            : value

        line.textContent = `${key}: ${displayValue}`
        outputFormdata.appendChild(line)
    }
})


// Exercise 3: Шийдэл бичих хэсэг

const html5Form = document.getElementById('html5-form')
const outputHtml5 = document.getElementById('output-html5')

html5Form.addEventListener('submit', (e) => {
    e.preventDefault()

    outputHtml5.innerHTML = ''

    // Бүх input-уудыг шалгах
    const inputs = html5Form.querySelectorAll('input')
    let allValid = true

    inputs.forEach(input => {
        const validity = input.checkValidity()

        if (!validity.valid) {
            allValid = false

            let errorMsg = ''
            if (validity.valueMissing) {
                errorMsg = `${input.name}: Required field`
            } else if (validity.typeMismatch) {
                errorMsg = `${input.name}: Invalid format`
            } else if (validity.tooShort) {
                errorMsg = `${input.name}: Too short (min ${input.minLength})`
            } else if (validity.patternMismatch) {
                errorMsg = `${input.name}: Pattern mismatch`
            }

            logValidation(errorMsg, false)
        }
    })

    if (allValid) {
        logValidation('All fields valid! ✓', true)
    }
})

function logValidation(message, success) {
    const line = document.createElement('div')
    line.className = 'output-line'
    line.style.color = success ? '#10b981' : '#ef4444'
    line.textContent = message
    outputHtml5.appendChild(line)
}



// Exercise 4: Шийдэл бичих хэсэг

const customForm = document.getElementById('custom-form')
const usernameInput = document.getElementById('custom-username')
const emailInput = document.getElementById('custom-email')
const passwordInput = document.getElementById('custom-password')
const confirmInput = document.getElementById('custom-confirm')
const termsCheckbox = document.getElementById('custom-terms')
const successMessage = document.getElementById('success-message')
const validationSummary = document.getElementById('validation-summary')
const errorList = document.getElementById('error-list')

customForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const errors = []

    // Username validation
    if (usernameInput.value.length < 3) {
        errors.push('Username must be at least 3 characters')
        showFieldError('username', 'Username too short')
    } else {
        clearFieldError('username')
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(emailInput.value)) {
        errors.push('Please enter a valid email')
        showFieldError('email', 'Invalid email format')
    } else {
        clearFieldError('email')
    }

    // Password validation
    if (passwordInput.value.length < 8) {
        errors.push('Password must be at least 8 characters')
        showFieldError('password', 'Password too short')
    } else {
        clearFieldError('password')
    }

    // Confirm password
    if (passwordInput.value !== confirmInput.value) {
        errors.push('Passwords do not match')
        showFieldError('confirm', 'Passwords do not match')
    } else {
        clearFieldError('confirm')
    }

    // Terms checkbox
    if (!termsCheckbox.checked) {
        errors.push('You must agree to the terms')
        showFieldError('terms', 'Required')
    } else {
        clearFieldError('terms')
    }

    // Show results
    if (errors.length > 0) {
        showValidationSummary(errors)
    } else {
        validationSummary.classList.remove('show')
        customForm.style.display = 'none'
        successMessage.classList.add('show')
    }
})

function showFieldError(field, message) {
    const errorEl = document.getElementById(`${field}-error`)
    const inputEl = document.getElementById(`custom-${field}`)

    if (errorEl) {
        errorEl.textContent = message
        errorEl.classList.add('show')
    }
    if (inputEl) {
        inputEl.classList.add('error')
    }
}

function clearFieldError(field) {
    const errorEl = document.getElementById(`${field}-error`)
    const inputEl = document.getElementById(`custom-${field}`)

    if (errorEl) {
        errorEl.classList.remove('show')
    }
    if (inputEl) {
        inputEl.classList.remove('error')
    }
}

function showValidationSummary(errors) {
    errorList.innerHTML = errors.map(err => `<li>${err}</li>`).join('')
    validationSummary.classList.add('show')
}



// Exercise 5: Шийдэл бичих хэсэг

const realtimeEmail = document.getElementById('realtime-email')
const emailError = document.getElementById('realtime-email-error')
const emailSuccess = document.getElementById('realtime-email-success')
const bioInput = document.getElementById('realtime-bio')
const bioCounter = document.getElementById('bio-counter')

// Email real-time validation
realtimeEmail.addEventListener('input', (e) => {
    const email = e.target.value
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!email) {
        // Empty - clear validation
        realtimeEmail.classList.remove('error', 'success')
        emailError.classList.remove('show')
        emailSuccess.style.display = 'none'
    } else if (emailRegex.test(email)) {
        // Valid
        realtimeEmail.classList.remove('error')
        realtimeEmail.classList.add('success')
        emailError.classList.remove('show')
        emailSuccess.style.display = 'block'
    } else {
        // Invalid
        realtimeEmail.classList.remove('success')
        realtimeEmail.classList.add('error')
        emailError.textContent = 'Invalid email format'
        emailError.classList.add('show')
        emailSuccess.style.display = 'none'
    }
})

// Bio character counter
bioInput.addEventListener('input', (e) => {
    const current = e.target.value.length
    const max = 200

    bioCounter.textContent = `${current} / ${max}`

    // Warning/danger colors
    bioCounter.className = 'char-counter'
    if (current >= 180) {
        bioCounter.classList.add('danger')
    } else if (current >= 150) {
        bioCounter.classList.add('warning')
    }
})


// Exercise 6: Шийдэл бичих хэсэг

const loginForm = document.getElementById('login-form')
const loginEmail = document.getElementById('login-email')
const loginPassword = document.getElementById('login-password')
const outputLogin = document.getElementById('output-login')

// Demo credentials
const DEMO_EMAIL = 'test@example.com'
const DEMO_PASSWORD = 'password123'

loginForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const email = loginEmail.value.trim()
    const password = loginPassword.value

    outputLogin.innerHTML = ''

    // Validation
    if (!email || !password) {
        logLogin('Please fill in all fields', 'error')
        return
    }

    // Check credentials
    if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
        logLogin('✓ Login successful! Welcome back.', 'success')
        loginForm.reset()
    } else {
        logLogin('✗ Invalid email or password', 'error')
    }
})

function logLogin(message, type) {
    const line = document.createElement('div')
    line.className = 'output-line'
    line.style.color = type === 'success' ? '#10b981' : '#ef4444'
    line.textContent = message
    outputLogin.appendChild(line)
}


// Exercise 7: Шийдэл бичих хэсэг

const contactForm = document.getElementById('contact-form')
const contactPreview = document.getElementById('contact-preview')

contactForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const formData = new FormData(contactForm)
    const data = Object.fromEntries(formData)

    // Validation
    if (!data.name || !data.email || !data.message) {
        alert('Please fill in required fields')
        return
    }

    // Update preview
    document.getElementById('preview-from').textContent =
        `${data.name} <${data.email}>`
    document.getElementById('preview-subject').textContent =
        data.subject || 'No subject'
    document.getElementById('preview-message').textContent =
        data.message

    // Show preview
    contactPreview.style.display = 'block'
})

// Reset дээр preview нуух
contactForm.addEventListener('reset', () => {
    contactPreview.style.display = 'none'
})


// Exercise 8: Шийдэл бичих хэсэг

const cardNumber = document.getElementById('card-number')
const cardExpiry = document.getElementById('card-expiry')
const cardCvv = document.getElementById('card-cvv')
const paymentForm = document.getElementById('payment-form')

// Card number formatting
cardNumber.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '')  // Remove non-digits
    value = value.substring(0, 16)  // Max 16 digits

    // Add spaces every 4 digits
    const formatted = value.replace(/(\d{4})(?=\d)/g, '$1 ')
    e.target.value = formatted
})

// Expiry date formatting
cardExpiry.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '')

    if (value.length >= 2) {
        value = value.substring(0, 2) + '/' + value.substring(2, 4)
    }

    e.target.value = value
})

// CVV - numbers only
cardCvv.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/\D/g, '').substring(0, 3)
})

// Form submit
paymentForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const cardNum = cardNumber.value.replace(/\s/g, '')

    if (cardNum.length !== 16) {
        alert('Invalid card number')
        return
    }

    if (cardExpiry.value.length !== 5) {
        alert('Invalid expiry date')
        return
    }

    if (cardCvv.value.length !== 3) {
        alert('Invalid CVV')
        return
    }

    alert('Payment successful! ✓')
    paymentForm.appendChild()
})


// Exercise 9: Шийдэл бичих хэсэг

const multistepForm = document.getElementById('multistep-form')
let currentStep = 1
const totalSteps = 3

// Next buttons
document.querySelectorAll('.next-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // Validate current step
        const currentContent = document.getElementById(`step-${currentStep}`)
        const inputs = currentContent.querySelectorAll('input[required]')
        let valid = true

        inputs.forEach(input => {
            if (!input.value.trim()) {
                valid = false
                input.classList.add('error')
            } else {
                input.classList.remove('error')
            }
        })

        if (valid && currentStep < totalSteps) {
            goToStep(currentStep + 1)
        }
    })
})

// Back buttons
document.querySelectorAll('.prev-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        if (currentStep > 1) {
            goToStep(currentStep - 1)
        }
    })
})

function goToStep(step) {
    // Hide current step
    document.getElementById(`step-${currentStep}`).classList.remove('active')

    // Show new step
    document.getElementById(`step-${step}`).classList.add('active')

    // Update indicators
    document.querySelectorAll('.step').forEach((s, index) => {
        s.classList.remove('active', 'completed')

        if (index + 1 < step) {
            s.classList.add('completed')
        } else if (index + 1 === step) {
            s.classList.add('active')
        }
    })

    currentStep = step

    // Update preview on last step
    if (step === totalSteps) {
        updatePreview()
    }
}

function updatePreview() {
    const formData = new formData(multistepForm)
    const data = Object.fromEntries(formData)

    const preview = document.getElementById('multistep-preview')
    preview.innerHTML = Object.entries(data)
        .map(([key, value]) => `
            <div class="preview-row">
                <span class="preview-label">${key}:</span>
                <span class="preview-value">${value}</span>
            </div>
        `).join('')
}

// Submit
multistepForm.addEventListener('submit', (e) => {
    e.preventDefault()
    alert('Form submitted successfully!')
})


// Exercise 10: Шийдэл бичих хэсэг

const membersContainer = document.getElementById('members-container')
const addMemberBtn = document.getElementById('add-member')
const dynamicForm = document.getElementById('dynamic-form')
const outputDynamic = document.getElementById('output-dynamic')

// Add member
addMemberBtn.addEventListener('click', () => {
    const row = document.createElement('div')
    row.className = 'member-row flex gap-2 mb-3'
    row.innerHTML = `
        <input type="text" class="form-input" name="members[]"
               placeholder="Member name" style="flex: 1;">
        <button type="button" class="btn btn-danger remove-member">×</button>
    `

    membersContainer.appendChild(row)
})

// Remove member (delegation)
membersContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-member')) {
        e.target.closest('.member-row').remove()
    }
})

// Form submit
dynamicForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const formData = new FormData(dynamicForm)
    const projectName = formData.get('projectName')
    const members = formData.getAll('members[]').filter(m => m.trim())

    outputDynamic.innerHTML = `
        <div class="output-line"><strong>Project:</strong> ${projectName}</div>
        <div class="output-line"><strong>Team Members (${members.length}):</strong></div>
        ${members.map((m, i) => `<div class="output-line">${i + 1}. ${m}</div>`).join('')}
    `
})

