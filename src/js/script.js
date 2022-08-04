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
    img.src        = item.img
    const h3       = document.createElement('h3')
    h3.innerText   = `${item.categoria}`
    const span     = document.createElement('span')
    span.innerText = `${item.secao}`    
    const p        = document.createElement('p')
    p.innerText    = `${item.preco}`
    const botaoDoCard = document.createElement('button')
    botaoDoCard.innerText = `Adicionar ao carrinho`

    li.append(img, h3, span, p, botaoDoCard)
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




