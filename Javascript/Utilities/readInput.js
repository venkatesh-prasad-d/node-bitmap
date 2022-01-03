const readline = require("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
    terminal:false
})
let constants = require("./constants").constants
let TestData = require("../Models/Matrix").TestData;
let Matrix = require("../Models/Matrix").Matrix

async function readInput(){
    try{
        let testCases = await readTestCases();
        let testData = new TestData(testCases)
        for(let i = 0; i < testCases; i++){
            let [row,column] = await readMatrixSize();
            let data =  await readMatrixData(row,column);
            let matrix = new Matrix(row,column,data);
            testData.addMatrix(matrix)
        }
        return testData;
    }catch(e){
        console.error(e)
        process.exit(0)
    }
}

function readTestCases(){
    return new Promise((resolve,reject)=>{
        readline.question("Enter Number of test cases: ", (cases)=>{
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

function readMatrixSize(){
    return new Promise((resolve,reject)=>{
        readline.question("Enter Bitmap size: ",(bitmapSize)=>{
            bitmapSize = bitmapSize.trim()
            let data = bitmapSize.split(" ");
            if(data.length != 2){
                if(data.length < 2){
                    reject("Missing row/column")
                }else{
                    reject("Additional data found")
                }
            }else{
                let typeCheck = data.every(function(element) {
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
                    reject("Invalid data")
                }                
            }            
        })
    })
}

function readMatrixData(row,column){
    return new Promise((resolve,reject)=>{
        let line = 0;
        let bitmap = []
        readline.setPrompt("Enter Bitmap data: \n");
        readline.prompt();
        readline.on("line",(data)=>{
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
                bitmap[line] = matrixData.map((x)=>{return parseInt(x)})
                line++
                if(line == row){
                    
                    readline.removeAllListeners("line")
                    return resolve(bitmap)
                }
            }
            
        })
    })
}

module.exports = {
    readInput:readInput
}