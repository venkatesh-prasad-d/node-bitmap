"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TestData {
    constructor(testCases) {
        this.testCases = testCases,
            this.matrix = [];
    }
    getTestCases() {
        return this.testCases;
    }
    addMatrix(matrix) {
        this.matrix.push(matrix);
    }
    getMatrix(index) {
        return this.matrix[index];
    }
}
exports.default = TestData;
//# sourceMappingURL=TestData.js.map