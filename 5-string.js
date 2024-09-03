function inverterString(str) {
    let stringInvertida = "";
    
    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i];
    }
    
    return stringInvertida;
}

const stringOriginal = "ABCDE";
const stringInvertida = inverterString(stringOriginal);

console.log(`String Original: ${stringOriginal}`);
console.log(`String Invertida: ${stringInvertida}`);
