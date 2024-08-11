document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.item-de-preco button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Obrigado por se inscrever!');
        });
    });
});
