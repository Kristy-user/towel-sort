// You should implement your task here.

module.exports = function towelSort(matrix) {
    let result = [];
    matrix
        ? matrix.forEach((item, i) =>
              i % 2 === 0
                  ? result.push(...item)
                  : result.push(...item.reverse())
          )
        : null;
    return result;
};
