import pixel from "../Interfaces/pixel" 
import Bitmap from "../Models/Bitmap"
import Output from "../Models/Output"

const neigbIndex:pixel[] = [{i:-1,j:0},{i:1,j:0},{i:0,j:1},{i:0,j:-1}];

/**
 * 
 * @param inputBitmap 
 * @returns array of white pixels
 */
export function getAllWhiteIndex(inputBitmap:Bitmap):pixel[]{
    let whiteIndex:pixel[] = []
    let input:number[][] = inputBitmap.getBitmap()
    for(let i = 0; i < input.length; i++){
        for(let j = 0; j < input[i].length; j++){
            if(input[i][j]==1){
                let obj = {
                    i : i,
                    j : j
                }
                whiteIndex.push(obj)
            }
        }
    }
    return whiteIndex;
}

/**
 * 
 * @param rows 
 * @param col 
 * @param pixel 
 * @returns neighboring pixels of current pixel
 */
export function getNeighbors(rows:number,col:number,pixel:pixel):pixel[]{
    let neighbors = [];
    for(let n of neigbIndex){
        let nRow = pixel.i + n.i;
        let nCol = pixel.j + n.j;
        if(nRow >= 0 && nCol>=0 && nRow < rows && nCol < col){
            neighbors.push({i:nRow,j:nCol})
        }
    }
    return neighbors
}

/**
 * 
 * @param rows 
 * @param column 
 * @returns Output Matrix
 */
export function initializeDistanceArray(rows:number,column:number):Output{
    let output:Output = new Output();
    
     output.initializeOutputMatrix(rows,column);
     return output
}

/**
 * 
 * @param array 
 * @param whites 
 * Function that initializes white pixel distance
 */
export function setWhiteDistance(array:Output,whites:pixel[]){
    for(let white of whites){
        array.setOutputMatrixValue(white.i,white.j,0);
    }
}

/**
 * 
 * @param pixel1 
 * @param pixel2 
 * @returns distance of both pixels
 */
export function getPixelDistance(pixel1:pixel,pixel2:pixel):number{
    return Math.abs(pixel1.i - pixel2.i) + Math.abs(pixel1.j - pixel2.j)
}

/**
 * 
 * @param bitmap 
 * @returns output formated string
 */
export function formatOutput(bitmap:number[][]):string{
    let output:string = ""
    for(let row of bitmap){
        output = output+row.join(" ")+"\n"
    }
    return output;
}

