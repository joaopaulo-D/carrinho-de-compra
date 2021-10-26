const items = [
    {
        id: 0,
        nome: 'Filme 1',
        img: 'https://i0.wp.com/media1.tenor.com/images/00e60fc7696a4275a85eff65e15ac76e/tenor.gif?itemid=13417553',
        quantidade: 0,
        qtdStars: 4,
        categoria: "Ação",
        preco: 25
    },
    {
        id: 1,
        nome: 'Filme 2',
        img: 'https://pa1.narvii.com/6209/a33ba619ac0676d5dfc9c71a248c7011bb6d458c_hq.gif',
        quantidade: 0,
        qtdStars: 3,
        categoria: "Suspence",
        preco: 30
    },
    {
        id: 2,
        nome: 'Filme 3',
        img: 'https://i0.wp.com/i.pinimg.com/originals/39/c8/25/39c82532d713c29740c1ad91389491cc.gif',
        quantidade: 0,
        qtdStars: 5,
        categoria: "Ação",
        preco: 19
    },
]

inicializarLojaVirual = () => {
    var containerProduto = document.getElementById('produtos');
    items.map((val) => {
        containerProduto.innerHTML += `
        
            <div class="produtos-single">
                <img src="`+val.img+`"/>
                <p>`+val.nome+`</p>
                <p class="stars">`+val.qtdStars+`★</p>
                <p class="ctg">Categoria: `+val.categoria+`</p>
                <p class="preco">R$ `+val.preco+`,00</p>
                <a key="`+val.id+`" href="#">Adicionar ao carrinho</a>
            </div>

        `;
    })
}

inicializarLojaVirual()

autualizarCarrinho = () => {
    var containerCarrinho = document.getElementById('carrinhos');
    containerCarrinho.innerHTML = "";
    items.map((val) => {
        if(val.quantidade > 0){
            containerCarrinho.innerHTML += `

                <p class="res">Produto: `+val.nome+` | Qunatidade: `+val.quantidade+` | Preço: R$ `+(val.quantidade * val.preco)+`,00</p>
                <hr>

            `;
        }
    })
}

var links = document.getElementsByTagName('a');

for(var i = 0; i < links.length; i++){
    links[i].addEventListener("click", function(){
        let key = this.getAttribute('key');
        items[key].quantidade++;
        autualizarCarrinho();
        return false;
    })
}
