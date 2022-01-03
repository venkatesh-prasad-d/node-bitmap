let Matrix =  class Matrix{
    constructor(rows,column,bitmap){
        this.rows = rows;
        this.column = column;
        this.bitmap = bitmap;
    }
}

let TestData =  class TestData{  
    constructor(testCases){
        this.testCases = testCases,
        this.matrix = [];
    }

    addMatrix(matrix) {
        this.matrix.push(matrix)
    }

    getMatrix(index){
        return this.matrix[index]
    }
}

module.exports = {
    Matrix:Matrix,
    TestData:TestData
}