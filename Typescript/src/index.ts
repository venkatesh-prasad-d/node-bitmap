import readInput from "./Utilities/inputListener"
import TestData from "./Models/TestData"
import * as bfs from "./bfs"
import * as bruteForce from "./bruteforce"
import * as util from "./Utilities/util"

/**
 * Function that reads the input from command line and computes the distance Matrix
 */
async function main(){
    let testData:TestData = await readInput() // Read the user input
    for(let i = 0; i < testData.getTestCases(); i++){
        try{
            console.log("Input Data:\n"+util.formatOutput(testData.getMatrix(i).getBitmap().getBitmap()))
            let bruteForceOutput = bruteForce.getDistanceBruteForce(testData.getMatrix(i)) // Calculate the distance Matrix using brute force
            console.log("Brute Force Output:\n"+util.formatOutput(bruteForceOutput.getOutputMatrix()))
            let bfsOutput = bfs.getDistanceBFS(testData.getMatrix(i)) // Calculate the distance Matrix using BFS           
            console.log("BFS output:\n"+util.formatOutput(bfsOutput.getOutputMatrix()))
        }catch(e){
            console.error(e)
        }        
    }
    process.exit(0)
}

/**
 *  Self invoking function and starting of the program
 */
(async()=>{
    main()
})().catch(e => {
    console.error(e);
    process.exit(1)
})