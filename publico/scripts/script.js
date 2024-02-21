// Adicione o script para calcular o valor total com base na quantidade de ingressos selecionada
document.addEventListener("DOMContentLoaded", function() {
    const inputQuantidadeIngressos = document.getElementById('quantidade-ingressos');
    const totalValue = document.getElementById('total-value');

    inputQuantidadeIngressos.addEventListener('input', function() {
        const precoIngresso = 10; // Substitua pelo preço real do ingresso
        const quantidadeIngressos = inputQuantidadeIngressos.value;
        const total = precoIngresso * quantidadeIngressos;
        totalValue.textContent = `Total: R$ ${total.toFixed(2)}`;
    });
});
