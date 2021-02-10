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
    return false;
}

module.exports = {
    correctRowCount,
    correctColumnCount,
    correctDimensions,
    correctContents
};
