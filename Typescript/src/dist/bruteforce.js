"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDistanceBruteForce = void 0;
const util = __importStar(require("./Utilities/util"));
/**
 *
 * @param input
 * @returns Output Matrix
 * Function that takes in input matrix and returns output matrix
 */
function getDistanceBruteForce(input) {
    let whiteIndex = util.getAllWhiteIndex(input.getBitmap()); //get all white pixels
    let distanceOutput = util.initializeDistanceArray(input.getRows(), input.getColumn()); //Initialize output error
    if (whiteIndex.length > 0) {
        let bitMapObject = input.getBitmap();
        let bitMapData = bitMapObject.getBitmap(); //get the bitmap matrix
        for (let i = 0; i < bitMapData.length; i++) { //Iterate through all the pixels 
            for (let j = 0; j < bitMapData[i].length; j++) {
                let distance = 0;
                if (bitMapData[i][j] != 1) {
                    distance = getLeastDistanceFromWhites({ i: i, j: j }, whiteIndex); //Get the least distance from white pixels
                }
                distanceOutput.setOutputMatrixValue(i, j, distance); //Set the distance value in output matrix
            }
        }
        return distanceOutput;
    }
    else {
        throw new Error("No white pixel found");
    }
}
exports.getDistanceBruteForce = getDistanceBruteForce;
/**
 *
 * @param currentIndex
 * @param whiteIndex
 * @returns distance
 * Function the computes the distance for current pixel from all the white pixels and returns the least distances
 */
function getLeastDistanceFromWhites(currentIndex, whiteIndex) {
    let distance;
    for (let white of whiteIndex) {
        let newDistance = util.getPixelDistance(currentIndex, white); //conpute distance of pixel
        if (distance) {
            distance = Math.min(distance, newDistance);
        }
        else {
            distance = newDistance;
        }
    }
    return distance;
}
//# sourceMappingURL=bruteforce.js.map