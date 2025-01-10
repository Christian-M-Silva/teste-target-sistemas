function inverterString(string) {
    let invertida = "";

    for (let i = string.length - 1; i >= 0; i--) {
        invertida += string[i];
    }

    return invertida;
}

const entrada = "Exemplo de String"; //Altere o texto e veja o resultado
const resultado = inverterString(entrada);

console.log("String original:", entrada);
console.log("String invertida:", resultado);
