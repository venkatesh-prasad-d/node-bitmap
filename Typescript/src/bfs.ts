import * as util from "./Utilities/util"
import Matrix from "./Models/Matrix"
import pixel from "./Interfaces/pixel"
import Output from "./Models/Output"

/**
 * 
 * @param input 
 * @returns Output Matrix
 * Function takes input matrix and processes and returns the output matrix
 *  
 */
export function getDistanceBFS(input:Matrix){
    let queue:pixel[] = util.getAllWhiteIndex(input.getBitmap())  // Get position on white pixel
    let output:Output = util.initializeDistanceArray(input.getRows(),input.getColumn()) // Initialize Output array with max value
    util.setWhiteDistance(output,queue) //Set distance 0 for white pixel

    if(queue.length == 0){
        throw new Error("No white pixel found")
    }
    while(queue.length > 0){
        let item:pixel = queue.pop()!; // Get 1 position from white
            let neighbours:pixel[] = util.getNeighbors(input.getRows(),input.getColumn(),item) //Get all neighbors of the pixel
            for(let ne of neighbours){
                let distance:number = util.getPixelDistance(ne,item); // Get distance between neighbor and pixes
                let totalDistance:number = output.getOutputMatrixValue(item.i,item.j)+distance; // Get total distance from white pixel
                if(totalDistance < output.getOutputMatrixValue(ne.i,ne.j)){ //If calculated distance less than previous distance update new distance
                    output.setOutputMatrixValue(ne.i,ne.j,totalDistance);  
                    queue.push(ne) // For new distance check if neighbors distance reduces                
                }                
            }
        } 
    return output
}





