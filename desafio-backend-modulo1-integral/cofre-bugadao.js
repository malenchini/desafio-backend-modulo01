function processData(input) {
    const linhas = input.trim().split("\n")
    const senha = linhas[0].split("")
    const digitado = linhas[1].split("")
    let senhaCorrigida = [];
    let validador = 0;

    for (i = 0; i < digitado.length; i++) {
        if (senha[validador] === digitado[i]) {
            senhaCorrigida.push(digitado[i])
            validador++
        }
    }

    senhaCorrigida.join("") === senha.join("") ? console.log("SIM") : console.log("NAO")


}