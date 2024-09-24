function changeSection(sectionName, linkElement) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    const activeSection = document.getElementById(sectionName);
    activeSection.classList.add('active');

    const links = document.querySelectorAll('.button-container .button');
    links.forEach(link => {
        link.classList.remove('active');
    });

    linkElement.classList.add('active');

    let title = 'Vaniax17 | ';
    if (sectionName === 'Главная') {
        title += 'Главная';
    } else if (sectionName === 'Ссылки') {
        title += 'Ссылки';
    } else if (sectionName === 'Дс сервер') {
        title += 'Дс сервер';
    }
    document.title = title;
}

function redirectTo(url) {
    window.location.href = `redirect?url=${encodeURIComponent(url)}`;
}

document.addEventListener('DOMContentLoaded', function() {
    const initialSection = 'Главная';
    const initialButton = document.getElementById('home');
    changeSection(initialSection, initialButton);
});
// Функция для обновления данных с API
async function updateStats() {
    try {
        // Замените http на https
        const response = await fetch('http://46.174.48.53:3254/stats'); // URL вашего Flask-сервера
        if (!response.ok) {
            throw new Error('Сетевая ошибка: ' + response.status);
        }
        
        const data = await response.json();

        // Отладочная информация
        console.log('Полученные данные:', data);

        // Обновляем отображение на сайте
        document.getElementById('voiceCount').innerText = data.voice_count;
        document.getElementById('onlineCount').innerText = data.online_count;
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
    }
}


// Обновление данных каждые 30 секунд
setInterval(updateStats, 30000);

// Обновляем данные сразу при загрузке страницы
window.onload = updateStats;
