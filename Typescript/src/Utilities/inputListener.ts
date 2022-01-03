import readline from 'readline';
import constants from "./constants.json";
import Bitmap from "../Models/Bitmap";
import Matrix from "../Models/Matrix";
import TestData from "../Models/TestData"

const readL = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
    terminal:false
})

/**
 * Function that reads user input from cli and converts to Test data object
 */
async function readInput():Promise<TestData>{
    try{
        let testCases:number = await readTestCases(); // Read total test cases
        let testData:TestData = new TestData(testCases)
        for(let i = 0; i < testCases; i++){
            let [row,column]:number[] = await readMatrixSize(); // Read matrix size
            let data:Bitmap =  await readMatrixData(row,column); // Read matrix data
            let matrix:Matrix = new Matrix(row,column,data); // Create matrix data
            testData.addMatrix(matrix) // Add matrix to testData object
        }
        return testData;
    }catch(e){
        console.error(e)
        process.exit(0)
    }
}

/**
 *  Function that reads number of test cases from user
 */
function readTestCases():Promise<number>{
    return new Promise((resolve,reject)=>{
        readL.question("Enter Number of test cases: ", (cases:string)=>{
            cases = cases.trim()
            if(!isNaN(parseInt(cases))){
                if(parseInt(cases) < constants.testCasesMin || parseInt(cases) > constants.testCasesMax){
                    reject("Test cases must be between 1 to 1000")
                }else{
                    resolve(parseInt(cases));
                }
            }else{
                reject("Invalid Test Cases Input")
            }
        })
    })
}

/**
 *  Function that reads matrix size from user
 */
function readMatrixSize():Promise<number[]>{
    return new Promise((resolve,reject)=>{
        readL.question("Enter Bitmap size: ",(bitmapSize:string)=>{
            bitmapSize = bitmapSize.trim()
            let data:string[] = bitmapSize.split(" ");
            if(data.length != 2){
                if(data.length < 2){
                    return reject("Missing row/column")
                }else{
                    return reject("Additional data found")
                }
            }else{
                let typeCheck:boolean = data.every(function(element) {
                        if(!isNaN(parseInt(element))){
                            return true;
                        }
                    }
                );
                if(typeCheck){
                    if(parseInt(data[0]) < constants.rowMin || parseInt(data[0]) > constants.rowMax){
                        reject("Row value should be between 1 to 182")
                    }else if(parseInt(data[1]) < constants.colMin || parseInt(data[1]) > constants.colMax){
                        reject("Column value should be between 1 to 182")
                    }else{
                        resolve(data.map((x)=>{return parseInt(x)}));
                    }
                }else{
                    return reject("Invalid data")
                }                
            }            
        })
    })
}

/**
 *  Function that reads matrix data from user
 */
function readMatrixData(row:number,column:number):Promise<Bitmap>{
    return new Promise((resolve,reject)=>{
        let line:number = 0;
        let bitmap:Bitmap = new Bitmap()
        readL.setPrompt("Enter Bitmap data: \n");
        readL.prompt();
        readL.on("line",(data)=>{
            data = data.trim()
            if(data.length < column || data.length > column ){
                return reject("Data and column length mismatch")
            }else{
                let matrixData = data.split("")
                let typeCheck = matrixData.every(function(element) {
                        if(!isNaN(parseInt(element))&&(parseInt(element)==0 || parseInt(element) == 1)){
                            return true;
                        }
                    }                
                );
                if(!typeCheck){
                    return reject("Invalid data");
                }
                bitmap.addRows(matrixData.map((x)=>{return parseInt(x)}))
                line++
                if(line == row){                    
                    readL.removeAllListeners("line")
                    return resolve(bitmap)
                }
            }
            
        })
    })
}

export default readInput;