const barbearia = {
    cortes: [
        { id: 1, tipo: "Militar", valor: 20 },
        { id: 2, tipo: "Samurai", valor: 35 },
        { id: 3, tipo: "Pompadour", valor: 20 },
        { id: 4, tipo: "Moicano", valor: 10 },
        { id: 5, tipo: "Razor part", valor: 5 },
    ],
  
    barbas: [
        { id: 1, tipo: "Capitão Jack", valor: 20 },
        { id: 2, tipo: "Van Dyke", valor: 20 },
        { id: 3, tipo: "Barba Média", valor: 20 },
        { id: 4, tipo: "Barba Baixa", valor: 20 },
        { id: 5, tipo: "Barba Zero", valor: 15 },
    ],
    estaAberto: true,
};
  
  
function buscaCortePorId(id) {
    if(foundCut = barbearia.cortes.find(cut => cut.id == id)){

        return foundCut
    }
        return 'Corte não encontrado'
    
}

function buscaBarbaPorId(id) {
    if(foundBeard = barbearia.barbas.find(beard => beard.id == id)){

        return foundBeard
    }
        return 'Barba não encontrada'
}

function verificaStatusBarbearia() {
    if(estaAberto = true){
        return 'Estamos abertos'
    }
        return 'Estamos fechados'
}

function retornaTodosCortes() {
    for(let i=0; i<barbearia.cortes.length; i++){
        return barbearia.cortes
    }
}

function retornaTodasBarbas() {
    for(let j=0; j<barbearia.barbas.length; j++){
        return barbearia.barbas
    }
}

function criaPedido(nomeCliente, corteId, barbaId) {
   let c = buscaCortePorId([corteId])
   let b = buscaBarbaPorId([barbaId])
   
    let pedido = {
        nome: nomeCliente,
        pedidoCorte: c.tipo,
        pedidoCortePreco:c.valor,
        pedidoBarba: b.tipo,
        pedidoBarbaPreco:b.valor,
    }
        return pedido
}


function atualizarServico(lista, id, valor, tipo) {
    const array = []
    const size = lista
    for(let i=0; i<lista.length;i++){
        array.push({
            id:id,
            tipo:tipo,
            valor:valor
        })
    }
    return array
}
function calculaTotal(pedido) {
    let total= pedido.pedidoCortePreco + pedido.pedidoBarbaPreco

    return total
}
  
  
