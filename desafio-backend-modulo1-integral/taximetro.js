function solucao(min, km) {
    let valorTotal = 0;
    let custoKM = 0
    let custoMin = 0

    if (min > 20) {
        custoMin = 20 * 50 + (min - 20) * 30
    } else {
        custoMin = min * 50
    }

    if (km > 10) {
        custoKM = 10 * 70 + (km - 10) * 50
    } else {
        custoKM = km * 70
    }

    valorTotal = custoKM + custoMin
    console.log(valorTotal)
}