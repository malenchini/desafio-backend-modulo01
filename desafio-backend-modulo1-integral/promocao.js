function solucao(precos) {
    const valorTotal = precos.reduce((acc, item) => { return acc + item })
    precos.length >= 3 ? console.log(valorTotal - (Math.min(...precos) / 2)) : console.log(valorTotal)
}