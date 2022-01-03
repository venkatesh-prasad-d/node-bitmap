"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Output {
    constructor() {
        this.outputMatrix = [];
    }
    initializeOutputMatrix(rows, column) {
        for (let i = 0; i < rows; i++) {
            let col = [];
            for (let j = 0; j < column; j++) {
                col.push(Infinity);
            }
            this.outputMatrix.push(col);
        }
        return this.outputMatrix;
    }
    setOutputMatrixValue(row, column, value) {
        this.outputMatrix[row][column] = value;
    }
    getOutputMatrix() {
        return this.outputMatrix;
    }
    getOutputMatrixValue(row, column) {
        return this.outputMatrix[row][column];
    }
}
exports.default = Output;
//# sourceMappingURL=Output.js.map