function processData(input) {
    let palavraConvertida = [];
    if (input === input.toLowerCase() || (input[0] === input[0].toUpperCase() && input.slice(1) === input.slice(1).toUpperCase())) {
        for (i = 0; i < input.length; i++) {
            if (input[i] === input[i].toLowerCase()) {
                palavraConvertida.push(input[i].toUpperCase())
            } else {
                palavraConvertida.push(input[i].toLowerCase())
            }
        }
    } else {
        console.log(input)
    }
    console.log(palavraConvertida.join(""))
}