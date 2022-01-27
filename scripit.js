// Variaveis
let prato_selecionado;
let bebida_selecionado;
let sobremesa_selecionado;
let pratoPreco;
let bebidaPreco;
let sobremesaPreco;
let precoTotal
let nomeCliente
let enderecoCliente
let mensagem_wpp;


function validaBotao() {
    if (prato_selecionado != undefined && bebida_selecionado != undefined && sobremesa_selecionado != undefined) {
        document.getElementById("botao-finalizar").style.backgroundColor = "#32B72F"
        document.getElementById("desabilitado").style.display = "none";
        document.getElementById("habilitado").style.display = "block";
        precoTotal = parseFloat(pratoPreco) + parseFloat(bebidaPreco) + parseFloat(sobremesaPreco);
        precoTotal = precoTotal.toFixed(2)
    }
}

// Pratos
function selecionarFrango() {
    // Seleção itens
    document.getElementById("Frango").style.boxShadow = "inset 0 0 0 5px #32B72F";
    document.getElementById("Frango-select").style.display = "block";
    //Deselecionar outro item
    document.getElementById("Vegano").style.boxShadow = "inset 0 0 0 5px #FFFFFF";
    document.getElementById("Vegano-select").style.display = "none";
    //Deselecionar outro item
    document.getElementById("XDriven").style.boxShadow = "inset 0 0 0 5px #FFFFFF";
    document.getElementById("XDriven-select").style.display = "none";
    // Armazenar item selecionado
    prato_selecionado = "Frango Yin Yang";
    pratoPreco = 14.90;
    // Função que valida se os tres itens foram selecionados
    validaBotao();
    // Deselecionar

}

function selecionarVegano() {
    // Seleção itens
    document.getElementById("Vegano").style.boxShadow = "inset 0 0 0 5px #32B72F";
    document.getElementById("Vegano-select").style.display = "block";
    //Deselecionar outro item
    document.getElementById("Frango").style.boxShadow = "inset 0 0 0 5px #FFFFFF";
    document.getElementById("Frango-select").style.display = "none";
    //Deselecionar outro item
    document.getElementById("XDriven").style.boxShadow = "inset 0 0 0 5px #FFFFFF";
    document.getElementById("XDriven-select").style.display = "none";
    // Armazenar item selecionado
    prato_selecionado = "Frango Vegano";
    pratoPreco = 15.90;
    validaBotao();

}

function selecionarXDriven() {
    // Seleção itens
    document.getElementById("XDriven").style.boxShadow = "inset 0 0 0 5px #32B72F";
    document.getElementById("XDriven-select").style.display = "block";
    //Deselecionar outro item
    document.getElementById("Frango").style.boxShadow = "inset 0 0 0 5px #FFFFFF";
    document.getElementById("Frango-select").style.display = "none";
    //Deselecionar outro item
    document.getElementById("Vegano").style.boxShadow = "inset 0 0 0 5px #FFFFFF";
    document.getElementById("Vegano-select").style.display = "none";
    // Armazenar item selecionado
    prato_selecionado = "XDriven";
    pratoPreco = 14.90;
    validaBotao();
}

// Bebidas
function selecionarCoca() {
    // Seleção itens
    document.getElementById("Coca").style.boxShadow = "inset 0 0 0 5px #32B72F";
    document.getElementById("Coca-select").style.display = "block";
    //Deselecionar outro item
    document.getElementById("Suco").style.boxShadow = "inset 0 0 0 5px #FFFFFF";
    document.getElementById("Suco-select").style.display = "none";
    //Deselecionar outro item
    document.getElementById("Cha").style.boxShadow = "inset 0 0 0 5px #FFFFFF";
    document.getElementById("Cha-select").style.display = "none";
    // Armazenar item selecionado
    bebida_selecionado = "Coquinha gelada";
    bebidaPreco = 4.90;
    validaBotao();

}

function selecionarSuco() {
    // Seleção itens
    document.getElementById("Suco").style.boxShadow = "inset 0 0 0 5px #32B72F";
    document.getElementById("Suco-select").style.display = "block";
    //Deselecionar outro item
    document.getElementById("Coca").style.boxShadow = "inset 0 0 0 5px #FFFFFF";
    document.getElementById("Coca-select").style.display = "none";
    //Deselecionar outro item
    document.getElementById("Cha").style.boxShadow = "inset 0 0 0 5px #FFFFFF";
    document.getElementById("Cha-select").style.display = "none";
    // Armazenar item selecionado
    bebida_selecionado = "Suco de pera";
    bebidaPreco = 5.90;
    validaBotao();

}

function selecionarCha() {
    // Seleção itens 
    document.getElementById("Cha").style.boxShadow = "inset 0 0 0 5px #32B72F";
    document.getElementById("Cha-select").style.display = "block";
    //Deselecionar outro item
    document.getElementById("Suco").style.boxShadow = "inset 0 0 0 5px #FFFFFF";
    document.getElementById("Suco-select").style.display = "none";
    //Deselecionar outro item
    document.getElementById("Coca").style.boxShadow = "inset 0 0 0 5px #FFFFFF";
    document.getElementById("Coca-select").style.display = "none";
    // Armazenar item selecionado
    bebida_selecionado = "Chá Matte";
    bebidaPreco = 9.90;
    validaBotao();

}

// Sobremesas
function selecionarPudim() {
    // Seleção itens
    document.getElementById("Pudim").style.boxShadow = "inset 0 0 0 5px #32B72F";
    document.getElementById("Pudim-select").style.display = "block";
    //Deselecionar outro item
    document.getElementById("Sorvete").style.boxShadow = "inset 0 0 0 5px #FFFFFF";
    document.getElementById("Sorvete-select").style.display = "none";
    //Deselecionar outro item
    document.getElementById("SaladaFrutas").style.boxShadow = "inset 0 0 0 5px #FFFFFF";
    document.getElementById("SaladaFrutas-select").style.display = "none";
    // Armazenar item selecionado
    sobremesa_selecionado = "Pudim";
    sobremesaPreco = 7.90;
    validaBotao();

}

function selecionarSorvete() {
    // Seleção itens
    document.getElementById("Sorvete").style.boxShadow = "inset 0 0 0 5px #32B72F";
    document.getElementById("Sorvete-select").style.display = "block";
    //Deselecionar outro item
    document.getElementById("Pudim").style.boxShadow = "inset 0 0 0 5px #FFFFFF";
    document.getElementById("Pudim-select").style.display = "none";
    //Deselecionar outro item
    document.getElementById("SaladaFrutas").style.boxShadow = "inset 0 0 0 5px #FFFFFF";
    document.getElementById("SaladaFrutas-select").style.display = "none";
    // Armazenar item selecionado
    sobremesa_selecionado = "Sorvete vegano"
    sobremesaPreco = 10.90;
    validaBotao();
}

function selecionarSaladaFrutas() {
    // Seleção itens
    document.getElementById("SaladaFrutas").style.boxShadow = "inset 0 0 0 5px #32B72F";
    document.getElementById("SaladaFrutas-select").style.display = "block";
    //Deselecionar outro item
    document.getElementById("Sorvete").style.boxShadow = "inset 0 0 0 5px #FFFFFF";
    document.getElementById("Sorvete-select").style.display = "none";
    //Deselecionar outro item
    document.getElementById("Pudim").style.boxShadow = "inset 0 0 0 5px #FFFFFF";
    document.getElementById("Pudim-select").style.display = "none";
    // Armazenar item selecionado
    sobremesa_selecionado = "Salada de frutas"
    // Validando botão
    sobremesaPreco = 5.99;
    validaBotao();
}
// Finalizar pedido
function revisarDados() {
    // Combo
    document.getElementById("prato-nome").textContent = prato_selecionado;
    document.getElementById("bebida-nome").textContent = bebida_selecionado;
    document.getElementById("sobremesa-nome").textContent = sobremesa_selecionado;
    // Preços
    document.getElementById("prato-preco").textContent = pratoPreco.toFixed(2);
    document.getElementById("bebida-preco").textContent = bebidaPreco.toFixed(2);
    document.getElementById("sobremesa-preco").textContent = sobremesaPreco.toFixed(2);
    // Total
    document.getElementById("preco-total").textContent = "R$ " + precoTotal;
    // Revisar pedido
    document.getElementById("revisaoDados").style.display = "flex"

}
function finalizarPedido() {
    nomeCliente = prompt("Por favor digite o seu Nome: ")
    enderecoCliente = prompt("Por favor digite o seu Endereço: ")
    mensagem_wpp = "Olá, gostaria de fazer o pedido:" + "\n" + " - Prato: " + prato_selecionado + "\n" + " - Bebida: " + bebida_selecionado + "\n" + " - Sobremesa: " + sobremesa_selecionado + "\n" + "Total: R$ " + precoTotal + "\n \n" + "Nome: " + nomeCliente + "\n" + "Enderço: " + enderecoCliente;
    window.open("https://wa.me/5561999999999?text=" + encodeURIComponent(mensagem_wpp))
}
function cancelarPedido() {
    document.getElementById("revisaoDados").style.display = "none";
}

