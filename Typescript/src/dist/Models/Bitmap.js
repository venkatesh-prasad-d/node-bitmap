"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Bitmap {
    constructor() {
        this.bitmap = [];
    }
    addRows(row) {
        this.bitmap.push(row);
    }
    getBitmap() {
        return this.bitmap;
    }
}
exports.default = Bitmap;
//# sourceMappingURL=Bitmap.js.map