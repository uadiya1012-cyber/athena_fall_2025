/*
 * ============================================
 * INTERACTIVE PROFILE CARD - Project
 * ============================================
 *
 * Энэ файлд:
 * 1. Data Management (Profile data)
 * 2. DOM References (Элементүүдийг сонгох)
 * 3. Utility Functions (Туслах функцүүд)
 * 4. Feature Functions (Үндсэн функционал)
 * 5. Event Listeners (Үйлдлүүдийг сонсох)
 * 6. Initialization (Эхлүүлэх)
 */

// ============================================
// 1. DATA MANAGEMENT
// ============================================

// Profile өгөгдөл
const profileData = {
    name: 'John Doe',
    title: 'Full-Stack Developer',
    avatarImage: null,
    bio: 'Passionate about building beautiful and functional web applications. Love to learn new technologies and share knowledge with others.',
    location: 'Ulaanbaatar, Mongolia',
    stats: {
        projects: 42,
        followers: 1280,
        following: 156
    },
    skills: ['JavaScript', 'React', 'Node.js', 'Python', 'MongoDB'],
    social: {
        github: 'https://github.com/johndoe',
        linkedin: 'https://linkedin.com/in/johndoe',
        twitter: 'https://twitter.com/johndoe',
        website: 'https://johndoe.dev'
    },
    isFollowing: false
}

// App state
const appState = {
    isDarkMode: false,
    isEditMode: false,
    currentColor: 'blue'
}


// ============================================
// 2. DOM REFERENCES
// ============================================

// App container
const app = document.getElementById('app');

// Theme controls
const themeToggle = document.getElementById('theme-toggle');
const colorOptions = document.getElementById('color-options');

// Profile elements
const profileCard = document.getElementById('profile-card');
const avatar = document.getElementById('avatar');
const avatarText = document.getElementById('avatar-text');

// View mode elements
const profileView = document.getElementById('profile-view');
const profileName = document.getElementById('profile-name');
const profileTitle = document.getElementById('profile-title');
const profileBio = document.getElementById('profile-bio');
const profileLocation = document.getElementById('profile-location');

// Edit mode elements
const profileEdit = document.getElementById('profile-edit');
const editToggle = document.getElementById('edit-toggle');
const editName = document.getElementById('edit-name');
const editTitle = document.getElementById('edit-title');
const editBio = document.getElementById('edit-bio');
const editLocation = document.getElementById('edit-location');
const saveEdit = document.getElementById('save-edit');
const cancelEdit = document.getElementById('cancel-edit');

// Stats elements
const statProjects = document.getElementById('stat-projects');
const statFollowers = document.getElementById('stat-followers');
const statFollowing = document.getElementById('stat-following');

// Skills elements
const skillsList = document.getElementById('skills-list');
const addSkillBtn = document.getElementById('add-skill-btn');
const addSkillForm = document.getElementById('add-skill-form');
const skillInput = document.getElementById('skill-input');
const confirmSkill = document.getElementById('confirm-skill');
const cancelSkill = document.getElementById('cancel-skill');

// Action buttons
const followBtn = document.getElementById('follow-btn');
const messageBtn = document.getElementById('message-btn');

// Notification container
const notificationContainer = document.getElementById('notification-container');


// Шалгах
console.log('Profile Name:', profileName);
console.log('Skills List:', skillsList);


// ============================================
// 3. UTILITY FUNCTIONS
// ============================================

/**
 * Нэрийн эхний үсгүүдийг авах
 * @param {string} name - Бүтэн нэр
 * @returns {string} - Эхний үсгүүд (VD: "John Doe" -> "JD")
 */
function getInitials(name) {
    // TODO: Оюутнууд бичих
    // Hint: split(' '), map(), join('')
    return name.split(" ").map((n) => n[0]).join(".");
}
// Тест
console.log(getInitials('John Doe'));        // "JD"
console.log(getInitials('Alice'));           // "A"
console.log(getInitials('John Middle Doe')); // "JMD"


/**
 * Тоог format хийх (1000 -> 1K)
 * @param {number} num - Тоо
 * @returns {string} - Formatted string
 */
function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M'
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K'
    }
    return num.toString()
}

/**
 * Notification харуулах
 * @param {string} message - Мессеж
 * @param {string} type - 'success' | 'error' | 'info'
 * @param {number} duration - Хугацаа (ms)
 */

function showNotification(message, type = 'info', duration = 3000) {
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

console.log(showNotification('Сайн байна уу?', 'message'));


// ============================================
// 4. THEME FUNCTIONS
// ============================================

/**
 * Dark/Light mode toggle
 */
function toggleDarkMode() {
    appState.isDarkMode = !appState.isDarkMode

    // app дээр class toggle хийх
    app.classList.toggle('dark-theme');

    // Button icon солих
    themeToggle.textContent = appState.isDarkMode ? '☀️' : '🌙'

    showNotification(
        appState.isDarkMode ? 'Dark mode enabled' : 'Light mode enabled',
        'info'
    );
};

/**
 * Color theme солих
 * @param {string} color - 'blue' | 'purple' | 'green' | 'orange' | 'pink'
 */
function setColorTheme(color) {
    // Хуучин theme class устгах
    const themeClasses = ['theme-purple', 'theme-green', 'theme-orange', 'theme-pink']
    themeClasses.forEach(cls => app.classList.remove(cls));

    // Шинэ theme нэмэх (blue бол default)
    if (color !== 'blue') {
        app.classList.add(`theme-${color}`);
    };

    // Active button update
    document.querySelectorAll('.color-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.color === color) {
            btn.classList.add('active');
        };
    });

    appState.currentColor = color
}


// ============================================
// 5. PROFILE DISPLAY FUNCTIONS
// ============================================

/**
 * Profile мэдээллийг DOM-д харуулах
 */
function renderProfile() {
    // Avatar initials
    if (profileData.avatarImage) {
        avatar.style.backgroundImage = `url(${profileData.avatarImage})`;
        avatar.style.backgroundSize = 'cover';
        avatarText.style.display = 'none';
    } else {
        avatarText.textContent = getInitials(profileData.name);
    }

    avatarText.textContent = getInitials(profileData.name);

    // Profile info
    profileName.textContent = profileData.name
    profileTitle.textContent = profileData.title
    profileBio.textContent = profileData.bio
    profileLocation.querySelector('.location-text').textContent = profileData.location



    // Stats
    animateCounter(statProjects, profileData.stats.projects);
    animateCounter(statFollowers, profileData.stats.followers);
    animateCounter(statFollowing, profileData.stats.following);

    // Skills
    renderSkills();

    // Follow button state
    updateFollowButton();
}

/**
 * Counter animation
 */
function animateCounter(element, target, duration = 1000) {
    const start = 0;
    const increment = target / (duration / 16);  // 60fps
    let current = start;

    const timer = setInterval(() => {
        current += increment

        if (current >= target) {
            // Дууссан
            element.textContent = formatNumber(target);
            clearInterval(timer);
        } else {
            element.textContent = formatNumber(Math.floor(current));
        }
    }, 16);
}

/**
 * Follow button state update
 */
function updateFollowButton() {
    const btnText = followBtn.querySelector('.btn-text');
    const btnIcon = followBtn.querySelector('.btn-icon');

    if (profileData.isFollowing) {
        followBtn.classList.add('following');
        btnText.textContent = 'Following'
        btnIcon.textContent = '✓'
    } else {
        followBtn.classList.remove('following');
        btnText.textContent = 'Follow'
        btnIcon.textContent = '👤'
    };
};


// ============================================
// 6. EDIT MODE FUNCTIONS
// ============================================

/**
 * Edit mode toggle
 */
function toggleEditMode() {
    appState.isEditMode = !appState.isEditMode

    if (appState.isEditMode) {
        // Edit mode руу шилжих
        profileView.classList.add('hidden');
        profileEdit.classList.remove('hidden');

        // Form-д одоогийн утгуудыг оруулах
        editName.value = profileData.name
        editTitle.value = profileData.title
        editBio.value = profileData.bio
        editLocation.value = profileData.location

        editToggle.textContent = '✕'
    } else {
        // View mode руу буцах
        profileView.classList.remove('hidden');
        profileEdit.classList.add('hidden');
        editToggle.textContent = '✏️'
    }
}

/**
 * Profile хадгалах
 */
function saveProfile() {
    // Validation
    const name = editName.value.trim();
    const title = editTitle.value.trim();
    const bio = editBio.value.trim();
    const location = editLocation.value.trim();

    if (!name) {
        showNotification('Name is required', 'error');
        editName.focus();
        return
    }

    // Data update
    profileData.name = name
    profileData.title = title
    profileData.bio = bio
    profileData.location = location

    // UI update
    saveToLocalStorage();
    renderProfile();
    toggleEditMode();

    showNotification('Profile updated successfully!', 'success');
}

/**
 * Edit цуцлах
 */
function cancelEditMode() {
    toggleEditMode();
    showNotification('Changes discarded', 'info');
}


// ============================================
// 7. SKILLS FUNCTIONS
// ============================================

/**
 * Skills render хийх
 */
function renderSkills() {
    // Skills list цэвэрлэх
    skillsList.innerHTML = ''

    if (profileData.skills.length === 0) {
        // Empty state
        const emptyState = document.createElement('div');
        emptyState.className = 'empty-skills';
        emptyState.textContent = 'No skills added yet. Click + to add skills.';
        skillsList.appendChild(emptyState);
        return
    }

    // Skills үүсгэх
    profileData.skills.forEach(skill => {
        const skillTag = createSkillTag(skill);
        skillsList.appendChild(skillTag);
    });
}

/**
 * Skill tag элемент үүсгэх
 */
function createSkillTag(skillName) {
    // 1. span.skill-tag үүсгэх
    const tag = document.createElement('span');
    tag.className = 'skill-tag';

    // 2. Skill text
    const text = document.createTextNode(skillName);
    tag.appendChild(text);

    // 3. Remove button
    const removeBtn = document.createElement('button');
    removeBtn.className = 'skill-remove';
    removeBtn.textContent = '×';

    // 4. Remove event
    removeBtn.addEventListener('click', () => {
        removeSkill(skillName);
    })

    tag.appendChild(removeBtn);

    return tag
}

/**
 * Skill нэмэх form toggle
 */
function toggleSkillForm() {
    addSkillForm.classList.toggle('hidden');

    if (!addSkillForm.classList.contains('hidden')) {
        skillInput.value = '';
        skillInput.focus();
    };
}

/**
 * Skill нэмэх
 */
function addSkill() {
    const skill = skillInput.value.trim();

    if (!skill) {
        showNotification('Please enter a skill name', 'error');
        return
    }

    // Давхардсан эсэхийг шалгах
    if (profileData.skills.includes(skill)) {
        showNotification('Skill already exists', 'error');
        return
    }

    // Skill нэмэх
    profileData.skills.push(skill);
    saveToLocalStorage();
    renderSkills();
    toggleSkillForm();

    showNotification(`"${skill}" skill added`, 'success');
}

/**
 * Skill устгах
 */
function removeSkill(skillName) {
    profileData.skills = profileData.skills.filter(s => s !== skillName);
    saveToLocalStorage();
    renderSkills();
    showNotification(`"${skillName}" skill removed`, 'info');
}


// ============================================
// 8. ACTION FUNCTIONS
// ============================================

/**
 * Follow toggle
 */
function toggleFollow() {
    profileData.isFollowing = !profileData.isFollowing

    if (profileData.isFollowing) {
        profileData.stats.followers++
        showNotification('You are now following this user', 'success');
    } else {
        profileData.stats.followers--
        showNotification('You unfollowed this user', 'info');
    };

    updateFollowButton()
    statFollowers.textContent = formatNumber(profileData.stats.followers);
};

/**
 * Message button click
 */
function sendMessage() {
    showNotification('Message feature coming soon!', 'info');
};


// ============================================
// 9. EVENT LISTENERS
// ============================================

// Theme toggle
themeToggle.addEventListener('click', toggleDarkMode);

// Color options
colorOptions.addEventListener('click', (e) => {
    if (e.target.classList.contains('color-btn')) {
        setColorTheme(e.target.dataset.color);
    };
});

// Edit mode
editToggle.addEventListener('click', toggleEditMode);
saveEdit.addEventListener('click', saveProfile);
cancelEdit.addEventListener('click', cancelEditMode);

// Skills
addSkillBtn.addEventListener('click', toggleSkillForm);
confirmSkill.addEventListener('click', addSkill);
cancelSkill.addEventListener('click', toggleSkillForm);

// Enter key дээр skill нэмэх
skillInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addSkill();
    };
});

// Action buttons
followBtn.addEventListener('click', toggleFollow);
messageBtn.addEventListener('click', sendMessage);


// ============================================
// 10. INITIALIZATION
// ============================================

/**
 * App эхлүүлэх
 */
function init() {
    console.log('🚀 Profile Card App Initialized');

    // Profile render
    loadFromLocalStorage();
    renderProfile();
    setupAvatarUpload();

    // Default color active
    document.querySelector('.color-btn[data-color="blue"]').classList.add('active');

    // Welcome notification
    setTimeout(() => {
        showNotification('Welcome to your profile!', 'info');
    }, 500);
};

// DOM бүрэн ачаалагдсаны дараа эхлүүлэх
document.addEventListener('DOMContentLoaded', init);



/**
 * Social link засах modal
 */
function editSocialLinks() {
    const platforms = Object.keys(profileData.social);

    platforms.forEach(platform => {
        const current = profileData.social[platform];
        const updated = prompt(
            `${platform.toUpperCase()} link оруулна уу:`,
            current
        );

        if (updated !== null && updated.trim() !== '') {
            profileData.social[platform] = updated.trim();
        };
    });

    // UI update
    document.querySelectorAll('.social-link').forEach(link => {
        const platform = link.dataset.platform;
        link.href = profileData.social[platform];
    });

    showNotification('Social links updated', 'success');
};


/**
 * Avatar дээр дарахад file input нээх
 */
function setupAvatarUpload() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.style.display = 'none';
    document.body.appendChild(fileInput);

    avatar.addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                avatar.style.backgroundImage = `url(${e.target.result})`
                avatar.style.backgroundSize = 'cover'
                avatarText.style.display = 'none'

                profileData.avatarImage = e.target.result
                saveToLocalStorage()
            };
            reader.onload = (e) => {
                // Avatar-д зураг тохируулах
                avatar.style.backgroundImage = `url(${e.target.result})`;
                avatar.style.backgroundSize = 'cover';
                avatarText.style.display = 'none';
            }
            reader.readAsDataURL(file);

        };
    });
}


/**
 * Profile-г localStorage-д хадгалах
 */
function saveToLocalStorage() {
    localStorage.setItem('profileData', JSON.stringify(profileData));
    localStorage.setItem('appState', JSON.stringify(appState));
}

/**
 * localStorage-аас унших
 */
function loadFromLocalStorage() {
    const savedProfile = localStorage.getItem('profileData');
    const savedState = localStorage.getItem('appState');

    if (savedProfile) {
        Object.assign(profileData, JSON.parse(savedProfile));
    }

    if (savedState) {
        Object.assign(appState, JSON.parse(savedState));

        // Apply saved state
        if (appState.isDarkMode) {
            app.classList.add('dark-theme');
            themeToggle.textContent = '☀️';
        };

        setColorTheme(appState.currentColor);
    };
}
