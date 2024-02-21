document.addEventListener("DOMContentLoaded", function() {
    const inputQuantidadeIngressos = document.getElementById('quantidade-ingressos');
    const totalValue = document.getElementById('total-value');
    inputQuantidadeIngressos.addEventListener('input', function() {
        const precoIngresso = 35;
        const quantidadeIngressos = inputQuantidadeIngressos.value;
        const total = precoIngresso * quantidadeIngressos;
        totalValue.textContent = `Total: R$ ${total.toFixed(2)}`;
    });
});
