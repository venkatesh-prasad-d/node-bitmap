"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
const constants_json_1 = __importDefault(require("./constants.json"));
const Bitmap_1 = __importDefault(require("../Models/Bitmap"));
const Matrix_1 = __importDefault(require("../Models/Matrix"));
const TestData_1 = __importDefault(require("../Models/TestData"));
const readL = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});
/**
 * Function that reads user input from cli and converts to Test data object
 */
function readInput() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let testCases = yield readTestCases(); // Read total test cases
            let testData = new TestData_1.default(testCases);
            for (let i = 0; i < testCases; i++) {
                let [row, column] = yield readMatrixSize(); // Read matrix size
                let data = yield readMatrixData(row, column); // Read matrix data
                let matrix = new Matrix_1.default(row, column, data); // Create matrix data
                testData.addMatrix(matrix); // Add matrix to testData object
            }
            return testData;
        }
        catch (e) {
            console.error(e);
            process.exit(0);
        }
    });
}
/**
 *  Function that reads number of test cases from user
 */
function readTestCases() {
    return new Promise((resolve, reject) => {
        readL.question("Enter Number of test cases: ", (cases) => {
            cases = cases.trim();
            if (!isNaN(parseInt(cases))) {
                if (parseInt(cases) < constants_json_1.default.testCasesMin || parseInt(cases) > constants_json_1.default.testCasesMax) {
                    reject("Test cases must be between 1 to 1000");
                }
                else {
                    resolve(parseInt(cases));
                }
            }
            else {
                reject("Invalid Test Cases Input");
            }
        });
    });
}
/**
 *  Function that reads matrix size from user
 */
function readMatrixSize() {
    return new Promise((resolve, reject) => {
        readL.question("Enter Bitmap size: ", (bitmapSize) => {
            bitmapSize = bitmapSize.trim();
            let data = bitmapSize.split(" ");
            if (data.length != 2) {
                if (data.length < 2) {
                    return reject("Missing row/column");
                }
                else {
                    return reject("Additional data found");
                }
            }
            else {
                let typeCheck = data.every(function (element) {
                    if (!isNaN(parseInt(element))) {
                        return true;
                    }
                });
                if (typeCheck) {
                    if (parseInt(data[0]) < constants_json_1.default.rowMin || parseInt(data[0]) > constants_json_1.default.rowMax) {
                        reject("Row value should be between 1 to 182");
                    }
                    else if (parseInt(data[1]) < constants_json_1.default.colMin || parseInt(data[1]) > constants_json_1.default.colMax) {
                        reject("Column value should be between 1 to 182");
                    }
                    else {
                        resolve(data.map((x) => { return parseInt(x); }));
                    }
                }
                else {
                    return reject("Invalid data");
                }
            }
        });
    });
}
/**
 *  Function that reads matrix data from user
 */
function readMatrixData(row, column) {
    return new Promise((resolve, reject) => {
        let line = 0;
        let bitmap = new Bitmap_1.default();
        readL.setPrompt("Enter Bitmap data: \n");
        readL.prompt();
        readL.on("line", (data) => {
            data = data.trim();
            if (data.length < column || data.length > column) {
                return reject("Data and column length mismatch");
            }
            else {
                let matrixData = data.split("");
                let typeCheck = matrixData.every(function (element) {
                    if (!isNaN(parseInt(element)) && (parseInt(element) == 0 || parseInt(element) == 1)) {
                        return true;
                    }
                });
                if (!typeCheck) {
                    return reject("Invalid data");
                }
                bitmap.addRows(matrixData.map((x) => { return parseInt(x); }));
                line++;
                if (line == row) {
                    readL.removeAllListeners("line");
                    return resolve(bitmap);
                }
            }
        });
    });
}
exports.default = readInput;
//# sourceMappingURL=inputListener.js.map