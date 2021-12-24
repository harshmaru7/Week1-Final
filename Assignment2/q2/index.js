class QueenAttack{
    constructor(){
        let a = Math.ceil(Math.random()*7)
        let b = Math.ceil(Math.random()*7)
        this.white = [a,b]
        let c= Math.ceil(Math.random()*7)
        let d = Math.ceil(Math.random()*7)
        this.black = [c,d]
        while (c==a && d==b){
            c= Math.ceil(Math.random()*7)
            d = Math.ceil(Math.random()*7)
        }
        this.black = [c,d]
    }
    canAttack(){
        if (this.white[0]==this.black[0]||this.white[1]==this.black[1]){
            return true
        }
        if(Math.abs(this.white[0] -this.black[0]) === Math.abs(this.white[1] -this.black[1])){
            return true 
        }
        return false 
    }
}