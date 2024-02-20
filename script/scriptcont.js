document.getElementById('quantity').addEventListener('input', function() {
    var quantity = parseInt(this.value);
    var pricePerTicket = 20; // Valor do ingresso
    var totalPrice = quantity * pricePerTicket;
    document.getElementById('total-price').innerText = 'Valor Total: $' + totalPrice;
});
