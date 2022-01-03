export default class Bitmap{
    private bitmap:number[][]

    constructor(){
        this.bitmap = []
    }

    public addRows(row:number[]){
        this.bitmap.push(row)
    }

    public getBitmap():number[][]{
        return this.bitmap;
    }
}