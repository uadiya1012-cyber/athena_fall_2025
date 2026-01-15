// ============================================
// Constants
// ============================================
const API_KEY = '4ce31300c4d8d491c494bc9971251cba'  // OpenWeatherMap API key
const BASE_URL = 'https://api.openweathermap.org/data/2.5'

// DOM Elements
const searchForm = document.getElementById('search-form')
const cityInput = document.getElementById('city-input')
const locationBtn = document.getElementById('location-btn')
const loadingEl = document.getElementById('loading')
const errorEl = document.getElementById('error')
const errorMessage = document.getElementById('error-message')
const weatherContainer = document.getElementById('weather-container')
const currentWeatherEl = document.getElementById('current-weather')
const forecastList = document.getElementById('forecast-list')
const recentList = document.getElementById('recent-list')

// State
let recentSearches = JSON.parse(localStorage.getItem('recentSearches')) || []


// ============================================
// UI Helpers
// ============================================

function showLoading() {
    loadingEl.style.display = 'flex'
    errorEl.style.display = 'none'
    weatherContainer.style.display = 'none'
}

function hideLoading() {
    loadingEl.style.display = 'none'
}

function showError(message) {
    hideLoading()
    errorEl.style.display = 'flex'
    errorMessage.textContent = message
    weatherContainer.style.display = 'none'
}

function showWeather() {
    hideLoading()
    errorEl.style.display = 'none'
    weatherContainer.style.display = 'block'
}


// ============================================
// API Functions
// ============================================

async function fetchCurrentWeather(city) {
    const url = `${BASE_URL}/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`

    const response = await fetch(url)

    if (!response.ok) {
        if (response.status === 404) {
            throw new Error(`City "${city}" not found`)
        }
        throw new Error('Failed to fetch weather data')
    }

    return response.json()
}

async function fetchForecast(city) {
    const url = `${BASE_URL}/forecast?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`

    const response = await fetch(url)

    if (!response.ok) {
        throw new Error('Failed to fetch forecast data')
    }

    return response.json()
}

async function fetchWeatherByCoords(lat, lon) {
    const weatherUrl = `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    const forecastUrl = `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`

    const [weatherResponse, forecastResponse] = await Promise.all([
        fetch(weatherUrl),
        fetch(forecastUrl)
    ])

    if (!weatherResponse.ok || !forecastResponse.ok) {
        throw new Error('Failed to fetch weather data')
    }

    const weather = await weatherResponse.json()
    const forecast = await forecastResponse.json()

    return { weather, forecast }
}

// ============================================
// Render Functions
// ============================================

function renderCurrentWeather(data) {
    const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`
    const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString('mn-MN', { hour: '2-digit', minute: '2-digit' })
    const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString('mn-MN', { hour: '2-digit', minute: '2-digit' })

    currentWeatherEl.innerHTML = `
        <div class="weather-main">
            <div class="weather-icon">
                <img src="${iconUrl}" alt="${data.weather[0].description}">
            </div>
            <div class="weather-info">
                <h2 class="city-name">${data.name}, ${data.sys.country}</h2>
                <p class="weather-desc">${data.weather[0].description}</p>
                <p class="temperature">${Math.round(data.main.temp)}°C</p>
                <p class="feels-like">Feels like: ${Math.round(data.main.feels_like)}°C</p>
            </div>
        </div>
        <div class="weather-details">
            <div class="detail-item">
                <span class="detail-icon">💧</span>
                <span class="detail-label">Humidity</span>
                <span class="detail-value">${data.main.humidity}%</span>
            </div>
            <div class="detail-item">
                <span class="detail-icon">💨</span>
                <span class="detail-label">Wind</span>
                <span class="detail-value">${data.wind.speed} m/s</span>
            </div>
            <div class="detail-item">
                <span class="detail-icon">🌡️</span>
                <span class="detail-label">Pressure</span>
                <span class="detail-value">${data.main.pressure} hPa</span>
            </div>
            <div class="detail-item">
                <span class="detail-icon">👁️</span>
                <span class="detail-label">Visibility</span>
                <span class="detail-value">${(data.visibility / 1000).toFixed(1)} km</span>
            </div>
            <div class="detail-item">
                <span class="detail-icon">🌅</span>
                <span class="detail-label">Sunrise</span>
                <span class="detail-value">${sunrise}</span>
            </div>
            <div class="detail-item">
                <span class="detail-icon">🌇</span>
                <span class="detail-label">Sunset</span>
                <span class="detail-value">${sunset}</span>
            </div>
        </div>
    `
}

function renderForecast(data) {
    // Get one forecast per day (noon)
    const dailyForecasts = data.list.filter(item =>
        item.dt_txt.includes('12:00:00')
    ).slice(0, 5)

    forecastList.innerHTML = dailyForecasts.map(day => {
        const date = new Date(day.dt * 1000)
        const dayName = date.toLocaleDateString('en-US', { weekday: 'short' })
        const iconUrl = `https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`

        return `
            <div class="forecast-item">
                <p class="forecast-day">${dayName}</p>
                <img src="${iconUrl}" alt="${day.weather[0].description}" class="forecast-icon">
                <p class="forecast-temp">${Math.round(day.main.temp)}°C</p>
                <p class="forecast-desc">${day.weather[0].main}</p>
            </div>
        `
    }).join('')
}


// ============================================
// Recent Searches
// ============================================

function addToRecentSearches(city) {
    // Remove if already exists
    recentSearches = recentSearches.filter(c =>
        c.toLowerCase() !== city.toLowerCase()
    )

    // Add to beginning
    recentSearches.unshift(city)

    // Keep only last 5
    recentSearches = recentSearches.slice(0, 5)

    // Save to localStorage
    localStorage.setItem('recentSearches', JSON.stringify(recentSearches))

    // Update UI
    renderRecentSearches()
}

function renderRecentSearches() {
    if (recentSearches.length === 0) {
        document.getElementById('recent-section').style.display = 'none'
        return
    }

    document.getElementById('recent-section').style.display = 'block'

    recentList.innerHTML = recentSearches.map(city => `
        <button class="recent-item" data-city="${city}">${city}</button>
    `).join('')
}

// Event delegation for recent searches
recentList.addEventListener('click', (e) => {
    if (e.target.classList.contains('recent-item')) {
        const city = e.target.dataset.city
        cityInput.value = city
        searchWeather(city)
    }
})


// ============================================
// Main Functions
// ============================================

async function searchWeather(city) {
    showLoading()

    try {
        // Fetch both current weather and forecast in parallel
        const [currentData, forecastData] = await Promise.all([
            fetchCurrentWeather(city),
            fetchForecast(city)
        ])

        // Render data
        renderCurrentWeather(currentData)
        renderForecast(forecastData)

        // Add to recent searches
        addToRecentSearches(currentData.name)

        // Show weather container
        showWeather()

    } catch (error) {
        showError(error.message)
    }
}

async function getLocationWeather() {
    showLoading()

    try {
        // Check if geolocation is supported
        if (!navigator.geolocation) {
            throw new Error('Geolocation is not supported by your browser')
        }

        // Get current position
        const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject, {
                timeout: 10000
            })
        })

        const { latitude, longitude } = position.coords

        // Fetch weather by coordinates
        const { weather, forecast } = await fetchWeatherByCoords(latitude, longitude)

        // Render data
        renderCurrentWeather(weather)
        renderForecast(forecast)

        // Add to recent
        addToRecentSearches(weather.name)

        showWeather()

    } catch (error) {
        if (error.code === 1) {
            showError('Location access denied. Please enable location services.')
        } else if (error.code === 2) {
            showError('Unable to determine your location.')
        } else if (error.code === 3) {
            showError('Location request timed out.')
        } else {
            showError(error.message)
        }
    }
}



// ============================================
// Event Listeners
// ============================================

// Search form submit
searchForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const city = cityInput.value.trim()

    if (city) {
        searchWeather(city)
    }
})

// Location button
locationBtn.addEventListener('click', () => {
    getLocationWeather()
})

// Retry button
document.getElementById('error-retry').addEventListener('click', () => {
    const city = cityInput.value.trim()
    if (city) {
        searchWeather(city)
    }
})

// Initialize
renderRecentSearches()

// Load default city or last searched
if (recentSearches.length > 0) {
    searchWeather(recentSearches[0])
} else {
    searchWeather('Ulaanbaatar')
}



// Add to HTML: <div class="suggestions" id="suggestions"></div>

const suggestionsEl = document.getElementById('suggestions')
let searchTimeout = null

async function fetchCitySuggestions(query) {
    if (query.length < 2) {
        suggestionsEl.style.display = 'none'
        return
    }

    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${API_KEY}`

    try {
        const response = await fetch(url)
        const cities = await response.json()

        if (cities.length === 0) {
            suggestionsEl.style.display = 'none'
            return
        }

        suggestionsEl.innerHTML = cities.map(city => `
            <div class="suggestion-item" data-city="${city.name}" data-country="${city.country}">
                ${city.name}, ${city.country}
            </div>
        `).join('')

        suggestionsEl.style.display = 'block'

    } catch (error) {
        console.error('Failed to fetch suggestions:', error)
    }
}

cityInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout)
    searchTimeout = setTimeout(() => {
        fetchCitySuggestions(e.target.value.trim())
    }, 300)
})

suggestionsEl.addEventListener('click', (e) => {
    if (e.target.classList.contains('suggestion-item')) {
        const city = e.target.dataset.city
        cityInput.value = city
        suggestionsEl.style.display = 'none'
        searchWeather(city)
    }
})

// Hide suggestions when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-section')) {
        suggestionsEl.style.display = 'none'
    }
})


let currentUnit = 'metric'  // 'metric' or 'imperial'
let lastSearchedCity = ''

function toggleUnit() {
    currentUnit = currentUnit === 'metric' ? 'imperial' : 'metric'
    document.getElementById('unit-toggle').textContent =
        currentUnit === 'metric' ? '°C' : '°F'

    if (lastSearchedCity) {
        searchWeather(lastSearchedCity)
    }
}

// Update fetch URLs to use currentUnit
async function fetchCurrentWeather(city) {
    const url = `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=${currentUnit}`

    const response = await fetch(url)

    if (!response.ok) {
        if (response.status === 404) {
            throw new Error(`City "${city}" not found`)
        }
        throw new Error('Failed to fetch weather data')
    }

    return response.json()
}


async function fetchAirQuality(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`

    const response = await fetch(url)
    return response.json()
}

function renderAirQuality(data) {
    const aqi = data.list[0].main.aqi
    const aqiLabels = ['', 'Good', 'Fair', 'Moderate', 'Poor', 'Very Poor']
    const aqiColors = ['', '#10b981', '#84cc16', '#f59e0b', '#ef4444', '#7c3aed']

    return `
        <div class="detail-item" style="border-left: 3px solid ${aqiColors[aqi]}">
            <span class="detail-icon">🌬️</span>
            <span class="detail-label">Air Quality</span>
            <span class="detail-value">${aqiLabels[aqi]}</span>
        </div>
    `
}



