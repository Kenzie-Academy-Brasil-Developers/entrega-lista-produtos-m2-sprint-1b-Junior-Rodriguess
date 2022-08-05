function renderizarCards(lista){
    const divUl = document.querySelector('#produtosCard ul')
    divUl.innerHTML = ""
    lista.forEach(function (item){
        let template = itensDoCard(item)
        divUl.appendChild(template)
    })
}
renderizarCards(produtos)

function itensDoCard(item){
    const li       = document.createElement('li')
    const img      = document.createElement('img')
    img.classList.add("imgProduto")
    img.src        = item.img
    const divContainer = document.createElement('div')
    divContainer.classList.add("containerListaProdutos__info")
    const divProdutos = document.createElement('div')
    divProdutos.classList.add("produtos__info")
    const h3       = document.createElement('h3')
    h3.classList.add("tituloProduto")
    h3.innerText   = `${item.categoria}`
    const span     = document.createElement('span')
    span.classList.add("categoriaProduto")
    span.innerText = `${item.secao}`    
    const p        = document.createElement('p')
    p.classList.add("precoProduto")
    p.innerText    = `${item.preco}`
    const divNutrientes = document.createElement('div')
    divNutrientes.classList.add("containerListaProdutos__nutrientes")
    const listaNutrientes = document.createElement('ol')
    const nutrientes = document.createElement('li')
    const calcio = document.createElement('p')
    calcio.innerText = `Cálcio`
    const nutrientes2 = document.createElement('li')
    const sodio = document.createElement('p')
    sodio.innerText = `Sódio`
    const nutrientes3 = document.createElement('li')
    const fibraAlimentar = document.createElement('p')
    fibraAlimentar.innerText = `Fibra Alimentar`
    const nutrientes4 = document.createElement('li')
    const proteinas = document.createElement('p')
    proteinas.innerText = `Proteínas`
    const botaoDoCard = document.createElement('button')
    botaoDoCard.innerText = `Adicionar ao carrinho`

    botaoDoCard.classList.add("btn-compra")

    li.append(img, divContainer, divProdutos, h3, span, p, divNutrientes, listaNutrientes,nutrientes, calcio,nutrientes2, sodio,nutrientes3, fibraAlimentar,nutrientes4, proteinas, botaoDoCard)
    return li
}
function criaEventoBarraDePesquisa(){
    const btn = document.querySelector(".estiloGeralBotoes--botaoBuscaPorNome")  
    btn.addEventListener("click", barraDePesquisa)
}
criaEventoBarraDePesquisa()

function barraDePesquisa(){
    const input = document.querySelector(".campoBuscaPorNome") 
    const inputValor = input.value.trim().toLowerCase()
    const filtroPesquisa = []
    produtos.filter(function(item){
        if(item.secao.toLowerCase().includes(inputValor) || item.categoria.toLowerCase().includes(inputValor) || item.nome.toLowerCase().includes(inputValor)){

            filtroPesquisa.push(item)
        }  
    })
      renderizarCards(filtroPesquisa)  
 }
barraDePesquisa()

function criaEventoHortifruti(){

    let btnHotifruti = document.getElementsByClassName("estiloGeralBotoes")[1]
    btnHotifruti.addEventListener("click", filtrarHortifrutiBotao)

}
criaEventoHortifruti()

function filtrarHortifrutiBotao(){
    let filtroHortifruti = []
    produtos.filter(function(item){
        if(item.secao === "Hortifruti"){
            filtroHortifruti.push(item)
        } 
    })
    renderizarCards(filtroHortifruti)   
}
function criaEventoTodosProdutos(){
    let btnTodosProdutos = document.getElementsByClassName("estiloGeralBotoes")[0]
    btnTodosProdutos.addEventListener("click", filtrarTodosOsProdutos)
}
criaEventoTodosProdutos()
function filtrarTodosOsProdutos(){
    const TodosProdutos = []
    produtos.filter(function(item){
        if(item.secao == item.secao){
            TodosProdutos.push(item)
        }
    })
    renderizarCards(TodosProdutos)
}
function criaEventoPanificadora(){
    let btnPanificadora = document.getElementsByClassName("estiloGeralBotoes")[2]
    btnPanificadora.addEventListener("click", filtrarPanificadora)
}
criaEventoPanificadora()

function filtrarPanificadora(){
    const filtroPanificadora = []
    produtos.filter(function(item){
        if(item.secao == "Panificadora"){
            filtroPanificadora.push(item)
        }
    })
    renderizarCards(filtroPanificadora)
}

function criaEventoLaticinios(){
    let btnLaticinios = document.getElementsByClassName("estiloGeralBotoes")[3]
    btnLaticinios.addEventListener("click", filtrarLaticinio)
}
criaEventoLaticinios()

function filtrarLaticinio(){
    const filtroLaticinio = []
    produtos.filter(function(item){
        if(item.secao == "Laticínio"){
            filtroLaticinio.push(item)
        }
    })
    renderizarCards(filtroLaticinio)
}



const botoesCompra = document.querySelectorAll('.btn-compra')

    botoesCompra.forEach((elemento)=>{
        elemento.addEventListener('click', addCarrinho)

    })

function addCarrinho(evento){

    const produto = evento.target.parentNode
    const carrinho = document.querySelector('.carrinho__produtos')
    const carrinhoLi = document.createElement('li')
    const img = document.createElement('img')
    const tagNome = document.createElement('h3')
    const tagSpan = document.createElement('span')
    const tagPreco = document.createElement('p')
    const tagButton = document.createElement('button')
    tagButton.classList.add("removerProduto")

    img.src = produto.querySelector(".imgProduto").src
    tagNome.innerText = produto.querySelector(".tituloProduto").innerText
    tagSpan.innerText = produto.querySelector(".categoriaProduto").innerText
    tagPreco.innerText = produto.querySelector(".precoProduto").innerText
    tagButton.innerText = `Remover`


    carrinhoLi.append(img, tagNome, tagSpan, tagPreco, tagButton)
    carrinho.appendChild(carrinhoLi)
    removerItem()
}


function removerItem(){
    const removerCarrinho = document.querySelectorAll('.removerProduto') 
    
        removerCarrinho.forEach((elemento) => {
        elemento.addEventListener('click', (e) =>{
        const itemRemovido =  e.target.parentNode
        itemRemovido.remove()
        })

    })
    
}


//     <!-- <li>
//     <img src="./src/img/maça.png" alt="" />
//     <div class="compras">
//       <h3>Maçã</h3>
//       <span>Hortifruti</span>
//       <p>R$ 2.00</p>
//     </div>
//     <button class="botao_remover_carrinho">
//       <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path d="M8.77234 0.875H6.42859L6.23328 0.523438C6.15515 0.367188 5.9989 0.25 5.82312 0.25H3.57703C3.40125 0.25 3.245 0.367188 3.16687 0.523438L2.99109 0.875H0.647339C0.471558 0.875 0.334839 1.03125 0.334839 1.1875V1.8125C0.334839 1.98828 0.471558 2.125 0.647339 2.125H8.77234C8.92859 2.125 9.08484 1.98828 9.08484 1.8125V1.1875C9.08484 1.03125 8.92859 0.875 8.77234 0.875ZM1.37 9.37109C1.38953 9.87891 1.79968 10.25 2.3075 10.25H7.09265C7.60046 10.25 8.01062 9.87891 8.03015 9.37109L8.45984 2.75H0.959839L1.37 9.37109Z" fill="#868E96"/>
//       </svg>
//     </button>  
//   </li> -->




// let carrinhoEvento = document.querySelector('.containerListaProdutos')   
// carrinhoEvento.addEventListener('click', criandoCarrinho)

// function criandoCarrinho(event){
//     let tagBotao = event.target
//     if(tagBotao.name == "BUTTON"){
//     let produto = produtos.find(function(produto){
//         if(tagBotao.id == produto.id){
//                 let cardCarrinho = renderizarCards(produto)
//                 renderizarCards.append(cardCarrinho)
//         }
//     })
//     }
//     return renderizarCards.append(cardCarrinho)
// }







