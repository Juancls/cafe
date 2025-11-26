//Encontra TODOS os botões de "abrir"
const todosOsBotoes = document.querySelectorAll('.abrir');
//  Adiciona um "escutador" de clique em CADA um deles
todosOsBotoes.forEach(botao => {

    botao.addEventListener('click', (event) => {
        //  'event.target' é o botão que foi clicado.
        // '.closest('.card')' sobe no HTML até encontrar o "card" pai mais próximo
        const cardDoBotao = event.target.closest('.card');

        // CHAMA A FUNÇÃO, passando o card específico que deve ser lido
        criarDialog(cardDoBotao);
    });

});



// A função agora RECEBE o card que ela deve processar
function criarDialog(card) {

    console.log(card)
    const newD = document.createElement('dialog');



    /* pega as informações que foram passadas pelo card */
    const nomePrato = card.querySelector('.nome-prato').textContent;
    const descProd = card.querySelector('.desc-prod').textContent;
    const valorPrato = card.querySelector('.valor-prod').textContent;
    const imgDoCard = card.querySelector('.img-prato');



    const prato = document.createElement('h3');
    prato.textContent = nomePrato;


    const imagemPrato = document.createElement('img');

    /* indica o caminho das img */
    imagemPrato.src = imgDoCard.src;
    imagemPrato.alt = imgDoCard.alt;


    const descricao = document.createElement('p');
    descricao.textContent = descProd;


    const contagem = document.createElement('input');
    contagem.type = 'number';
    contagem.id = 'inputContagem';
    contagem.setAttribute("value", "1");
    
    
    /*     setAttribute(tipo, valor) - colocar depois  */

    const retirarIng = document.createElement('input');
    retirarIng.setAttribute('class', 'ingredientes');
    retirarIng.setAttribute('placeholder', 'Observação para cozinha');
    retirarIng.type = 'text';

    const newBtn = document.createElement('button');
    newBtn.textContent = "Salvar";

    const btnFechar = document.createElement('button');
    btnFechar.setAttribute('class', 'btnFechar')
    btnFechar.textContent = 'X'

    newBtn.autofocus = true;


    let valorFormatado = valorPrato.replace('R$ ', '')
    valorFormatado = valorFormatado.replace(',', '.')
    



    newBtn.addEventListener('click', () => {
        
        document.body.classList.remove('body-sem-scroll');
        newD.close();
        newD.remove();

    /*         const inputElemento = document.getElementById('inputContagem')
        const valorInput = inputElemento.value;
        const valorNumerico = parseFloat(valorInput, 10)
        console.log(valorNumerico)
         mandarInfo({
            quantEsc: valorNumerico,
            nomeProd: nomePrato,
            valorProd: valorFormatado,
            valorFinal: valorFormatado*valorNumerico
        })  */
    })

    btnFechar.addEventListener('click', () => {
        document.body.classList.remove('body-sem-scroll');
        newD.close();
        newD.remove();
    });

    newD.appendChild(imagemPrato);
    newD.appendChild(prato);
    newD.appendChild(descricao);
    newD.appendChild(contagem);
    newD.appendChild(retirarIng);
    newD.appendChild(newBtn);
    newD.appendChild(btnFechar);

    document.body.appendChild(newD);
    document.body.classList.add('body-sem-scroll');
    newD.showModal();
}

// função botão carrinho
const carrinho = document.querySelector('.btncarrinho');

 carrinho.addEventListener('click', () => {
    criarBCarrinho();
}) 

function criarBCarrinho() {
    const itemSelecionado = document.createElement('dialog');

    const msg = document.createElement('h3')
    msg.textContent = 'Carrinho Vazio'

    const msg2 = document.createElement('h3')
    msg2.textContent = '(Função receber ainda não criada)'

    const buttonSair = document.createElement('button');
    buttonSair.textContent = "sair";

    buttonSair.addEventListener('click', () => {
        itemSelecionado.close();
        itemSelecionado.remove();
    })

    itemSelecionado.appendChild(buttonSair);
    itemSelecionado.appendChild(msg)
    itemSelecionado.appendChild(msg2)
    document.body.appendChild(itemSelecionado);
    itemSelecionado.showModal();
} 


/* function mandarInfo({ nomeProd, valorProd, quantEsc, valorFinal}) {
    
    const novoProduto={
        nomeProduto: nomeProd,
        valorProduto: valorProd,
        quantidade: quantEsc,
        valorTotal: valorFinal
    }

    const carrinhoJson = localStorage.getItem('itensDoCarrinho')

    let carrinho = carrinhoJson ? JSON.parse(carrinhoJson) : [];
    carrinho.push(novoProduto)

    localStorage.setItem('itensDoCarrinho', JSON.stringify(carrinho))
    window.location.href = 'carrinho.html'
    console.log('Produto adicionado')
} */