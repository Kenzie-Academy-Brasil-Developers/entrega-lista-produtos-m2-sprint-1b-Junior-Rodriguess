function renderizarCards(){
    const div = document.getElementById('produtosCard')
    let ul = document.createElement('ul')
    itensDoCard().forEach(function(elemento){
        ul.append(elemento)
    })
    div.append(ul)
}
renderizarCards(itensDoCard())
function itensDoCard(){
    const arrayProdutos = []
    for (let i = 0; i < produtos.length; i++){
        let li   = document.createElement('li')
        const img  = document.createElement('img')
        img.src = `${produtos[i].img}`    
        const h3   = document.createElement('h3')
        h3.innerText = `${produtos[i].nome}`
        const span = document.createElement('span')
        span.innerText = `${produtos[i].secao}`    
        const p    = document.createElement('p')
        p.innerText = `${produtos[i].preco}`    
        li.append(img, h3, span, p)
         arrayProdutos.push(li)
    }
    return arrayProdutos
}