import Matrix from "./Matrix";

export default class TestData{
    private testCases:number;
    private matrix:Matrix[];

    constructor(testCases:number){
        this.testCases = testCases,
        this.matrix = []
    }

    getTestCases():number{
        return this.testCases
    }

    addMatrix(matrix:Matrix){
        this.matrix.push(matrix)
    }

    getMatrix(index:number):Matrix{
        return this.matrix[index]
    }
}