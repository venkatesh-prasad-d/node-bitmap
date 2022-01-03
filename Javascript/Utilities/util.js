const neigbIndex = [{r:-1,c:0},{r:1,c:0},{r:0,c:1},{r:0,c:-1}];

let getAllWhiteIndex =  function getAllWhiteIndex(input){
    let whiteIndex = []
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

let getNeighbors =  function getNeighbors(rows,col,pixel){
    let neighbors = [];
    for(let n of neigbIndex){
        let nRow = pixel.i + n.r;
        let nCol = pixel.j + n.c;
        if(nRow >= 0 && nCol>=0 && nRow < rows && nCol < col){
            neighbors.push({i:nRow,j:nCol})
        }
    }
    return neighbors
}

let initializeDistanceArray = function initializeDistanceArray(rows,column){
    let output = []
    for(let i = 0; i < rows; i++){
        let col = []
        for(let j = 0; j < column; j++){
            col.push(Infinity)
        }
        output.push(col)
    }
    return output
}

let setWhiteDistance =  function setWhiteDistance(array,whites){
    for(let white of whites){
        array[white.i][white.j] = 0;
    }
}

let getPixelDistance = function getPixelDistance(pixel1,pixel2){
    return Math.abs(pixel1.i - pixel2.i) + Math.abs(pixel1.j - pixel2.j)
}

module.exports = {
    getAllWhiteIndex:getAllWhiteIndex,
    getNeighbors:getNeighbors,
    initializeDistanceArray:initializeDistanceArray,
    setWhiteDistance:setWhiteDistance,
    getPixelDistance:getPixelDistance
}