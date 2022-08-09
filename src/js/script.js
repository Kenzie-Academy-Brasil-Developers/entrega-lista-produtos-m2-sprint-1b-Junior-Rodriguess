function renderizarCards(lista) {
    const divUl = document.querySelector('#produtosCard ul')
    divUl.innerHTML = ""
    lista.forEach(function(item) {
        let template = itensDoCard(item)
        divUl.appendChild(template)
    })
}
renderizarCards(produtos)
function itensDoCard(item) {
    const li              = document.createElement('li')
    const img             = document.createElement('img')
    img.classList.add("imgProduto")
    img.src               = item.img
    const divContainer    = document.createElement('div')
    divContainer.classList.add("containerListaProdutos__info")
    const divProdutos     = document.createElement('div')
    divProdutos.classList.add("produtos__info")
    const h3              = document.createElement('h3')
    h3.classList.add("tituloProduto")
    h3.innerText          = `${item.nome}`
    const span            = document.createElement('span')
    span.classList.add("categoriaProduto")
    span.innerText        = `${item.secao}`    
    const p               = document.createElement('p')
    p.classList.add("precoProduto")
    p.innerText           = `${item.preco}`
    const divNutrientes   = document.createElement('div')
    divNutrientes.classList.add("containerListaProdutos__nutrientes")
    const listaNutrientes = document.createElement('ol')
    const nutrientes      = document.createElement('li')
    const calcio          = document.createElement('p')
    calcio.innerText      = `${item.componentes[0]}`
    const nutrientes2     = document.createElement('li')
    const sodio           = document.createElement('p')
    sodio.innerText       = `${item.componentes[1]}`
    const nutrientes3     = document.createElement('li')
    const fibraAlimentar  = document.createElement('p')
    fibraAlimentar.innerText = `${item.componentes[2]}`
    const nutrientes4     = document.createElement('li')
    const proteinas       = document.createElement('p')
    proteinas.innerText   = `${item.componentes[3]}`
    const botaoDoCard     = document.createElement('button')
    botaoDoCard.innerText = `Adicionar ao carrinho`
    botaoDoCard.classList.add("btn-compra")
    botaoDoCard.id        = item.id
    li.append(img, divContainer, divProdutos, h3, span, p, divNutrientes, listaNutrientes,nutrientes, calcio,nutrientes2, sodio,nutrientes3, fibraAlimentar,nutrientes4, proteinas, botaoDoCard)
    return li
}
function criaEventoBarraDePesquisa() {
    const btn = document.querySelector(".estiloGeralBotoes--botaoBuscaPorNome")  
    btn.addEventListener("click", filtroDePesquisa)
}
criaEventoBarraDePesquisa()
function filtroDePesquisa() {
    const input = document.querySelector(".campoBuscaPorNome") 
    const inputValor = input.value.trim().toLowerCase()
    const itemPesquisado = []
    produtos.filter(function(item) {
        if (item.secao.toLowerCase().includes(inputValor) || item.categoria.toLowerCase().includes(inputValor) || item.nome.toLowerCase().includes(inputValor)){
            itemPesquisado.push(item)
        }  
    })
      renderizarCards(itemPesquisado)  
 }
function criaEventoHortifruti() {
    let btnHotifruti = document.getElementsByClassName("estiloGeralBotoes")[1]
    btnHotifruti.addEventListener("click", filtrarHortifrutiBotao)
}
criaEventoHortifruti()
function filtrarHortifrutiBotao() {
    let filtroHortifruti = []
    produtos.filter(function(item) {
        if (item.secao === "Hortifruti") {
            filtroHortifruti.push(item)
        } 
    })
    renderizarCards(filtroHortifruti)   
}
function criaEventoTodosProdutos() {
    let btnTodosProdutos = document.getElementsByClassName("estiloGeralBotoes")[0]
    btnTodosProdutos.addEventListener("click", filtrarTodosOsProdutos)
}
criaEventoTodosProdutos()
function filtrarTodosOsProdutos() {
    const TodosProdutos = []
    produtos.filter(function(item){
        if (item.secao == item.secao) {
            TodosProdutos.push(item)
        }
    })
    renderizarCards(TodosProdutos)
}
function criaEventoPanificadora() {
    let btnPanificadora = document.getElementsByClassName("estiloGeralBotoes")[2]
    btnPanificadora.addEventListener("click", filtrarPanificadora)
}
criaEventoPanificadora()
function filtrarPanificadora() {
    const filtroPanificadora = []
    produtos.filter(function(item) {
        if (item.secao == "Panificadora") {
            filtroPanificadora.push(item)
        }
    })
    renderizarCards(filtroPanificadora)
}
function criaEventoLaticinios() {
    let btnLaticinios = document.getElementsByClassName("estiloGeralBotoes")[3]
    btnLaticinios.addEventListener("click", filtrarLaticinio)
}
criaEventoLaticinios()
function filtrarLaticinio() {
    const filtroLaticinio = []
    produtos.filter(function(item){
        if (item.secao == "Laticinio") {
            filtroLaticinio.push(item)
        }
    })
    renderizarCards(filtroLaticinio)
}
const botoesCompra = document.querySelectorAll('.btn-compra')
    botoesCompra.forEach((elemento)=> {
        let somaTotal = 0;
        elemento.addEventListener('click', addCarrinho)
    })
function addCarrinho(evento) {
    const produto       = evento.target.parentNode
    const carrinho      = document.querySelector('.carrinho__produtos')
    const carrinhoLi    = document.createElement('li')
    const img           = document.createElement('img')
    const tagNome       = document.createElement('h3')
    const tagSpan       = document.createElement('span')
    const tagPreco      = document.createElement('p')
    const tagButton     = document.createElement('button')
    tagButton.classList.add("removerProduto")
    img.src = produto.querySelector(".imgProduto").src
    tagNome.innerText   = produto.querySelector(".tituloProduto").innerText
    tagSpan.innerText   = produto.querySelector(".categoriaProduto").innerText
    tagPreco.innerText  = produto.querySelector(".precoProduto").innerText
    tagButton.innerText = `Remover`
    carrinhoLi.append(img, tagNome, tagSpan, tagPreco, tagButton)
    carrinho.appendChild(carrinhoLi)
    removerItem()
}
function removerItem() {
    const removerCarrinho = document.querySelectorAll('.removerProduto') 
        removerCarrinho.forEach((elemento) => {
        elemento.addEventListener('click', (e) =>{
        const itemRemovido =  e.target.parentNode
        itemRemovido.remove() 
        })
    })
}