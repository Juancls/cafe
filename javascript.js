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

    const newD = document.createElement('dialog');


    


   /* pega as informações que foram passadas pelo card */
    const nomePrato = card.querySelector('.nome-prato').textContent;
    const descProd = card.querySelector('.desc-prod').textContent;
    const imgDoCard = card.querySelector('.img-prato');

     
    const newTitle = document.createElement('h3');
    newTitle.textContent = nomePrato;

    
    const newImg = document.createElement('img');
    
    /* indica o caminho das img */
    newImg.src = imgDoCard.src;
    newImg.alt = imgDoCard.alt;


    const newP = document.createElement('p');
    newP.textContent = descProd;

    const contagem = document.createElement('input');
    contagem.type = 'number';
    contagem.setAttribute("value", "1")

    const newBtn = document.createElement('button');
    newBtn.textContent = "Salvar";
    
    newBtn.autofocus = true;

    newBtn.addEventListener('click', ()=>{
        document.body.classList.remove('body-sem-scroll');
        newD.close();
        newD.remove();
    });

    newD.appendChild(newImg);
    newD.appendChild(newTitle);
    newD.appendChild(newP);
    newD.appendChild(contagem);
    newD.appendChild(newBtn);

    document.body.appendChild(newD);
    document.body.classList.add('body-sem-scroll');
    newD.showModal();
}   
