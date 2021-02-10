function correctRowCount(square) {
    return square.length === 3;
}

function correctColumnCount(row) {
    return row.length === 3;
}

function correctDimensions(square) {
    return false;
}

module.exports = {
    correctRowCount,
    correctColumnCount,
    correctDimensions
};
