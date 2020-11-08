//const Math =require ("Math")

export const RandomBetween=(min:number , max:number):number=>{
    return Math.floor(Math.random() * (max - min) + min)
}