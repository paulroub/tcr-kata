function correctRowCount(square) {
    return square.length === 3;
}

function correctColumnCount(row) {
    return false;
}

module.exports = {
    correctRowCount,
    correctColumnCount
};
