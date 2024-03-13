document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sorteador').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting and reloading the page
        
        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo);
        
        let numeroAleatorio = Math.floor(Math.random() * numeroMaximo) + 1;
        document.getElementById('resultado-valor').innerText = numeroAleatorio; // Displaying number without decimal places
        document.querySelector('.resultado').style.display = 'block';
    });
});
