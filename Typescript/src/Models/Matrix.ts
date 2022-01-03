import Bitmap from "./Bitmap"

export default class Matrix{
    private rows:number;
    private column:number;
    private bitmap:Bitmap;

    constructor(rows:number,column:number,bitmap:Bitmap){
        this.rows = rows,
        this.column = column,
        this.bitmap = bitmap
    }

    setRows(rows:number){
        this.rows = rows;
    }

    getRows():number{
        return this.rows;
    }

    setColumn(column:number){
        this.column = column;
    }

    getColumn():number{
        return this.column;
    }

    setBitmap(bitmap:Bitmap){
        this.bitmap = bitmap;
    }

    getBitmap():Bitmap{
        return this.bitmap;
    }
}