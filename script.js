// ==================== APP STATE ====================

const appState = {
    currentUser: null,
    currentGame: null,
    gameInProgress: false,
    allData: null,
    settings: {
        language: 'en',
        theme: 'dark',
        soundEnabled: true,
        defaultDifficulty: 'medium',
        defaultMode: 'hangman',
        defaultCategory: 'random'
    },
    stats: {
        totalGamesPlayed: 0,
        totalWins: 0,
        totalLosses: 0,
        bestScore: 0,
        bestStreak: 0,
        currentStreak: 0,
        totalHintsUsed: 0
    },
    gameStats: {},
    achievements: {},
    gameHistory: []
};

const translations = {
    en: {
        appTitle: 'Just Guess',
        login: 'Login',
        register: 'Register',
        email: 'Email',
        username: 'Username',
        password: 'Password',
        confirmPassword: 'Confirm Password',
        home: 'Home',
        profile: 'Profile',
        settings: 'Settings',
        logout: 'Logout',
        play: 'Play Game',
        playAgain: 'Play Again',
        nextGame: 'Next Game',
        backHome: 'Back to Home',
        selectDifficulty: 'Select Difficulty',
        selectMode: 'Select Game Mode',
        selectCategory: 'Select Category',
        easy: 'Easy',
        medium: 'Medium',
        hard: 'Hard',
        extreme: 'Extreme',
        hangman: 'Hangman',
        wordle: 'Wordle',
        scramble: 'Scramble',
        cluemaster: 'Clue Master',
        animals: 'Animals',
        food: 'Food',
        countries: 'Countries',
        tech: 'Technology',
        movies: 'Movies',
        sports: 'Sports',
        music: 'Music',
        random: 'Random All',
        score: 'Score',
        time: 'Time',
        streak: 'Streak',
        lives: 'Lives',
        hints: 'Hints',
        wins: 'Wins',
        losses: 'Losses',
        accuracy: 'Accuracy',
        gameOver: 'Game Over',
        youWon: 'You Won!',
        youLost: 'You Lost!',
        theWord: 'The Word',
        invalidEmail: 'Invalid email format',
        passwordTooShort: 'Password must be at least 8 characters',
        passwordWeak: 'Password must contain uppercase, lowercase, number, and special character',
        passwordMismatch: 'Passwords do not match',
        userExists: 'User already exists',
        invalidCredentials: 'Invalid email or password',
        welcomeBack: 'Welcome Back',
        confirmLogin: 'Login as',
        confirmLogout: 'Are you sure you want to logout?',
        confirmDelete: 'Are you sure? This action cannot be undone. All your data will be deleted.',
        deleteAccount: 'Delete Account',
        deleteSuccess: 'Account deleted successfully',
        logoutSuccess: 'Logged out successfully',
        saveSuccess: 'Changes saved',
        errorLoading: 'Error loading game data',
        noGamesPlayed: 'No games played yet',
        achievementUnlocked: 'Achievement Unlocked',
        newHighScore: 'New High Score',
        dailyHintsReset: 'Daily hints have been reset',
        wordRevealed: 'Word Revealed',
        guessTheWord: 'Guess the word',
        enterYourGuess: 'Enter your guess',
        submit: 'Submit',
        cancel: 'Cancel',
        delete: 'Delete',
        deleteEverything: 'Delete Everything',
        darkTheme: 'Dark Theme',
        lightTheme: 'Light Theme',
        soundEffects: 'Sound Effects',
        language: 'Language',
        defaultDifficulty: 'Default Difficulty',
        defaultMode: 'Default Game Mode',
        defaultCategory: 'Default Category',
        saveSettings: 'Save Settings',
        howToPlay: 'How To Play',
        gameHistory: 'Game History',
        recentGames: 'Recent Games',
        topScores: 'Top Scores',
        achievements: 'Achievements',
        editProfile: 'Edit Profile',
        uploadAvatar: 'Upload Avatar',
        stats: 'Statistics',
        mode: 'Mode',
        difficulty: 'Difficulty',
        category: 'Category',
        result: 'Result',
        date: 'Date',
        learnMore: 'Learn More'
    },
    id: {
        appTitle: 'Just Guess',
        login: 'Masuk',
        register: 'Daftar',
        email: 'Email',
        username: 'Nama Pengguna',
        password: 'Kata Sandi',
        confirmPassword: 'Konfirmasi Kata Sandi',
        home: 'Beranda',
        profile: 'Profil',
        settings: 'Pengaturan',
        logout: 'Keluar',
        play: 'Mainkan Game',
        playAgain: 'Mainkan Lagi',
        nextGame: 'Game Berikutnya',
        backHome: 'Kembali ke Beranda',
        selectDifficulty: 'Pilih Kesulitan',
        selectMode: 'Pilih Mode Game',
        selectCategory: 'Pilih Kategori',
        easy: 'Mudah',
        medium: 'Sedang',
        hard: 'Sulit',
        extreme: 'Ekstrem',
        hangman: 'Hangman',
        wordle: 'Wordle',
        scramble: 'Scramble',
        cluemaster: 'Clue Master',
        animals: 'Hewan',
        food: 'Makanan',
        countries: 'Negara',
        tech: 'Teknologi',
        movies: 'Film',
        sports: 'Olahraga',
        music: 'Musik',
        random: 'Semua Random',
        score: 'Poin',
        time: 'Waktu',
        streak: 'Streak',
        lives: 'Nyawa',
        hints: 'Hints',
        wins: 'Kemenangan',
        losses: 'Kekalahan',
        accuracy: 'Akurasi',
        gameOver: 'Game Berakhir',
        youWon: 'Kamu Menang!',
        youLost: 'Kamu Kalah!',
        theWord: 'Kata Nya',
        invalidEmail: 'Format email tidak valid',
        passwordTooShort: 'Kata sandi minimal 8 karakter',
        passwordWeak: 'Kata sandi harus mengandung huruf besar, kecil, angka, dan karakter spesial',
        passwordMismatch: 'Kata sandi tidak cocok',
        userExists: 'Pengguna sudah ada',
        invalidCredentials: 'Email atau kata sandi tidak valid',
        welcomeBack: 'Selamat Datang Kembali',
        confirmLogin: 'Masuk sebagai',
        confirmLogout: 'Apakah Anda yakin ingin keluar?',
        confirmDelete: 'Apakah Anda yakin? Tindakan ini tidak dapat dibatalkan. Semua data Anda akan dihapus.',
        deleteAccount: 'Hapus Akun',
        deleteSuccess: 'Akun berhasil dihapus',
        logoutSuccess: 'Berhasil keluar',
        saveSuccess: 'Perubahan disimpan',
        errorLoading: 'Kesalahan memuat data game',
        noGamesPlayed: 'Belum ada game yang dimainkan',
        achievementUnlocked: 'Pencapaian Dibuka',
        newHighScore: 'Skor Tertinggi Baru',
        dailyHintsReset: 'Hints harian telah direset',
        wordRevealed: 'Kata Terungkap',
        guessTheWord: 'Tebak kata',
        enterYourGuess: 'Masukkan tebakan Anda',
        submit: 'Kirim',
        cancel: 'Batal',
        delete: 'Hapus',
        deleteEverything: 'Hapus Semua',
        darkTheme: 'Tema Gelap',
        lightTheme: 'Tema Terang',
        soundEffects: 'Efek Suara',
        language: 'Bahasa',
        defaultDifficulty: 'Kesulitan Default',
        defaultMode: 'Mode Game Default',
        defaultCategory: 'Kategori Default',
        saveSettings: 'Simpan Pengaturan',
        howToPlay: 'Cara Bermain',
        gameHistory: 'Riwayat Game',
        recentGames: 'Game Terbaru',
        topScores: 'Skor Teratas',
        achievements: 'Pencapaian',
        editProfile: 'Edit Profil',
        uploadAvatar: 'Unggah Avatar',
        stats: 'Statistik',
        mode: 'Mode',
        difficulty: 'Kesulitan',
        category: 'Kategori',
        result: 'Hasil',
        date: 'Tanggal',
        learnMore: 'Pelajari Lebih Lanjut'
    }
};

// ==================== UTILITY FUNCTIONS ====================

function t(key) {
    const lang = appState.settings.language;
    return translations[lang][key] || translations['en'][key] || key;
}

function log(message) {
    console.log(`[JustGuess] ${message}`);
}

function error(message) {
    console.error(`[JustGuess Error] ${message}`);
}

function showAlert(message, type = 'info') {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type}`;
    alertDiv.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
        <span>${message}</span>
    `;
    
    const mainContent = document.getElementById('mainContent');
    mainContent.insertBefore(alertDiv, mainContent.firstChild);
    
    setTimeout(() => alertDiv.remove(), 4000);
}

function showModal(title, message, buttons = []) {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = 'modalOverlay';
    
    let buttonsHTML = '';
    buttons.forEach(btn => {
        const btnClass = btn.type === 'danger' ? 'btn-danger' : btn.type === 'success' ? 'btn-success' : 'btn-secondary';
        buttonsHTML += `<button class="btn ${btnClass}" data-action="${btn.action}">${btn.label}</button>`;
    });
    
    overlay.innerHTML = `
        <div class="modal">
            <div class="modal-header">${title}</div>
            <div class="modal-body">${message}</div>
            <div class="modal-footer">
                ${buttonsHTML}
            </div>
        </div>
    `;
    
    document.body.appendChild(overlay);
    
    overlay.addEventListener('click', (e) => {
        if (e.target.id === 'modalOverlay') {
            overlay.remove();
        }
    });
    
    overlay.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => {
            const action = btn.dataset.action;
            const callback = buttons.find(b => b.action === action)?.callback;
            if (callback) callback();
            overlay.remove();
        });
    });
}

function playSound(soundName) {
    if (!appState.settings.soundEnabled) return;
    
    const audioEl = document.getElementById(`audio${soundName.charAt(0).toUpperCase() + soundName.slice(1)}`);
    if (audioEl) {
        audioEl.currentTime = 0;
        audioEl.play().catch(() => {});
    }
}

function getInitialAvatar(username) {
    return username ? username.charAt(0).toUpperCase() : 'U';
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validatePassword(password) {
    if (password.length < 8) return false;
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
    return hasUpper && hasLower && hasNumber && hasSpecial;
}

function getPasswordStrength(password) {
    if (password.length < 8) return 'weak';
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
    const strength = [hasUpper, hasLower, hasNumber, hasSpecial].filter(Boolean).length;
    return strength <= 2 ? 'weak' : strength === 3 ? 'medium' : 'strong';
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function formatDate(date) {
    return new Date(date).toLocaleDateString();
}

function hashPassword(password) {
    // Simple hash for demo - in production use proper bcrypt
    let hash = 0;
    for (let i = 0; i < password.length; i++) {
        const char = password.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return 'hash_' + Math.abs(hash).toString(16);
}

// ==================== STORAGE FUNCTIONS ====================

function saveToLocalStorage(key, data) {
    try {
        localStorage.setItem(`jg_${key}`, JSON.stringify(data));
        return true;
    } catch (e) {
        error(`Failed to save ${key}: ${e.message}`);
        return false;
    }
}

function getFromLocalStorage(key, defaultValue = null) {
    try {
        const data = localStorage.getItem(`jg_${key}`);
        return data ? JSON.parse(data) : defaultValue;
    } catch (e) {
        error(`Failed to load ${key}: ${e.message}`);
        return defaultValue;
    }
}

function clearAllData() {
    const keys = ['user', 'settings', 'stats', 'gameStats', 'achievements', 'gameHistory'];
    keys.forEach(key => localStorage.removeItem(`jg_${key}`));
    appState.currentUser = null;
}

function resetDailyHints() {
    const lastReset = getFromLocalStorage('lastHintReset');
    const today = new Date().toDateString();
    
    if (lastReset !== today) {
        if (appState.stats) {
            appState.stats.dailyHints = 3;
        }
        saveToLocalStorage('lastHintReset', today);
    }
}

// ==================== DATA LOADING ====================

async function loadGameData() {
    try {
        const response = await fetch('data.json');
        if (!response.ok) throw new Error('Failed to load data.json');
        return await response.json();
    } catch (e) {
        error('Failed to load data.json: ' + e.message);
        showAlert(t('errorLoading'), 'danger');
        return null;
    }
}

async function loadSuperData() {
    try {
        const response = await fetch('superdata.json');
        if (!response.ok) throw new Error('Failed to load superdata.json');
        return await response.json();
    } catch (e) {
        error('Failed to load superdata.json: ' + e.message);
        return null;
    }
}

async function initializeApp() {
    log('Initializing app...');
    
    // Load all data
    const [gameData, superData] = await Promise.all([
        loadGameData(),
        loadSuperData()
    ]);
    
    if (!gameData || !superData) {
        showAlert(t('errorLoading'), 'danger');
        return false;
    }
    
    appState.allData = gameData;
    
    // Initialize achievements
    if (superData.achievements) {
        superData.achievements.forEach(ach => {
            appState.achievements[ach.id] = {
                ...ach,
                unlocked: false,
                unlockedDate: null
            };
        });
    }
    
    // Load user if exists
    const savedUser = getFromLocalStorage('user');
    if (savedUser) {
        appState.currentUser = savedUser;
        loadUserData();
        navigateTo('home');
    } else {
        navigateTo('login');
    }
    
    // Load theme
    const savedTheme = getFromLocalStorage('settings', {}).theme || 'dark';
    setTheme(savedTheme);
    
    // Setup event listeners
    setupEventListeners();
    
    log('App initialized successfully');
    return true;
}

function loadUserData() {
    if (!appState.currentUser) return;
    
    appState.settings = getFromLocalStorage(`user_${appState.currentUser.id}_settings`, appState.settings);
    appState.stats = getFromLocalStorage(`user_${appState.currentUser.id}_stats`, appState.stats);
    appState.gameStats = getFromLocalStorage(`user_${appState.currentUser.id}_gameStats`, {});
    appState.achievements = getFromLocalStorage(`user_${appState.currentUser.id}_achievements`, appState.achievements);
    appState.gameHistory = getFromLocalStorage(`user_${appState.currentUser.id}_gameHistory`, []);
    
    resetDailyHints();
}

function saveUserData() {
    if (!appState.currentUser) return;
    
    saveToLocalStorage(`user_${appState.currentUser.id}_settings`, appState.settings);
    saveToLocalStorage(`user_${appState.currentUser.id}_stats`, appState.stats);
    saveToLocalStorage(`user_${appState.currentUser.id}_gameStats`, appState.gameStats);
    saveToLocalStorage(`user_${appState.currentUser.id}_achievements`, appState.achievements);
    saveToLocalStorage(`user_${appState.currentUser.id}_gameHistory`, appState.gameHistory);
}

// ==================== THEME FUNCTIONS ====================

function setTheme(theme) {
    document.body.className = `theme-${theme}`;
    appState.settings.theme = theme;
    saveToLocalStorage('settings', appState.settings);
}

function toggleTheme() {
    const newTheme = appState.settings.theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
}

// ==================== ROUTING ====================

function getCurrentPage() {
    const hash = window.location.hash.slice(2) || 'login';
    return hash.split('?')[0];
}

function navigateTo(page) {
    window.location.hash = `#/${page}`;
}

async function handleRouting() {
    const page = getCurrentPage();
    const mainContent = document.getElementById('mainContent');
    
    // Check auth
    if (page !== 'login' && page !== 'register' && !appState.currentUser) {
        navigateTo('login');
        return;
    }
    
    mainContent.innerHTML = '';
    
    switch(page) {
        case 'login':
            showLoginPage();
            break;
        case 'register':
            showRegisterPage();
            break;
        case 'home':
            showHomePage();
            break;
        case 'profile':
            showProfilePage();
            break;
        case 'settings':
            showSettingsPage();
            break;
        case 'how-to-play':
            showHowToPlayPage();
            break;
        case 'game-menu':
            showGameMenuPage();
            break;
        case 'game':
            const mode = new URLSearchParams(window.location.hash.split('?')[1] || '').get('mode');
            const difficulty = new URLSearchParams(window.location.hash.split('?')[1] || '').get('difficulty');
            const category = new URLSearchParams(window.location.hash.split('?')[1] || '').get('category');
            if (mode && difficulty && category) {
                initializeGame(mode, difficulty, category);
                showGamePage();
            } else {
                navigateTo('game-menu');
            }
            break;
        default:
            navigateTo('home');
    }
    
    updateNavigation();
}

function updateNavigation() {
    const page = getCurrentPage();
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.page === page) {
            link.classList.add('active');
        }
    });
    
    // Close mobile menu
    const navMenu = document.getElementById('navMenu');
    const hamburger = document.getElementById('hamburger');
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
}

// ==================== EVENT LISTENERS ====================

function setupEventListeners() {
    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Hamburger menu
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Hash change
    window.addEventListener('hashchange', handleRouting);
}

// ==================== AUTH PAGES ====================

function showLoginPage() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <div class="auth-container">
            <div class="auth-card">
                <h1>${t('login')}</h1>
                <div id="loginAlert"></div>
                <form id="loginForm">
                    <div class="form-group">
                        <label>${t('email')}</label>
                        <input type="email" id="loginEmail" required>
                    </div>
                    <div class="form-group">
                        <label>${t('password')}</label>
                        <input type="password" id="loginPassword" required>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block">${t('login')}</button>
                </form>
                <div class="auth-toggle">
                    ${t('noAccount')} <a onclick="navigateTo('register')">${t('register')}</a>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
}

function showRegisterPage() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <div class="auth-container">
            <div class="auth-card">
                <h1>${t('register')}</h1>
                <div id="registerAlert"></div>
                <form id="registerForm">
                    <div class="form-group">
                        <label>${t('username')}</label>
                        <input type="text" id="registerUsername" required>
                    </div>
                    <div class="form-group">
                        <label>${t('email')}</label>
                        <input type="email" id="registerEmail" required>
                    </div>
                    <div class="form-group">
                        <label>${t('password')}</label>
                        <input type="password" id="registerPassword" required>
                        <div class="password-strength">
                            <div class="password-strength-bar" id="strengthBar"></div>
                        </div>
                        <div class="password-strength-text" id="strengthText"></div>
                    </div>
                    <div class="form-group">
                        <label>${t('confirmPassword')}</label>
                        <input type="password" id="registerConfirmPassword" required>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block">${t('register')}</button>
                </form>
                <div class="auth-toggle">
                    ${t('alreadyHaveAccount')} <a onclick="navigateTo('login')">${t('login')}</a>
                </div>
            </div>
        </div>
    `;
    
    const passwordInput = document.getElementById('registerPassword');
    const strengthBar = document.getElementById('strengthBar');
    const strengthText = document.getElementById('strengthText');
    
    passwordInput.addEventListener('input', () => {
        const strength = getPasswordStrength(passwordInput.value);
        const strengthMap = {
            weak: { width: '33%', text: 'Weak', class: 'weak' },
            medium: { width: '66%', text: 'Medium', class: 'medium' },
            strong: { width: '100%', text: 'Strong', class: 'strong' }
        };
        strengthBar.style.width = strengthMap[strength].width;
        strengthBar.className = `password-strength-bar ${strengthMap[strength].class}`;
        strengthText.textContent = strengthMap[strength].text;
    });
    
    document.getElementById('registerForm').addEventListener('submit', handleRegister);
}

function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const alertDiv = document.getElementById('loginAlert');
    
    alertDiv.innerHTML = '';
    
    // Get all users
    const allUsers = getFromLocalStorage('allUsers', []);
    const user = allUsers.find(u => u.email === email);
    
    if (!user) {
        alertDiv.innerHTML = `<div class="alert alert-danger">${t('invalidCredentials')}</div>`;
        return;
    }
    
    if (user.password !== hashPassword(password)) {
        alertDiv.innerHTML = `<div class="alert alert-danger">${t('invalidCredentials')}</div>`;
        return;
    }
    
    // Show confirmation modal
    showModal(
        t('confirmLogin'),
        `${t('confirmLogin')} ${email}?`,
        [
            {
                label: t('cancel'),
                action: 'cancel',
                callback: () => {}
            },
            {
                label: t('login'),
                action: 'login',
                type: 'success',
                callback: () => {
                    appState.currentUser = {
                        id: user.id,
                        username: user.username,
                        email: user.email,
                        avatar: user.avatar || null
                    };
                    loadUserData();
                    playSound('button');
                    navigateTo('home');
                }
            }
        ]
    );
}

function handleRegister(e) {
    e.preventDefault();
    
    const username = document.getElementById('registerUsername').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;
    const alertDiv = document.getElementById('registerAlert');
    
    alertDiv.innerHTML = '';
    
    // Validation
    if (!validateEmail(email)) {
        alertDiv.innerHTML = `<div class="alert alert-danger">${t('invalidEmail')}</div>`;
        return;
    }
    
    if (!validatePassword(password)) {
        alertDiv.innerHTML = `<div class="alert alert-danger">${t('passwordWeak')}</div>`;
        return;
    }
    
    if (password !== confirmPassword) {
        alertDiv.innerHTML = `<div class="alert alert-danger">${t('passwordMismatch')}</div>`;
        return;
    }
    
    // Check if user exists
    const allUsers = getFromLocalStorage('allUsers', []);
    if (allUsers.some(u => u.email === email)) {
        alertDiv.innerHTML = `<div class="alert alert-danger">${t('userExists')}</div>`;
        return;
    }
    
    // Create user
    const newUser = {
        id: 'user_' + Date.now(),
        username: username,
        email: email,
        password: hashPassword(password),
        avatar: null,
        createdAt: new Date().toISOString()
    };
    
    allUsers.push(newUser);
    saveToLocalStorage('allUsers', allUsers);
    
    showAlert(`${t('register')} successful! Please login.`, 'success');
    setTimeout(() => navigateTo('login'), 2000);
}

// ==================== HOME PAGE ====================

function showHomePage() {
    const mainContent = document.getElementById('mainContent');
    
    mainContent.innerHTML = `
        <div class="page">
            <h1 style="margin-bottom: 30px;">${t('welcomeBack')}, ${appState.currentUser.username}!</h1>
            
            <div style="margin-bottom: 40px;">
                <button class="btn btn-primary btn-block" style="padding: 20px; font-size: 1.2rem;" onclick="navigateTo('game-menu')">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                    </svg>
                    ${t('play')}
                </button>
            </div>
            
            <div class="dashboard-grid" id="statsGrid">
                <!-- Stats will be loaded here -->
            </div>
            
            <h2 class="section-title">${t('recentGames')}</h2>
            <div id="recentGamesContainer">
                <!-- Recent games will be loaded here -->
            </div>
        </div>
    `;
    
    loadDashboardStats();
    loadRecentGames();
}

function loadDashboardStats() {
    const statsGrid = document.getElementById('statsGrid');
    const stats = appState.stats;
    
    const totalGames = stats.totalGamesPlayed || 0;
    const wins = stats.totalWins || 0;
    const winRate = totalGames > 0 ? Math.round((wins / totalGames) * 100) : 0;
    
    statsGrid.innerHTML = `
        <div class="stat-card">
            <div class="stat-icon">🎮</div>
            <div class="stat-value">${totalGames}</div>
            <div class="stat-label">${t('games')} Played</div>
        </div>
        <div class="stat-card">
            <div class="stat-icon">✓</div>
            <div class="stat-value">${wins}</div>
            <div class="stat-label">${t('wins')}</div>
        </div>
        <div class="stat-card">
            <div class="stat-icon">%</div>
            <div class="stat-value">${winRate}%</div>
            <div class="stat-label">${t('accuracy')}</div>
        </div>
        <div class="stat-card">
            <div class="stat-icon">🔥</div>
            <div class="stat-value">${stats.currentStreak || 0}</div>
            <div class="stat-label">${t('streak')}</div>
        </div>
        <div class="stat-card">
            <div class="stat-icon">⭐</div>
            <div class="stat-value">${stats.bestScore || 0}</div>
            <div class="stat-label">Best Score</div>
        </div>
        <div class="stat-card">
            <div class="stat-icon">💡</div>
            <div class="stat-value">${stats.totalHintsUsed || 0}</div>
            <div class="stat-label">${t('hints')} Used</div>
        </div>
    `;
}

function loadRecentGames() {
    const container = document.getElementById('recentGamesContainer');
    const history = appState.gameHistory.slice(0, 10);
    
    if (history.length === 0) {
        container.innerHTML = `<p style="text-align: center; color: var(--text-secondary); padding: 20px;">${t('noGamesPlayed')}</p>`;
        return;
    }
    
    let html = `
        <table class="game-history-table">
            <thead>
                <tr>
                    <th>${t('mode')}</th>
                    <th>${t('difficulty')}</th>
                    <th>${t('result')}</th>
                    <th>${t('score')}</th>
                    <th>${t('date')}</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    history.forEach(game => {
        const badgeClass = game.result === 'win' ? 'badge-win' : 'badge-lose';
        const resultText = game.result === 'win' ? t('youWon') : t('youLost');
        const difficultyBadgeClass = `badge-${game.difficulty.toLowerCase()}`;
        
        html += `
            <tr>
                <td>${game.mode}</td>
                <td><span class="badge ${difficultyBadgeClass}">${game.difficulty}</span></td>
                <td><span class="badge ${badgeClass}">${resultText}</span></td>
                <td>${game.score}</td>
                <td>${formatDate(game.date)}</td>
            </tr>
        `;
    });
    
    html += `
            </tbody>
        </table>
    `;
    
    container.innerHTML = html;
}

// ==================== PROFILE PAGE ====================

function showProfilePage() {
    const mainContent = document.getElementById('mainContent');
    const user = appState.currentUser;
    
    mainContent.innerHTML = `
        <div class="page">
            <h1 style="margin-bottom: 30px;">${t('profile')}</h1>
            
            <div class="profile-container">
                <div class="profile-card">
                    ${user.avatar ? 
                        `<img src="${user.avatar}" class="profile-avatar">` : 
                        `<div class="profile-avatar">${getInitialAvatar(user.username)}</div>`
                    }
                    <h2 class="profile-name">${user.username}</h2>
                    <p class="profile-email">${user.email}</p>
                    
                    <div class="profile-stats">
                        <div class="profile-stat">
                            <div class="profile-stat-value">${appState.stats.totalWins || 0}</div>
                            <div class="profile-stat-label">${t('wins')}</div>
                        </div>
                        <div class="profile-stat">
                            <div class="profile-stat-value">${appState.stats.bestScore || 0}</div>
                            <div class="profile-stat-label">Best Score</div>
                        </div>
                        <div class="profile-stat">
                            <div class="profile-stat-value">${appState.stats.currentStreak || 0}</div>
                            <div class="profile-stat-label">${t('streak')}</div>
                        </div>
                        <div class="profile-stat">
                            <div class="profile-stat-value">${appState.gameHistory.length}</div>
                            <div class="profile-stat-label">Games</div>
                        </div>
                    </div>
                    
                    <div class="profile-actions">
                        <button class="btn btn-secondary btn-block" onclick="showEditProfileModal()">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                            </svg>
                            ${t('editProfile')}
                        </button>
                        <button class="btn btn-danger btn-block" onclick="handleLogout()">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                                <polyline points="16 17 21 12 16 7"></polyline>
                                <line x1="21" y1="12" x2="9" y2="12"></line>
                            </svg>
                            ${t('logout')}
                        </button>
                        <button class="btn btn-danger btn-block" onclick="handleDeleteAccount()">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                            </svg>
                            ${t('deleteAccount')}
                        </button>
                    </div>
                </div>
                
                <div>
                    <h2 class="section-title">${t('achievements')}</h2>
                    <div class="achievements-grid" id="achievementsGrid">
                        <!-- Achievements will be loaded here -->
                    </div>
                </div>
            </div>
        </div>
    `;
    
    loadAchievements();
}

function loadAchievements() {
    const grid = document.getElementById('achievementsGrid');
    let html = '';
    
    Object.values(appState.achievements).forEach(ach => {
        const isUnlocked = ach.unlocked;
        html += `
            <div class="achievement ${isUnlocked ? 'unlocked' : ''}">
                <div class="achievement-icon">${ach.icon}</div>
                <div class="achievement-name">${ach.name}</div>
                <div class="achievement-tooltip">${ach.description}</div>
            </div>
        `;
    });
    
    grid.innerHTML = html;
}

function showEditProfileModal() {
    const user = appState.currentUser;
    showModal(
        t('editProfile'),
        `
            <div style="text-align: left;">
                <div class="form-group">
                    <label>${t('uploadAvatar')}</label>
                    <input type="file" id="avatarUpload" accept="image/*">
                </div>
            </div>
        `,
        [
            {
                label: t('cancel'),
                action: 'cancel',
                callback: () => {}
            },
            {
                label: t('submit'),
                action: 'save',
                type: 'success',
                callback: () => {
                    const fileInput = document.getElementById('avatarUpload');
                    if (fileInput.files.length > 0) {
                        const file = fileInput.files[0];
                        const reader = new FileReader();
                        reader.onload = (e) => {
                            appState.currentUser.avatar = e.target.result;
                            saveToLocalStorage(`user_${appState.currentUser.id}`, appState.currentUser);
                            showAlert(t('saveSuccess'), 'success');
                            setTimeout(() => showProfilePage(), 500);
                        };
                        reader.readAsDataURL(file);
                    }
                }
            }
        ]
    );
}

function handleLogout() {
    showModal(
        t('logout'),
        t('confirmLogout'),
        [
            {
                label: t('cancel'),
                action: 'cancel',
                callback: () => {}
            },
            {
                label: t('logout'),
                action: 'logout',
                type: 'danger',
                callback: () => {
                    appState.currentUser = null;
                    playSound('button');
                    showAlert(t('logoutSuccess'), 'success');
                    setTimeout(() => navigateTo('login'), 1000);
                }
            }
        ]
    );
}

function handleDeleteAccount() {
    showModal(
        t('deleteAccount'),
        t('confirmDelete'),
        [
            {
                label: t('cancel'),
                action: 'cancel',
                callback: () => {}
            },
            {
                label: t('deleteEverything'),
                action: 'delete',
                type: 'danger',
                callback: () => {
                    const userId = appState.currentUser.id;
                    
                    // Remove user from allUsers
                    let allUsers = getFromLocalStorage('allUsers', []);
                    allUsers = allUsers.filter(u => u.id !== userId);
                    saveToLocalStorage('allUsers', allUsers);
                    
                    // Clear user data
                    const keysToDelete = [
                        `user_${userId}_settings`,
                        `user_${userId}_stats`,
                        `user_${userId}_gameStats`,
                        `user_${userId}_achievements`,
                        `user_${userId}_gameHistory`
                    ];
                    
                    keysToDelete.forEach(key => localStorage.removeItem(`jg_${key}`));
                    
                    appState.currentUser = null;
                    playSound('button');
                    showAlert(t('deleteSuccess'), 'success');
                    setTimeout(() => navigateTo('login'), 1500);
                }
            }
        ]
    );
}

// ==================== SETTINGS PAGE ====================

function showSettingsPage() {
    const mainContent = document.getElementById('mainContent');
    
    mainContent.innerHTML = `
        <div class="page" style="max-width: 500px; margin: 0 auto;">
            <h1 style="margin-bottom: 30px;">${t('settings')}</h1>
            
            <div class="settings-section">
                <h2>${t('display')}</h2>
                <div class="settings-item">
                    <span class="settings-label">${t('theme')}</span>
                    <div class="settings-control">
                        <button class="btn btn-secondary" style="padding: 8px 16px;" onclick="setTheme('dark')">
                            ${t('darkTheme')}
                        </button>
                        <button class="btn btn-secondary" style="padding: 8px 16px; margin-left: 10px;" onclick="setTheme('light')">
                            ${t('lightTheme')}
                        </button>
                    </div>
                </div>
                <div class="settings-item">
                    <span class="settings-label">${t('language')}</span>
                    <select id="languageSelect" onchange="changeLanguage()">
                        <option value="en" ${appState.settings.language === 'en' ? 'selected' : ''}>English</option>
                        <option value="id" ${appState.settings.language === 'id' ? 'selected' : ''}>Bahasa Indonesia</option>
                    </select>
                </div>
            </div>
            
            <div class="settings-section">
                <h2>${t('audio')}</h2>
                <div class="settings-item">
                    <span class="settings-label">${t('soundEffects')}</span>
                    <div class="toggle-switch ${appState.settings.soundEnabled ? 'active' : ''}" 
                         onclick="toggleSoundEffects(this)"></div>
                </div>
            </div>
            
            <div class="settings-section">
                <h2>${t('gameDefaults')}</h2>
                <div class="settings-item">
                    <span class="settings-label">${t('defaultDifficulty')}</span>
                    <select id="difficultySelect" onchange="updateGameDefaults()">
                        <option value="easy" ${appState.settings.defaultDifficulty === 'easy' ? 'selected' : ''}>Easy</option>
                        <option value="medium" ${appState.settings.defaultDifficulty === 'medium' ? 'selected' : ''}>Medium</option>
                        <option value="hard" ${appState.settings.defaultDifficulty === 'hard' ? 'selected' : ''}>Hard</option>
                        <option value="extreme" ${appState.settings.defaultDifficulty === 'extreme' ? 'selected' : ''}>Extreme</option>
                    </select>
                </div>
                <div class="settings-item">
                    <span class="settings-label">${t('defaultMode')}</span>
                    <select id="modeSelect" onchange="updateGameDefaults()">
                        <option value="hangman" ${appState.settings.defaultMode === 'hangman' ? 'selected' : ''}>Hangman</option>
                        <option value="wordle" ${appState.settings.defaultMode === 'wordle' ? 'selected' : ''}>Wordle</option>
                        <option value="scramble" ${appState.settings.defaultMode === 'scramble' ? 'selected' : ''}>Scramble</option>
                        <option value="cluemaster" ${appState.settings.defaultMode === 'cluemaster' ? 'selected' : ''}>Clue Master</option>
                    </select>
                </div>
                <div class="settings-item">
                    <span class="settings-label">${t('defaultCategory')}</span>
                    <select id="categorySelect" onchange="updateGameDefaults()">
                        <option value="random">Random All</option>
                        <option value="animals">Animals</option>
                        <option value="food">Food</option>
                        <option value="countries">Countries</option>
                        <option value="tech">Technology</option>
                        <option value="movies">Movies</option>
                        <option value="sports">Sports</option>
                        <option value="music">Music</option>
                    </select>
                </div>
            </div>
        </div>
    `;
}

function changeLanguage() {
    const lang = document.getElementById('languageSelect').value;
    appState.settings.language = lang;
    saveUserData();
    showAlert(t('saveSuccess'), 'success');
    setTimeout(() => location.reload(), 500);
}

function toggleSoundEffects(element) {
    appState.settings.soundEnabled = !appState.settings.soundEnabled;
    element.classList.toggle('active');
    saveUserData();
    showAlert(t('saveSuccess'), 'success');
}

function updateGameDefaults() {
    appState.settings.defaultDifficulty = document.getElementById('difficultySelect').value;
    appState.settings.defaultMode = document.getElementById('modeSelect').value;
    appState.settings.defaultCategory = document.getElementById('categorySelect').value;
    saveUserData();
    showAlert(t('saveSuccess'), 'success');
}

// ==================== HOW TO PLAY PAGE ====================

function showHowToPlayPage() {
    const mainContent = document.getElementById('mainContent');
    
    mainContent.innerHTML = `
        <div class="page how-to-play">
            <h1 style="margin-bottom: 30px;">${t('howToPlay')}</h1>
            
            <div class="how-section">
                <h2>What is Just Guess?</h2>
                <p>Just Guess is a word guessing game with multiple game modes and difficulty levels. Test your vocabulary and have fun!</p>
            </div>
            
            <div class="how-section">
                <h2>Game Modes</h2>
                <h3>🎯 Hangman</h3>
                <p>Guess the word letter by letter. You have limited lives. Wrong guesses will reduce your lives.</p>
                <ul>
                    <li>Click or type letters to guess</li>
                    <li>Correct guesses reveal the letters</li>
                    <li>Wrong guesses cost you a life</li>
                    <li>Guess the word before running out of lives</li>
                </ul>
                
                <h3>🔤 Wordle</h3>
                <p>Guess the word in 6 attempts. Get feedback on each guess with color-coded hints.</p>
                <ul>
                    <li>Type 5 letters and press Enter</li>
                    <li><span style="background: rgba(0, 255, 0, 0.2); padding: 2px 6px; border-radius: 3px;">Green</span> = Correct letter in correct position</li>
                    <li><span style="background: rgba(255, 170, 0, 0.2); padding: 2px 6px; border-radius: 3px;">Yellow</span> = Correct letter in wrong position</li>
                    <li><span style="background: rgba(128, 128, 128, 0.2); padding: 2px 6px; border-radius: 3px;">Grey</span> = Letter not in word</li>
                </ul>
                
                <h3>🔀 Scramble</h3>
                <p>Unscramble the letters to form the correct word. You have 60 seconds!</p>
                <ul>
                    <li>Letters are shuffled randomly</li>
                    <li>Type the correct word</li>
                    <li>Beat the timer for bonus points</li>
                    <li>3 attempts to get it right</li>
                </ul>
                
                <h3>💡 Clue Master</h3>
                <p>You get a clue about the word. Type your answer. 45 seconds on the clock!</p>
                <ul>
                    <li>Read the clue carefully</li>
                    <li>Type your answer</li>
                    <li>3 attempts to guess correctly</li>
                    <li>Faster guesses earn more points</li>
                </ul>
            </div>
            
            <div class="how-section">
                <h2>Difficulty Levels</h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px;">
                    <div style="background: var(--bg-tertiary); padding: 15px; border-radius: var(--border-radius);">
                        <strong style="color: var(--accent-tertiary);">Easy</strong>
                        <p style="font-size: 0.9rem; color: var(--text-secondary); margin-top: 8px;">Short words, more lives/attempts</p>
                    </div>
                    <div style="background: var(--bg-tertiary); padding: 15px; border-radius: var(--border-radius);">
                        <strong style="color: var(--warning);">Medium</strong>
                        <p style="font-size: 0.9rem; color: var(--text-secondary); margin-top: 8px;">Regular words, balanced challenge</p>
                    </div>
                    <div style="background: var(--bg-tertiary); padding: 15px; border-radius: var(--border-radius);">
                        <strong style="color: var(--danger);">Hard</strong>
                        <p style="font-size: 0.9rem; color: var(--text-secondary); margin-top: 8px;">Longer words, fewer lives</p>
                    </div>
                    <div style="background: var(--bg-tertiary); padding: 15px; border-radius: var(--border-radius);">
                        <strong style="color: #ff3333;">Extreme</strong>
                        <p style="font-size: 0.9rem; color: var(--text-secondary); margin-top: 8px;">Very hard, minimal help</p>
                    </div>
                </div>
            </div>
            
            <div class="how-section">
                <h2>Hints System</h2>
                <p>You get 3 hints per game that reset daily at midnight. Use them wisely!</p>
                <ul>
                    <li><strong>Reveal Letter:</strong> Show one random letter</li>
                    <li><strong>Remove Wrong:</strong> Remove an incorrect option</li>
                    <li><strong>Show Category:</strong> Reveal the word category</li>
                </ul>
            </div>
            
            <div class="how-section">
                <h2>Scoring</h2>
                <p>Your score is calculated based on:</p>
                <ul>
                    <li><strong>Remaining Lives/Attempts:</strong> More lives left = higher base score</li>
                    <li><strong>Speed Bonus:</strong> Faster completion = bonus points</li>
                    <li><strong>Difficulty Multiplier:</strong> Harder = more points (up to 3x)</li>
                    <li><strong>Streak Multiplier:</strong> Win streak multiplies your score</li>
                </ul>
            </div>
            
            <div class="how-section">
                <h2>Achievements</h2>
                <p>Unlock badges by completing special tasks:</p>
                <ul>
                    <li>First Win</li>
                    <li>Speed Runner (complete in < 20s)</li>
                    <li>Streak King (10+ win streak)</li>
                    <li>Perfect Score (win without mistakes)</li>
                    <li>And more!</li>
                </ul>
            </div>
            
            <div class="how-section">
                <h2>Tips & Tricks</h2>
                <ul>
                    <li>Start with common letters like E, A, R, S, T</li>
                    <li>Look for common word patterns</li>
                    <li>Use hints strategically</li>
                    <li>Practice different modes to improve</li>
                    <li>Build your streak for higher scores</li>
                </ul>
            </div>
        </div>
    `;
}

// ==================== GAME MENU PAGE ====================

let selectedMode = '';
let selectedDifficulty = '';
let selectedCategory = '';

function showGameMenuPage() {
    const mainContent = document.getElementById('mainContent');
    
    selectedMode = '';
    selectedDifficulty = '';
    selectedCategory = '';
    
    mainContent.innerHTML = `
        <div class="page game-menu">
            <h1 style="margin-bottom: 30px;">${t('play')}</h1>
            
            <div class="game-section">
                <h2>${t('selectMode')}</h2>
                <div class="options-grid" id="modeGrid">
                    <div class="option-card" onclick="selectMode('hangman')">
                        <div class="option-icon">🎯</div>
                        <div class="option-name">Hangman</div>
                        <div class="option-desc">Guess letters</div>
                    </div>
                    <div class="option-card" onclick="selectMode('wordle')">
                        <div class="option-icon">🔤</div>
                        <div class="option-name">Wordle</div>
                        <div class="option-desc">Guess words</div>
                    </div>
                    <div class="option-card" onclick="selectMode('scramble')">
                        <div class="option-icon">🔀</div>
                        <div class="option-name">Scramble</div>
                        <div class="option-desc">Unscramble</div>
                    </div>
                    <div class="option-card" onclick="selectMode('cluemaster')">
                        <div class="option-icon">💡</div>
                        <div class="option-name">Clue Master</div>
                        <div class="option-desc">Use clues</div>
                    </div>
                </div>
            </div>
            
            <div class="game-section">
                <h2>${t('selectDifficulty')}</h2>
                <div class="options-grid" id="difficultyGrid">
                    <div class="option-card" onclick="selectDifficulty('easy')">
                        <div class="option-icon">🟢</div>
                        <div class="option-name">Easy</div>
                    </div>
                    <div class="option-card" onclick="selectDifficulty('medium')">
                        <div class="option-icon">🟡</div>
                        <div class="option-name">Medium</div>
                    </div>
                    <div class="option-card" onclick="selectDifficulty('hard')">
                        <div class="option-icon">🔴</div>
                        <div class="option-name">Hard</div>
                    </div>
                    <div class="option-card" onclick="selectDifficulty('extreme')">
                        <div class="option-icon">💀</div>
                        <div class="option-name">Extreme</div>
                    </div>
                </div>
            </div>
            
            <div class="game-section">
                <h2>${t('selectCategory')}</h2>
                <div class="options-grid" id="categoryGrid">
                    <div class="option-card" onclick="selectCategory('random')">
                        <div class="option-icon">🎲</div>
                        <div class="option-name">Random All</div>
                    </div>
                    <div class="option-card" onclick="selectCategory('animals')">
                        <div class="option-icon">🐾</div>
                        <div class="option-name">Animals</div>
                    </div>
                    <div class="option-card" onclick="selectCategory('food')">
                        <div class="option-icon">🍕</div>
                        <div class="option-name">Food</div>
                    </div>
                    <div class="option-card" onclick="selectCategory('countries')">
                        <div class="option-icon">🏙️</div>
                        <div class="option-name">Countries</div>
                    </div>
                    <div class="option-card" onclick="selectCategory('tech')">
                        <div class="option-icon">💻</div>
                        <div class="option-name">Technology</div>
                    </div>
                    <div class="option-card" onclick="selectCategory('movies')">
                        <div class="option-icon">🎬</div>
                        <div class="option-name">Movies</div>
                    </div>
                    <div class="option-card" onclick="selectCategory('sports')">
                        <div class="option-icon">⚽</div>
                        <div class="option-name">Sports</div>
                    </div>
                    <div class="option-card" onclick="selectCategory('music')">
                        <div class="option-icon">🎵</div>
                        <div class="option-name">Music</div>
                    </div>
                </div>
            </div>
            
            <div style="text-align: center; margin-top: 40px;">
                <button class="btn btn-primary" style="padding: 15px 40px; font-size: 1.1rem;" onclick="confirmGameStart()">
                    Start Game
                </button>
            </div>
        </div>
    `;
}

function selectMode(mode) {
    selectedMode = mode;
    document.querySelectorAll('#modeGrid .option-card').forEach(card => {
        card.classList.remove('selected');
    });
    event.target.closest('.option-card').classList.add('selected');
}

function selectDifficulty(difficulty) {
    selectedDifficulty = difficulty;
    document.querySelectorAll('#difficultyGrid .option-card').forEach(card => {
        card.classList.remove('selected');
    });
    event.target.closest('.option-card').classList.add('selected');
}

function selectCategory(category) {
    selectedCategory = category;
    document.querySelectorAll('#categoryGrid .option-card').forEach(card => {
        card.classList.remove('selected');
    });
    event.target.closest('.option-card').classList.add('selected');
}

function confirmGameStart() {
    if (!selectedMode || !selectedDifficulty || !selectedCategory) {
        showAlert('Please select mode, difficulty, and category', 'warning');
        return;
    }
    
    showModal(
        'Start Game',
        `Play <strong>${selectedMode}</strong> on <strong>${selectedDifficulty}</strong> difficulty with <strong>${selectedCategory}</strong> category?`,
        [
            {
                label: 'Cancel',
                action: 'cancel',
                callback: () => {}
            },
            {
                label: 'Start',
                action: 'start',
                type: 'success',
                callback: () => {
                    playSound('button');
                    window.location.hash = `#/game?mode=${selectedMode}&difficulty=${selectedDifficulty}&category=${selectedCategory}`;
                }
            }
        ]
    );
}

// ==================== GAME LOGIC ====================

function initializeGame(mode, difficulty, category) {
    const categoryToUse = category === 'random' ? 
        ['animals', 'food', 'countries', 'tech', 'movies', 'sports', 'music'][Math.floor(Math.random() * 7)] : 
        category;
    
    const lang = appState.settings.language;
    const categoryData = appState.allData[lang][categoryToUse][difficulty.toLowerCase()];
    
    if (!categoryData || categoryData.length === 0) {
        showAlert('No words available for this category', 'danger');
        navigateTo('game-menu');
        return;
    }
    
    const wordObj = categoryData[Math.floor(Math.random() * categoryData.length)];
    
    const difficultyConfig = {
        easy: { lives: 8, attempts: 8, timeLimit: 120, hintsPerGame: 3, multiplier: 1 },
        medium: { lives: 6, attempts: 6, timeLimit: 90, hintsPerGame: 3, multiplier: 1.5 },
        hard: { lives: 4, attempts: 4, timeLimit: 60, hintsPerGame: 3, multiplier: 2 },
        extreme: { lives: 3, attempts: 3, timeLimit: 45, hintsPerGame: 3, multiplier: 3 }
    };
    
    const config = difficultyConfig[difficulty.toLowerCase()];
    
    appState.currentGame = {
        mode: mode,
        difficulty: difficulty,
        category: categoryToUse,
        word: wordObj.word.toUpperCase(),
        clue: wordObj.clue,
        startTime: Date.now(),
        timeRemaining: mode === 'scramble' ? 60 : mode === 'cluemaster' ? 45 : config.timeLimit,
        lives: config.lives,
        attempts: config.attempts,
        hintsUsed: 0,
        hintsAvailable: config.hintsPerGame,
        guessedLetters: [],
        score: 0,
        multiplier: config.multiplier,
        isGameOver: false,
        isWon: false,
        revealedLetters: new Set(),
        wordleGuesses: []
    };
    
    appState.gameInProgress = true;
}

function showGamePage() {
    const mainContent = document.getElementById('mainContent');
    const game = appState.currentGame;
    
    if (game.mode === 'hangman') {
        showHangmanGame();
    } else if (game.mode === 'wordle') {
        showWordleGame();
    } else if (game.mode === 'scramble') {
        showScrambleGame();
    } else if (game.mode === 'cluemaster') {
        showClueGame();
    }
}

function showHangmanGame() {
    const mainContent = document.getElementById('mainContent');
    const game = appState.currentGame;
    
    mainContent.innerHTML = `
        <div class="page game-container">
            <div class="game-header">
                <div class="game-info">
                    <div class="info-item">
                        <div class="info-label">Score</div>
                        <div class="info-value" id="gameScore">0</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Category</div>
                        <div class="info-value" style="font-size: 1rem;">${game.category}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Difficulty</div>
                        <div class="info-value" style="font-size: 1rem;">${game.difficulty}</div>
                    </div>
                </div>
                <div class="game-timer" id="gameTimer">2:00</div>
            </div>
            
            <div class="game-content">
                <div class="game-title">Hangman - Guess the word</div>
                <div class="game-clue">${game.clue}</div>
                
                <div class="hangman-drawing" id="hangmanDrawing">
                    ${getHangmanStage(game.lives)}
                </div>
                
                <div class="game-word-display" id="wordDisplay">
                    <!-- Letters will be shown here -->
                </div>
                
                <div class="keyboard" id="keyboard">
                    <!-- Keyboard will be generated here -->
                </div>
                
                <div class="game-status">
                    <div class="status-item">
                        <div class="status-label">Lives Left</div>
                        <div class="status-content" id="livesDisplay">
                            <!-- Lives will be shown here -->
                        </div>
                    </div>
                    <div class="status-item">
                        <div class="status-label">Hints</div>
                        <div class="status-content" id="hintsDisplay">
                            <!-- Hints will be shown here -->
                        </div>
                    </div>
                </div>
                
                <div class="game-actions">
                    <button class="btn btn-secondary" onclick="navigateTo('game-menu')">Back</button>
                </div>
            </div>
        </div>
    `;
    
    initHangmanGame();
    startGameTimer();
}

function showWordleGame() {
    const mainContent = document.getElementById('mainContent');
    const game = appState.currentGame;
    
    mainContent.innerHTML = `
        <div class="page game-container">
            <div class="game-header">
                <div class="game-info">
                    <div class="info-item">
                        <div class="info-label">Attempts</div>
                        <div class="info-value" id="gameScore">${game.attempts - game.wordleGuesses.length}/${game.attempts}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Category</div>
                        <div class="info-value" style="font-size: 1rem;">${game.category}</div>
                    </div>
                </div>
            </div>
            
            <div class="game-content">
                <div class="game-title">Wordle - Guess the word</div>
                <div class="game-clue">${game.clue}</div>
                
                <div id="wordleBoard">
                    <!-- Wordle board will be generated here -->
                </div>
                
                <div class="input-area">
                    <input type="text" class="game-input" id="wordleInput" placeholder="Enter word" maxlength="${game.word.length}">
                    <button class="btn btn-primary game-input-btn" onclick="submitWordleGuess()">Submit</button>
                </div>
                
                <div class="game-status">
                    <div class="status-item">
                        <div class="status-label">Hints Available</div>
                        <div class="status-content">
                            <button class="hint-btn" onclick="useHintWordle()" ${game.hintsUsed >= game.hintsAvailable ? 'disabled' : ''}>
                                Hint (${game.hintsAvailable - game.hintsUsed})
                            </button>
                        </div>
                    </div>
                </div>
                
                <div class="game-actions">
                    <button class="btn btn-secondary" onclick="navigateTo('game-menu')">Back</button>
                </div>
            </div>
        </div>
    `;
    
    initWordleGame();
    startGameTimer();
}

function showScrambleGame() {
    const mainContent = document.getElementById('mainContent');
    const game = appState.currentGame;
    const scrambledLetters = game.word.split('').sort(() => Math.random() - 0.5).join('');
    
    mainContent.innerHTML = `
        <div class="page game-container">
            <div class="game-header">
                <div class="game-info">
                    <div class="info-item">
                        <div class="info-label">Attempts Left</div>
                        <div class="info-value">${game.attempts}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Category</div>
                        <div class="info-value" style="font-size: 1rem;">${game.category}</div>
                    </div>
                </div>
                <div class="game-timer" id="gameTimer">1:00</div>
            </div>
            
            <div class="game-content">
                <div class="game-title">Scramble - Unscramble the letters</div>
                
                <div style="background: var(--bg-tertiary); border: 2px solid var(--accent-primary); border-radius: var(--border-radius); padding: 30px; text-align: center; margin-bottom: 30px;">
                    <div style="font-size: 2rem; letter-spacing: 8px; font-weight: 700; color: var(--accent-primary);">
                        ${scrambledLetters.split('').join(' ')}
                    </div>
                </div>
                
                <div class="input-area">
                    <input type="text" class="game-input" id="scrambleInput" placeholder="Enter the word" autocomplete="off">
                    <button class="btn btn-primary game-input-btn" onclick="submitScrambleGuess()">Submit</button>
                </div>
                
                <div class="game-actions">
                    <button class="btn btn-secondary" onclick="navigateTo('game-menu')">Back</button>
                </div>
            </div>
        </div>
    `;
    
    startGameTimer();
    document.getElementById('scrambleInput').focus();
}

function showClueGame() {
    const mainContent = document.getElementById('mainContent');
    const game = appState.currentGame;
    
    mainContent.innerHTML = `
        <div class="page game-container">
            <div class="game-header">
                <div class="game-info">
                    <div class="info-item">
                        <div class="info-label">Attempts Left</div>
                        <div class="info-value">${game.attempts}</div>
                    </div>
                </div>
                <div class="game-timer" id="gameTimer">0:45</div>
            </div>
            
            <div class="game-content">
                <div class="game-title">Clue Master - Read and guess</div>
                <div class="game-clue" style="font-size: 1.1rem; font-weight: 500;">${game.clue}</div>
                
                <div class="input-area">
                    <input type="text" class="game-input" id="clueInput" placeholder="Enter your answer" autocomplete="off">
                    <button class="btn btn-primary game-input-btn" onclick="submitClueGuess()">Submit</button>
                </div>
                
                <div class="game-actions">
                    <button class="btn btn-secondary" onclick="navigateTo('game-menu')">Back</button>
                </div>
            </div>
        </div>
    `;
    
    startGameTimer();
    document.getElementById('clueInput').focus();
}

// ==================== HANGMAN GAME FUNCTIONS ====================

function initHangmanGame() {
    const game = appState.currentGame;
    const wordLength = game.word.length;
    
    // Display word
    let wordDisplay = '';
    for (let i = 0; i < wordLength; i++) {
        wordDisplay += '<div class="letter-tile revealed"></div>';
    }
    document.getElementById('wordDisplay').innerHTML = wordDisplay;
    updateWordDisplay();
    
    // Create keyboard
    const keyboard = document.getElementById('keyboard');
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    letters.forEach(letter => {
        const btn = document.createElement('button');
        btn.textContent = letter;
        btn.className = 'key-btn';
        btn.onclick = () => guessLetter(letter, btn);
        keyboard.appendChild(btn);
    });
    
    updateHangmanDisplay();
}

function updateWordDisplay() {
    const game = appState.currentGame;
    const word = game.word;
    const display = document.getElementById('wordDisplay');
    let html = '';
    
    for (let i = 0; i < word.length; i++) {
        const letter = word[i];
        const isRevealed = game.revealedLetters.has(i);
        const className = isRevealed ? 'letter-tile revealed' : 'letter-tile';
        const content = isRevealed ? letter : '';
        html += `<div class="${className}">${content}</div>`;
    }
    
    display.innerHTML = html;
}

function updateHangmanDisplay() {
    const game = appState.currentGame;
    
    // Update hangman drawing
    document.getElementById('hangmanDrawing').innerHTML = getHangmanStage(game.lives);
    
    // Update lives
    let livesHTML = '';
    for (let i = 0; i < game.lives; i++) {
        livesHTML += '<div class="life-icon">❤️</div>';
    }
    document.getElementById('livesDisplay').innerHTML = livesHTML;
    
    // Update hints
    let hintsHTML = '';
    for (let i = 0; i < game.hintsAvailable; i++) {
        const className = i < game.hintsUsed ? 'hint-btn' : 'hint-btn';
        hintsHTML += `<button class="${className}" ${i < game.hintsUsed ? 'disabled' : ''} onclick="useHintHangman()">💡</button>`;
    }
    document.getElementById('hintsDisplay').innerHTML = hintsHTML;
}

function guessLetter(letter, btn) {
    if (appState.currentGame.isGameOver) return;
    
    btn.disabled = true;
    
    const game = appState.currentGame;
    const word = game.word;
    let correct = false;
    
    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            game.revealedLetters.add(i);
            correct = true;
        }
    }
    
    if (correct) {
        btn.classList.add('correct');
        playSound('correct');
        
        // Check if won
        if (game.revealedLetters.size === word.length) {
            endGameWin();
        }
    } else {
        btn.classList.add('wrong');
        game.lives--;
        playSound('wrong');
        
        if (game.lives <= 0) {
            endGameLose();
        }
    }
    
    updateWordDisplay();
    updateHangmanDisplay();
}

function useHintHangman() {
    const game = appState.currentGame;
    if (game.hintsUsed >= game.hintsAvailable) return;
    
    game.hintsUsed++;
    
    // Reveal a random unrevealed letter
    const unrevealedIndices = [];
    for (let i = 0; i < game.word.length; i++) {
        if (!game.revealedLetters.has(i)) {
            unrevealedIndices.push(i);
        }
    }
    
    if (unrevealedIndices.length > 0) {
        const randomIndex = unrevealedIndices[Math.floor(Math.random() * unrevealedIndices.length)];
        game.revealedLetters.add(randomIndex);
        updateWordDisplay();
        
        // Check if won
        if (game.revealedLetters.size === game.word.length) {
            endGameWin();
        }
    }
    
    appState.stats.totalHintsUsed++;
    updateHangmanDisplay();
    playSound('button');
}

function getHangmanStage(lives) {
    const stages = [
        '😵', // 0 lives - dead
        '😣', // 1 life
        '😟', // 2 lives
        '😕', // 3 lives
        '😐', // 4 lives
        '🙂', // 5 lives
        '😊', // 6 lives
        '😄', // 7 lives
        '😄'  // 8 lives
    ];
    return stages[Math.min(8, 8 - lives)];
}

// ==================== WORDLE GAME FUNCTIONS ====================

function initWordleGame() {
    document.getElementById('wordleInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') submitWordleGuess();
    });
    
    renderWordleBoard();
}

function renderWordleBoard() {
    const game = appState.currentGame;
    const board = document.getElementById('wordleBoard');
    const wordLength = game.word.length;
    let html = '';
    
    for (let row = 0; row < game.attempts; row++) {
        for (let col = 0; col < wordLength; col++) {
            const guess = game.wordleGuesses[row];
            let className = 'letter-tile';
            let content = '';
            
            if (guess) {
                const letter = guess[col];
                content = letter;
                
                if (letter === game.word[col]) {
                    className += ' revealed'; // Correct position
                } else if (game.word.includes(letter)) {
                    className += ' wrong'; // Wrong position
                }
            }
            
            html += `<div class="${className}">${content}</div>`;
        }
    }
    
    board.innerHTML = html;
}

function submitWordleGuess() {
    const game = appState.currentGame;
    const input = document.getElementById('wordleInput');
    const guess = input.value.toUpperCase().trim();
    
    if (guess.length !== game.word.length) {
        showAlert(`Word must be ${game.word.length} letters long`, 'warning');
        return;
    }
    
    game.wordleGuesses.push(guess);
    input.value = '';
    
    if (guess === game.word) {
        endGameWin();
    } else if (game.wordleGuesses.length >= game.attempts) {
        endGameLose();
    }
    
    renderWordleBoard();
    playSound('button');
}

function useHintWordle() {
    const game = appState.currentGame;
    if (game.hintsUsed >= game.hintsAvailable) return;
    
    game.hintsUsed++;
    appState.stats.totalHintsUsed++;
    
    showAlert('Look for letters in green and yellow positions!', 'info');
    playSound('button');
}

// ==================== SCRAMBLE GAME FUNCTIONS ====================

function submitScrambleGuess() {
    const game = appState.currentGame;
    const input = document.getElementById('scrambleInput');
    const guess = input.value.toUpperCase().trim();
    
    if (guess.length === 0) {
        showAlert('Enter a word', 'warning');
        return;
    }
    
    if (guess === game.word) {
        endGameWin();
    } else {
        game.attempts--;
        playSound('wrong');
        
        if (game.attempts <= 0) {
            endGameLose();
        } else {
            showAlert('Wrong! Try again.', 'danger');
            input.value = '';
            input.focus();
        }
    }
}

// ==================== CLUE GAME FUNCTIONS ====================

function submitClueGuess() {
    const game = appState.currentGame;
    const input = document.getElementById('clueInput');
    const guess = input.value.toUpperCase().trim();
    
    if (guess.length === 0) {
        showAlert('Enter your answer', 'warning');
        return;
    }
    
    if (guess === game.word) {
        endGameWin();
    } else {
        game.attempts--;
        playSound('wrong');
        
        if (game.attempts <= 0) {
            endGameLose();
        } else {
            showAlert('Wrong! Try again.', 'danger');
            input.value = '';
            input.focus();
        }
    }
}

// ==================== GAME TIMER ====================

let gameTimerInterval;

function startGameTimer() {
    gameTimerInterval = setInterval(() => {
        const game = appState.currentGame;
        if (game.isGameOver) {
            clearInterval(gameTimerInterval);
            return;
        }
        
        game.timeRemaining--;
        
        const timer = document.getElementById('gameTimer');
        if (timer) {
            timer.textContent = formatTime(game.timeRemaining);
            
            if (game.timeRemaining <= 10) {
                timer.classList.add('danger');
            } else if (game.timeRemaining <= 30) {
                timer.classList.add('warning');
            }
        }
        
        if (game.timeRemaining <= 0) {
            clearInterval(gameTimerInterval);
            endGameLose();
        }
    }, 1000);
}

// ==================== GAME END FUNCTIONS ====================

function calculateScore() {
    const game = appState.currentGame;
    
    const basePoints = (game.lives > 0 ? game.lives : game.attempts) * 100;
    const timeBonus = Math.max(0, game.timeRemaining * 5);
    const difficultyMultiplier = game.multiplier;
    
    let streakMultiplier = 1;
    if (appState.stats.currentStreak >= 10) streakMultiplier = 3;
    else if (appState.stats.currentStreak >= 5) streakMultiplier = 2;
    else if (appState.stats.currentStreak >= 3) streakMultiplier = 1.5;
    
    const finalScore = Math.round((basePoints + timeBonus) * difficultyMultiplier * streakMultiplier);
    return finalScore;
}

function endGameWin() {
    const game = appState.currentGame;
    if (game.isGameOver) return;
    
    game.isGameOver = true;
    game.isWon = true;
    
    clearInterval(gameTimerInterval);
    playSound('win');
    
    // Update stats
    appState.stats.totalGamesPlayed++;
    appState.stats.totalWins++;
    appState.stats.currentStreak++;
    
    const score = calculateScore();
    game.score = score;
    
    if (score > appState.stats.bestScore) {
        appState.stats.bestScore = score;
    }
    
    // Add to history
    appState.gameHistory.unshift({
        id: Date.now(),
        mode: game.mode,
        difficulty: game.difficulty,
        category: game.category,
        word: game.word,
        result: 'win',
        score: score,
        time: Math.round((Date.now() - game.startTime) / 1000),
        streak: appState.stats.currentStreak,
        date: new Date().toISOString()
    });
    
    checkAchievements('win', score);
    saveUserData();
    
    showGameResult(true, score);
}

function endGameLose() {
    const game = appState.currentGame;
    if (game.isGameOver) return;
    
    game.isGameOver = true;
    game.isWon = false;
    
    clearInterval(gameTimerInterval);
    playSound('lose');
    
    // Update stats
    appState.stats.totalGamesPlayed++;
    appState.stats.currentStreak = 0;
    
    // Add to history
    appState.gameHistory.unshift({
        id: Date.now(),
        mode: game.mode,
        difficulty: game.difficulty,
        category: game.category,
        word: game.word,
        result: 'lose',
        score: 0,
        time: Math.round((Date.now() - game.startTime) / 1000),
        streak: 0,
        date: new Date().toISOString()
    });
    
    saveUserData();
    showGameResult(false, 0);
}

function showGameResult(isWon, score) {
    const game = appState.currentGame;
    const mainContent = document.getElementById('mainContent');
    
    mainContent.innerHTML = `
        <div class="page game-container">
            <div class="game-result">
                <div class="result-status ${isWon ? 'win' : 'lose'}">
                    ${isWon ? '🎉' : '💀'}
                </div>
                <h2 class="result-title">
                    ${isWon ? 'You Won!' : 'Game Over!'}
                </h2>
                
                <div class="result-word">
                    ${game.word}
                </div>
                
                <div class="result-stats">
                    <div class="result-stat">
                        <div class="result-stat-value">${score}</div>
                        <div class="result-stat-label">Score</div>
                    </div>
                    <div class="result-stat">
                        <div class="result-stat-value">${appState.stats.currentStreak}</div>
                        <div class="result-stat-label">Streak</div>
                    </div>
                    <div class="result-stat">
                        <div class="result-stat-value">${appState.stats.bestScore}</div>
                        <div class="result-stat-label">Best Score</div>
                    </div>
                </div>
                
                <div id="achievementNotification"></div>
                
                <div class="game-actions">
                    <button class="btn btn-primary" onclick="showGameMenuPage(); handleRouting()">
                        Play Again
                    </button>
                    <button class="btn btn-secondary" onclick="navigateTo('home')">
                        Home
                    </button>
                </div>
            </div>
        </div>
    `;
}

function checkAchievements(result, score) {
    if (result !== 'win') return;
    
    const achievements = appState.achievements;
    
    // First Win
    if (!achievements.first_win.unlocked) {
        achievements.first_win.unlocked = true;
        achievements.first_win.unlockedDate = new Date().toISOString();
        showAchievementUnlock('first_win');
    }
    
    // Speed Runner
    if (!achievements.speed_runner.unlocked && appState.currentGame.timeRemaining > 40) {
        achievements.speed_runner.unlocked = true;
        achievements.speed_runner.unlockedDate = new Date().toISOString();
        showAchievementUnlock('speed_runner');
    }
    
    // Perfect Score
    if (!achievements.perfect_score.unlocked && appState.currentGame.lives === appState.currentGame.lives) {
        achievements.perfect_score.unlocked = true;
        achievements.perfect_score.unlockedDate = new Date().toISOString();
        showAchievementUnlock('perfect_score');
    }
    
    // Streak King
    if (!achievements.streak_king.unlocked && appState.stats.currentStreak >= 10) {
        achievements.streak_king.unlocked = true;
        achievements.streak_king.unlockedDate = new Date().toISOString();
        showAchievementUnlock('streak_king');
    }
}

function showAchievementUnlock(achId) {
    const ach = appState.achievements[achId];
    const container = document.getElementById('achievementNotification');
    
    if (container) {
        container.innerHTML = `
            <div class="achievement-unlock">
                <div class="achievement-unlock-title">Achievement Unlocked!</div>
                <div class="achievement-unlock-icon">${ach.icon}</div>
                <div class="achievement-unlock-name">${ach.name}</div>
            </div>
        `;
        playSound('achievement');
    }
}

// ==================== INIT ====================

document.addEventListener('DOMContentLoaded', async () => {
    const initialized = await initializeApp();
    if (initialized) {
        handleRouting();
        window.addEventListener('hashchange', handleRouting);
    }
});