let util = require("./Utilities/util")

function getDistanceBruteForce(input){
    let whiteIndex = util.getAllWhiteIndex(input.bitmap)
    let distanceOutput = util.initializeDistanceArray(input.rows,input.column)
    if(whiteIndex.length > 0){
        for(let i = 0; i < input.bitmap.length; i++){
            for(let j = 0; j < input.bitmap[i].length; j++){
                let distance = 0
                if(input.bitmap[i][j] != 1){
                    distance = getLeastDistanceFromWhites({i:i,j:j},whiteIndex)
                }
                distanceOutput[i][j] = distance
            }
        }
        return distanceOutput
    }else{
        throw new Error("No white pixel found")
    }
    
}

function getLeastDistanceFromWhites(currentIndex,whiteIndex){
    let distance ;
    for(let white of whiteIndex){
        let newDistance = util.getPixelDistance(currentIndex,white);
        if(distance){
            distance = Math.min(distance,newDistance)
        }else{
            distance = newDistance
        }
    }
    return distance;
}

module.exports = {
    getDistanceBruteForce:getDistanceBruteForce
}