const romanFormat = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}

const input = "MCMXCIV"

let result = 0
for (let i = 0; i < input.length; i++) {

    const value = romanFormat[input[i]] > romanFormat[input[i + 1]]
    // debugger
    if (value) {
        result += romanFormat[input[i]] 
    } else {
        result -= romanFormat[input[i]] 
    }

}
console.log(result);



