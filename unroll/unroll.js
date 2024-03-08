function unroll(squareArray) {
    let unrolledArr = []
    let startRow = 0, endRow = squareArray.length - 1;
    let startCol = 0, endCol = squareArray[0].length - 1;

    while (startRow <= endRow && startCol <= endCol) {
        for (let col = startCol; col <= endCol; col++) {
            unrolledArr.push(squareArray[startRow][col])
        }
        startRow++;

        for (let row = startRow; row <= endRow; row++) {
            unrolledArr.push(squareArray[row][endCol])
        }
        endCol--;

        if (startRow <= endRow) {
            for (let col = endCol; col >= startCol; col--) {
                unrolledArr.push(squareArray[endRow][col]);
            }
            endRow--;
        }

        if (startCol <= endCol) {
            for (let row = endRow; row >= startRow; row--) {
                unrolledArr.push(squareArray[row][startCol]);
            }
            startCol++;
        }
    }
    return unrolledArr
}

module.exports = unroll;
