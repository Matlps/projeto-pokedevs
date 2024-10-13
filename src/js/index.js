
const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");
console.log(listaSelecaoPokedevs);


listaSelecaoPokedevs.forEach(pokedev => {
    pokedev.addEventListener("click", () => {
        const cartaoPokedevAberto = esconderCartaoPokedev();
        cartaoPokedevAberto.classList.remove("aberto");

        const idPokedevSelecionado = mostrarCartaoPokedev(pokedev);


        desativarPokeDevNalistagem();

        ativarPokeDevNaListagem(idPokedevSelecionado);
    })
})

function ativarPokeDevNaListagem(idPokedevSelecionado) {
    const idPokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
    idPokedevSelecionadoNaListagem.classList.add("ativo");
}

function desativarPokeDevNalistagem() {
    const pokedevAtivoNaListagem = document.querySelector(".ativo");
    pokedevAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoPokedev(pokedev) {
    const idPokedevSelecionado = pokedev.attributes.id.value;
    const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;
    const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
    cartaoPokedevParaAbrir.classList.add("aberto");
    return idPokedevSelecionado;
}

function esconderCartaoPokedev() {
    return document.querySelector(".aberto");
}
