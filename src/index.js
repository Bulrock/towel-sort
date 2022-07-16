module.exports = function towelSort (matrix) {
    let arrSorted = [];
    if ((matrix === undefined) || (matrix === null)){
        arrSorted = [];
        return arrSorted;
    };
    for (let i = 0; i < matrix.length; i++){git
        if ((i === 0) || (i % 2 === 0)){
            for (let j = 0; j < matrix[i].length; j++){
                arrSorted.push(matrix[i][j])}
            } 
        else {
            for (let k = 1; k <= matrix[i].length; k++)
                arrSorted.push(matrix[i][matrix[i].length - k])
        }
    }
    return arrSorted;
}