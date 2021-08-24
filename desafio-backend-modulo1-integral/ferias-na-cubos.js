function processData(input) {
    const grupos = input.trim().split("\n")
    const separados = grupos[0].split(" ")
    let solos = parseInt(separados[0])
    const duplas = parseInt(separados[1]) * 2
    const trios = parseInt(separados[2])
    const quartetos = parseInt(separados[3])
    let totalDeTaxis = 0;
    totalDeTaxis += quartetos
    totalDeTaxis += trios
    solos = solos - trios
    if (solos < 0) {
        solos = 0
    }
    if ((duplas) % 4 === 0) {
        totalDeTaxis += (duplas) / 4
        totalDeTaxis += Math.ceil(solos / 4)
    } else {
        totalDeTaxis += Math.floor((duplas) / 4)
        totalDeTaxis += Math.ceil(((solos + (duplas % 4)) / 4))
    }

    console.log(totalDeTaxis)
}