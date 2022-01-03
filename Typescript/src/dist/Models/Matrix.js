"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Matrix {
    constructor(rows, column, bitmap) {
        this.rows = rows,
            this.column = column,
            this.bitmap = bitmap;
    }
    setRows(rows) {
        this.rows = rows;
    }
    getRows() {
        return this.rows;
    }
    setColumn(column) {
        this.column = column;
    }
    getColumn() {
        return this.column;
    }
    setBitmap(bitmap) {
        this.bitmap = bitmap;
    }
    getBitmap() {
        return this.bitmap;
    }
}
exports.default = Matrix;
//# sourceMappingURL=Matrix.js.map