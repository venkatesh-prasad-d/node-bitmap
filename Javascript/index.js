let readInputService = require("./Utilities/readInput");
let bfs = require("./bfs");
let bruteForce = require("./bruteForce");

(async ()=>{    
    let testData = await readInputService.readInput()    
    for(let i = 0; i < testData.testCases; i++){
        try{
            console.log("Input Data: ",testData.getMatrix(i).bitmap)
            let bruteForceOutput = bruteForce.getDistanceBruteForce(testData.getMatrix(i))
            console.log("Brute Force Output: ",bruteForceOutput)
            let bfsOutput = bfs.getDistanceBFS(testData.getMatrix(i))            
            console.log("BFS output: ",bfsOutput)
        }catch(e){
            console.log(e.toString())
        }        
    }
    process.exit(0)
})().catch(e=>{
    console.log(e)
    process.exit(1)
})
