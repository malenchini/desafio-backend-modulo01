function solucao(min, max, valores) {
    const liberados = valores.filter(x => x <= max && x >= min)
    console.log(liberados)
}