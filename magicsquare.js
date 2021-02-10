function correctRowCount(square) {
    return square.length === 3;
}

function correctColumnCount(row) {
    return row.length === 3;
}

function correctDimensions(square) {
    return correctRowCount(square) &&
        correctColumnCount(square[0]) &&
        correctColumnCount(square[1]) &&
        correctColumnCount(square[2]);
}

function correctContents(square) {
    const allDigits = square.flat();

    return allDigits.indexOf(1) >= 0 &&
        allDigits.indexOf(1) >= 0 &&
        allDigits.indexOf(2) >= 0 &&
        allDigits.indexOf(3) >= 0 &&
        allDigits.indexOf(4) >= 0 &&
        allDigits.indexOf(5) >= 0 &&
        allDigits.indexOf(6) >= 0 &&
        allDigits.indexOf(7) >= 0 &&
        allDigits.indexOf(8) >= 0 &&
        allDigits.indexOf(9) >= 0;
}

module.exports = {
    correctRowCount,
    correctColumnCount,
    correctDimensions,
    correctContents
};
