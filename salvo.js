function carregarCarrinho(){
     const allItens = document.querySelector('.anaRickman');

     const carrinhoJson = localStorage.getItem('itensDoCarrinho')
     const carrinho = carrinhoJson ? JSON.parse(carrinhoJson) : []

     if(carrinho.length === 0){
        allItens.innerHTML = '<p>Seu carrinho esta vazio</p>';
        return;
     }
     carrinho.forEach(item => {

    const box = document.createElement('div')

    const nome = document.createElement('p')
    nome.textContent = item.nomeProduto

    const valorPrato = document.createElement('h3')
    valorPrato.textContent = item.valorProduto

    const quant = document.createElement('h3')
    quant.textContent = item.quantidade;

    const finalValor = document.createElement('h3')
    finalValor.textContent = item.valorTotal;

    box.appendChild(nome)
    box.appendChild(valorPrato)
    box.appendChild(quant)
    box.appendChild(finalValor)

    allItens.appendChild(box)
     });
}

document.addEventListener('DOMContentLoaded', carregarCarrinho)