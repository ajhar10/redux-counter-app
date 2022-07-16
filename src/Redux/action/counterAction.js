import { decrement, increment, reset } from "../constants/counterConst"

export const incrementCounter=()=>{
    return{
        type : increment
    }
}
export const decrementCounter=()=>{
    return{
        type : decrement
    }
}
export const resetCounter=()=>{
    return{
        type : reset
    }
}