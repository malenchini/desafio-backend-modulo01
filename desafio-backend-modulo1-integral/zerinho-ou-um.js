function solucao(jogadores) {
    const vencedor0 = jogadores.filter(x => x.jogada === 0)
    const vencedor1 = jogadores.filter(x => x.jogada === 1)
    if (vencedor0.length === 1) {
        console.log(vencedor0[0].nome)
    } else if (vencedor1.length === 1) {
        console.log(vencedor1[0].nome)
    } else {
        console.log("NINGUEM")
    }

}