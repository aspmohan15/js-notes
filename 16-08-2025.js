const input = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]


const resut = input.reduce((acc, curent, index) => {
    // console.log(acc);
    if (!acc.includes(curent)) {
        acc.push(curent);
    }
    return acc;
}, [])

console.log(resut);

const result = new Set([...input]);
const final = [...result]


const hasmap = {}
let j = 0
for (let i = 1; i < input.length; i++) {
    if (input[j] != input[i]) {
        input[j + 1] = input[i]
        j++
    }
}
return i + 1


// i = 1, j = 0
// i = 2, 

console.log({ ...input });


