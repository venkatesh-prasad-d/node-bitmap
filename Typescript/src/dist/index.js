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
const inputListener_1 = __importDefault(require("./Utilities/inputListener"));
const bfs = __importStar(require("./bfs"));
const bruteForce = __importStar(require("./bruteforce"));
const util = __importStar(require("./Utilities/util"));
/**
 * Function that reads the input from command line and computes the distance Matrix
 */
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        let testData = yield (0, inputListener_1.default)(); // Read the user input
        for (let i = 0; i < testData.getTestCases(); i++) {
            try {
                console.log("Input Data:\n" + util.formatOutput(testData.getMatrix(i).getBitmap().getBitmap()));
                let bruteForceOutput = bruteForce.getDistanceBruteForce(testData.getMatrix(i)); // Calculate the distance Matrix using brute force
                console.log("Brute Force Output:\n" + util.formatOutput(bruteForceOutput.getOutputMatrix()));
                let bfsOutput = bfs.getDistanceBFS(testData.getMatrix(i)); // Calculate the distance Matrix using BFS           
                console.log("BFS output:\n" + util.formatOutput(bfsOutput.getOutputMatrix()));
            }
            catch (e) {
                console.error(e);
            }
        }
        process.exit(0);
    });
}
/**
 *  Self invoking function and starting of the program
 */
(() => __awaiter(void 0, void 0, void 0, function* () {
    main();
}))().catch(e => {
    console.error(e);
    process.exit(1);
});
//# sourceMappingURL=index.js.map