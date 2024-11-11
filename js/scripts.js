document.getElementById('submit-button').addEventListener('click', function(event) {
    event.preventDefault(); // предотвращаем перезагрузку страницы

    // Показываем ссылку на беседу
    document.getElementById('telegram-link').style.display = 'block';
    
    // Здесь можно добавить логику для отправки данных на сервер
});