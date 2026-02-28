    // Ініціалізація сніжинок
    var snowflakes = new Snowflakes({
        color: '#ffffff',
        count: 50,
        minOpacity: 0.2,
        maxOpacity: 0.6
    });

    // Функція відкриття інструкції (ОБОВ'ЯЗКОВО В ТЕГУ SCRIPT)
    function toggleInstall() {
    var guide = document.getElementById("install-guide");
    // Просто перемикаємо клас
    guide.classList.toggle("show");
}

function expandImg(img) {
    var lightbox = document.getElementById("lightbox");
    var lightboxImg = document.getElementById("lightbox-img");
    
    lightboxImg.src = img.src; // Беремо адресу картинки, на яку натиснули
    lightbox.classList.add("active"); // Показуємо плашку
}

function expandImg(img) {
    var lightbox = document.getElementById("lightbox");
    var lightboxImg = document.getElementById("lightbox-img");
    
    lightboxImg.src = img.src;
    lightbox.classList.add("active");
}

function closeLightbox() {
    var lightbox = document.getElementById("lightbox");
    lightbox.classList.remove("active");
}

function showWorld(worldId) {
    document.querySelectorAll('.map-layer').forEach(l => l.classList.remove('active'));
    document.getElementById(worldId).classList.add('active');
}

function showUniverse() {
    document.querySelectorAll('.map-layer').forEach(l => l.classList.remove('active'));
    document.getElementById('universe-map').classList.add('active');
}

function openMapNewTab(imgSrc) {
    // Відкриває картинку в новій вкладці
    window.open(imgSrc, '_blank');
}

function expandMap(imgSrc) {
    var lightbox = document.getElementById("lightbox");
    var lightboxImg = document.getElementById("lightbox-img");
    
    lightboxImg.src = imgSrc; // Встановлюємо шлях до детальної мапи
    lightbox.classList.add("active"); // Відкриваємо лайтбокс
}

function showGlitch() {
    const overlay = document.getElementById('glitch-overlay');
    overlay.style.display = 'flex';
}

function closeGlitch() {
    const overlay = document.getElementById('glitch-overlay');
    overlay.style.display = 'none';
}

// Вкажи тут дату події у форматі: "Month Day, Year Hours:Minutes:Seconds"
const targetDate = new Date("March 8, 2026 00:00:00").getTime();

const timerInterval = setInterval(function() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Розрахунок часу
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Виведення результату
    document.getElementById("days").innerText = days.toString().padStart(2, '0');
    document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');

    // Якщо час вийшов
    if (distance < 0) {
        clearInterval(timerInterval);
        document.querySelector(".timer-section").innerHTML = "<p class='timer-label'>ПОДІЯ РОЗПОЧАЛАСЬ!</p>";
    }
}, 1000);

// 1. Отримуємо нікнейм, який ми зберегли при вході
    // Примітка: Тобі треба додати рядок sessionStorage.setItem('username', user); 
    // у функцію входу в файлі login.html
    const username = sessionStorage.getItem('username') || "Мандрівник";

    // 2. Виводимо ім'я на екран
    document.getElementById('user-name').innerText = username;

    // 3. Генеруємо піксельну аватарку на основі ніка
    // Використовуємо безкоштовний сервіс DiceBear
    document.getElementById('user-avatar').src = `https://api.dicebear.com/7.x/pixel-art/svg?seed=${username}`;

    // Функція виходу
    function logout() {
        sessionStorage.clear();
        window.location.href = 'kazinak.html';
    }

const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    const userNameFromStorage = sessionStorage.getItem('username');

    if (isLoggedIn !== 'true' || !userNameFromStorage) {
        // Якщо даних немає — повертаємо на вхід
        window.location.href = 'login.html';
    } else {
        // 2. Якщо все ок — виводимо нік у блок
        const nameElement = document.getElementById('user-name');
        if (nameElement) {
            nameElement.innerText = userNameFromStorage;
        }

        // 3. Оновлюємо аватарку, щоб вона залежала від імені
        const avatarElement = document.getElementById('user-avatar');
        if (avatarElement) {
            // Використовуємо нік як "seed" (зерно) для генерації унікального піксельного обличчя
           avatarElement.src = `avatars/${userNameFromStorage}.jpg`;
        }
    }

    // Функція виходу
    function logout() {
        sessionStorage.clear();
        window.location.href = 'login.html';
    }