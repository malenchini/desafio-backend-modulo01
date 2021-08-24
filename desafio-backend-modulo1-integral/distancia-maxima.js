function processData(input) {

    function getprocessData(input) {
        const linhas = input.trim().split("\n")
        const coordenadas = [];
        for (let i = 1; i < linhas.length; i++) {
            const coord = linhas[i].split(" ")
            coordenadas.push({
                x: parseFloat(coord[0], 10),
                y: parseFloat(coord[1], 10)
            })
        }
        return coordenadas

    }

    function getDistance(x1, y1, x2, y2) {
        let y = x2 - x1;
        let x = y2 - y1;

        return Math.sqrt(x * x + y * y)
    }

    function pegarMaior(coordenadas) {
        let maior = 0;
        for (i = 0; i < coordenadas.length - 1; i++) {
            for (l = i + 1; l < coordenadas.length; l++) {
                const distancia = getDistance(coordenadas[i].x, coordenadas[i].y, coordenadas[l].x, coordenadas[l].y)
                if (distancia > maior) {
                    maior = distancia
                }
            }
        }
        console.log(maior)
    }

    const coordenadas = getprocessData(input)


    pegarMaior(coordenadas)
}