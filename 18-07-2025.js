// valid prathies


const s = ")(){}"

const stack = []

s.split("").map((data) => {

    if (data == "{" || data == "[" || data == "(") {
        stack.push(data)
    } else {
        console.log(stack);

        if (!stack.length) return false

        const lastValue = stack[stack.length - 1]


        if (
            (lastValue == "(" && data == ")") ||
            (lastValue == "[" && data == "]") ||
            (lastValue == "{" && data == "}")
        ) {
            stack.pop()
        } else {
            return false
        }
    }




})

console.log(stack);
