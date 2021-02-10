function correctRowCount(square) {
    return square.length === 3;
}

function correctColumnCount(row) {
    return row.length === 3;
}

module.exports = {
    correctRowCount,
    correctColumnCount
};
