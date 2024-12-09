document.addEventListener("DOMContentLoaded", () => {

    const showButtons = document.querySelectorAll('.show-button');
    
    showButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault(); // Отключить стандартное действие ссылки
            
            const hiddenItems = document.querySelectorAll('.llf>a.h');
            if (hiddenItems) {
                hiddenItems.forEach(item => {
                    item.classList.remove('none');
                    item.style.display = 'inline-block';
                });
                
                // Скрываем кнопку после раскрытия списка
                const hiddenShow = document.querySelectorAll('a.show-button');
                if(hiddenShow) {
                    hiddenShow.forEach(item => {
                        item.style.display = 'none';
                    });
                    
                }
                
            }
        });
    });
    
});
