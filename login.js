let isLoginMode = true;
    const MAIN_SITE_URL = 'index.html'; // Назва твого файлу з сайтом

    function toggleMode() {
        isLoginMode = !isLoginMode;
        document.getElementById('form-title').innerText = isLoginMode ? 'Увійти в Cabin' : 'Реєстрація';
        document.getElementById('main-btn').innerText = isLoginMode ? 'Зайти' : 'Почати пригоду';
        document.getElementById('toggle-link').innerText = isLoginMode ? 'Створити новий акаунт' : 'Вже маю акаунт';
    }

    function handleSubmit() {
        const user = document.getElementById('username').value;
        const pass = document.getElementById('password').value;

        if (!user || !pass) {
            alert("Друже, введи дані!");
            return;
        }

        let users = JSON.parse(localStorage.getItem('users')) || {};

        if (isLoginMode) {
            if (users[user] === pass) {
                sessionStorage.setItem('isLoggedIn', 'true');
                window.location.href = MAIN_SITE_URL;
            } else {
                alert("Помилка! Перевір нік або пароль.");
            }
        } else {
            if (users[user]) {
                alert("Цей нік уже зайнятий!");
            } else {
                users[user] = pass;
                localStorage.setItem('users', JSON.stringify(users));
                alert("Акаунт створено! Тепер увійди.");
                toggleMode();
            }
        }
    }
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
        window.location.href = 'login.html';
    }
