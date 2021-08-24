function solucao(texto) {

    let totalDePalavras = texto.trim()
    totalDePalavras = totalDePalavras.split(" ")
    totalDePalavras = totalDePalavras.filter(x => x.length > 0)
    console.log(totalDePalavras.length)

}