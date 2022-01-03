let util = require("./Utilities/util")

/**
 * 
 * @param {*} input 
 * @returns {*} outputMatrix
 * @description process the input matrix and return output
 */
function getDistanceBFS(input){
    let queue = util.getAllWhiteIndex(input.bitmap) // Get position on white pixel
    let output = util.initializeDistanceArray(input.rows,input.column) // Initialize Output array with max value
    util.setWhiteDistance(output,queue) //Set distance 0 for white pixel

    if(queue.length == 0){
        throw new Error("No white pixel found")
    }
    while(queue.length > 0){
        let item = queue.pop(); // Get 1 position from white
            let neighbours = util.getNeighbors(input.rows,input.column,item) //Get all neighbors of the pixel
            for(let ne of neighbours){
                let distance = util.getPixelDistance(ne,item); // Get distance between neighbor and pixes
                let totalDistance = output[item.i][item.j]+distance; // Get total distance from white pixel
                if(totalDistance < output[ne.i][ne.j]){ //If calculated distance less than previous distance update new distance
                    output[ne.i][ne.j] = totalDistance;  
                    queue.push(ne) // For new distance check if neighbors distance reduces                
                }                
            }
        } 
    return output
}


module.exports = {
    getDistanceBFS:getDistanceBFS
}



