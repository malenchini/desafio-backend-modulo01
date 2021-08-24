function solucao(lista) {
    const habilitados = lista.filter(x => x >= 18)
    habilitados.length === 0 ? console.log("CRESCA E APARECA") : console.log(Math.min(...habilitados))

}