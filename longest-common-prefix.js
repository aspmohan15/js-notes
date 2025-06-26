const loangestCommonPrefix = () => {

    // const strs = ["flower", "flow", "flight"]
    const strs = [""]

    const length = strs.length
    // console.log(length);

    const firstIndexCharLength = strs[0].length;
    let prefix = ""
    // debugger
    for (i = 0; i < firstIndexCharLength; i++) {
        const firstWordChars = strs[0][i]
        for (let j = 0; j < strs.length; j++) {
            if (strs[j][i] !== firstWordChars) {
                return prefix
            }
        }
        prefix += firstWordChars;

    }
    return "kkk"

}
console.log(loangestCommonPrefix());



// flower",
// "flow",
// "flight