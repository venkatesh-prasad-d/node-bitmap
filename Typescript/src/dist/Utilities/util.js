"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatOutput = exports.getPixelDistance = exports.setWhiteDistance = exports.initializeDistanceArray = exports.getNeighbors = exports.getAllWhiteIndex = void 0;
const Output_1 = __importDefault(require("../Models/Output"));
const neigbIndex = [{ i: -1, j: 0 }, { i: 1, j: 0 }, { i: 0, j: 1 }, { i: 0, j: -1 }];
/**
 *
 * @param inputBitmap
 * @returns array of white pixels
 */
function getAllWhiteIndex(inputBitmap) {
    let whiteIndex = [];
    let input = inputBitmap.getBitmap();
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
            if (input[i][j] == 1) {
                let obj = {
                    i: i,
                    j: j
                };
                whiteIndex.push(obj);
            }
        }
    }
    return whiteIndex;
}
exports.getAllWhiteIndex = getAllWhiteIndex;
/**
 *
 * @param rows
 * @param col
 * @param pixel
 * @returns neighboring pixels of current pixel
 */
function getNeighbors(rows, col, pixel) {
    let neighbors = [];
    for (let n of neigbIndex) {
        let nRow = pixel.i + n.i;
        let nCol = pixel.j + n.j;
        if (nRow >= 0 && nCol >= 0 && nRow < rows && nCol < col) {
            neighbors.push({ i: nRow, j: nCol });
        }
    }
    return neighbors;
}
exports.getNeighbors = getNeighbors;
/**
 *
 * @param rows
 * @param column
 * @returns Output Matrix
 */
function initializeDistanceArray(rows, column) {
    let output = new Output_1.default();
    output.initializeOutputMatrix(rows, column);
    return output;
}
exports.initializeDistanceArray = initializeDistanceArray;
/**
 *
 * @param array
 * @param whites
 * Function that initializes white pixel distance
 */
function setWhiteDistance(array, whites) {
    for (let white of whites) {
        array.setOutputMatrixValue(white.i, white.j, 0);
    }
}
exports.setWhiteDistance = setWhiteDistance;
/**
 *
 * @param pixel1
 * @param pixel2
 * @returns distance of both pixels
 */
function getPixelDistance(pixel1, pixel2) {
    return Math.abs(pixel1.i - pixel2.i) + Math.abs(pixel1.j - pixel2.j);
}
exports.getPixelDistance = getPixelDistance;
/**
 *
 * @param bitmap
 * @returns output formated string
 */
function formatOutput(bitmap) {
    let output = "";
    for (let row of bitmap) {
        output = output + row.join(" ") + "\n";
    }
    return output;
}
exports.formatOutput = formatOutput;
//# sourceMappingURL=util.js.map