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
exports.getDistanceBFS = void 0;
const util = __importStar(require("./Utilities/util"));
/**
 *
 * @param input
 * @returns Output Matrix
 * Function takes input matrix and processes and returns the output matrix
 *
 */
function getDistanceBFS(input) {
    let queue = util.getAllWhiteIndex(input.getBitmap()); // Get position on white pixel
    let output = util.initializeDistanceArray(input.getRows(), input.getColumn()); // Initialize Output array with max value
    util.setWhiteDistance(output, queue); //Set distance 0 for white pixel
    if (queue.length == 0) {
        throw new Error("No white pixel found");
    }
    while (queue.length > 0) {
        let item = queue.pop(); // Get 1 position from white
        let neighbours = util.getNeighbors(input.getRows(), input.getColumn(), item); //Get all neighbors of the pixel
        for (let ne of neighbours) {
            let distance = util.getPixelDistance(ne, item); // Get distance between neighbor and pixes
            let totalDistance = output.getOutputMatrixValue(item.i, item.j) + distance; // Get total distance from white pixel
            if (totalDistance < output.getOutputMatrixValue(ne.i, ne.j)) { //If calculated distance less than previous distance update new distance
                output.setOutputMatrixValue(ne.i, ne.j, totalDistance);
                queue.push(ne); // For new distance check if neighbors distance reduces                
            }
        }
    }
    return output;
}
exports.getDistanceBFS = getDistanceBFS;
//# sourceMappingURL=bfs.js.map