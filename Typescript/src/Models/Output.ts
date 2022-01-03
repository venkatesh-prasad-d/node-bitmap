export default class Output{
    private outputMatrix:number[][];

    constructor(){
        this.outputMatrix = []
    }

    initializeOutputMatrix(rows:number,column:number):number[][]{
        for(let i = 0; i < rows; i++){
            let col:number[] = []
            for(let j = 0; j < column; j++){
                col.push(Infinity)
            }
            this.outputMatrix.push(col)
        }
        return this.outputMatrix
    }

    setOutputMatrixValue(row:number,column:number,value:number){
        this.outputMatrix[row][column] = value
    }

    getOutputMatrix():number[][]{
        return this.outputMatrix
    }

    getOutputMatrixValue(row:number,column:number):number{
        return this.outputMatrix[row][column]
    }
}