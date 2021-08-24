let jogador = 0;

function solucao(numeros) {
    const somaTotal = numeros.reduce((acc, item) => {
        return acc + item

    });
    for (i = 0; i < somaTotal; i++) {
        if (jogador >= numeros.length) {
            jogador = 0
        }
        jogador++

    }
    console.log(jogador)
}