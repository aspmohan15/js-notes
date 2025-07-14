const matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60]
]
const target = 16;


const findTarget = () => {
    let n = matrix.length;
    let m = matrix[0].length;
    let row = 0;
    let col = m - 1
    while (row < n && col >= 0) {
        console.log(row, col);

        if (matrix[row][col] == target) return true;
        else if (matrix[row][col] < target) row++;
        else col--
    }

}

const bruteForce = () => {
    for (let i = 0; i < matrix.length; i++) {
        for (j = 0; j < matrix[i].length; j++) {
            // console.count("kl")

            if (matrix[i][j] == target) return true
        }
    }
    return false
}


console.log(findTarget());
// console.log(bruteForce());
