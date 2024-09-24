document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const url = params.get('url');

    setTimeout(function() {
        window.location.href = url;
    }, 3000);
});
document.addEventListener('DOMContentLoaded', function() {
const params = new URLSearchParams(window.location.search);
const url = params.get('url');

setTimeout(function() {
// Если url отсутствует или равен null, перенаправляем на главную страницу
if (!url) {
    window.location.href = '/';
} else {
    window.location.href = url;
}
}, 3000);
});