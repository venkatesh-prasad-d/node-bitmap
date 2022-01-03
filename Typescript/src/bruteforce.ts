import * as util from "./Utilities/util"
import Matrix from "./Models/Matrix"
import pixel from "./Interfaces/pixel"
import Output from "./Models/Output"
import Bitmap from "./Models/Bitmap"

/**
 * 
 * @param input 
 * @returns Output Matrix
 * Function that takes in input matrix and returns output matrix
 */
export function getDistanceBruteForce(input:Matrix):Output{
    let whiteIndex:pixel[] = util.getAllWhiteIndex(input.getBitmap()) //get all white pixels
    let distanceOutput:Output = util.initializeDistanceArray(input.getRows(),input.getColumn()) //Initialize output error
    if(whiteIndex.length > 0){
        let bitMapObject:Bitmap = input.getBitmap()
        let bitMapData:number[][] = bitMapObject.getBitmap(); //get the bitmap matrix
        for(let i = 0; i < bitMapData.length; i++){ //Iterate through all the pixels 
            for(let j = 0; j < bitMapData[i].length; j++){
                let distance:number = 0
                if(bitMapData[i][j] != 1){
                    distance = getLeastDistanceFromWhites({i:i,j:j},whiteIndex) //Get the least distance from white pixels
                }
                distanceOutput.setOutputMatrixValue(i,j,distance) //Set the distance value in output matrix
            }
        }
        return distanceOutput
    }else{
        throw new Error("No white pixel found")
    }
    
}

/**
 * 
 * @param currentIndex 
 * @param whiteIndex 
 * @returns distance
 * Function the computes the distance for current pixel from all the white pixels and returns the least distances
 */
function getLeastDistanceFromWhites(currentIndex:pixel,whiteIndex:pixel[]):number{
    let distance:number | undefined;
    for(let white of whiteIndex){
        let newDistance = util.getPixelDistance(currentIndex,white); //conpute distance of pixel
        if(distance){
            distance = Math.min(distance,newDistance)
        }else{
            distance = newDistance
        }
    }
    return distance!;
}




