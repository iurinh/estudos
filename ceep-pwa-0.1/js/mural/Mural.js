const Mural = (function(_render, Filtro){
    "use strict"
    let cartoes = pegaCartoesUsuario()
    const render = () => _render({cartoes: cartoes, filtro: Filtro.tagsETexto});
    cartoes.forEach(cartao => {
        preparaCartao(cartao)
    })

    render();

    Filtro.on("filtrado", render)

    function pegaCartoesUsuario(){
        return JSON.parse(localStorage.getItem(usuario) || "[]").map(cartaoLocal => new Cartao(cartaoLocal.conteudo, cartaoLocal.tipo))
    }

    function salvaCartoes(){
        localStorage.setItem(usuario, JSON.stringify(
            cartoes.map(cartao => ({conteudo:cartao.conteudo, tipo:cartao.tipo}))
        ))
    }

    function preparaCartao(cartao){
        cartao.on("mudanca.**", salvaCartoes)
        cartao.on("remocao", ()=>{
            cartoes = cartoes.slice(0)
            cartoes.splice(cartoes.indexOf(cartao),1)
            salvaCartoes()
            render()
        })
        render()
    }

    login.on("login", () => {
        cartoes = pegaCartoesUsuario()
        render();
    })

    login.on("logout", () => {
        cartoes = [];
        render();
    })

    function adiciona(cartao){
        if(logado){
            cartoes.push(cartao)
            salvaCartoes()
            preparaCartao(cartao)
            return true
        } else {
            alert("Você não está logado")
        }
    }

    return Object.seal({
        adiciona
    })

})(Mural_render, Filtro)
