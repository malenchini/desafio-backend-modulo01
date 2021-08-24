let soma = 0;


function solucao(lista) {

    for (i = 0; i < lista.length; i++) {
        soma += Number(lista[i])
    }
    console.log(soma)
}