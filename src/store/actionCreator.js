import * as counterTypes from './actionCounterTypes';
import * as carTypes from './actionCarTypes';


export function incCount(){
    return {
        type:counterTypes.ADD
    }
}

export function decCount(){
    return {
        type:counterTypes.SUB
    }
}

export function addNumber(num){
    return {
        type: counterTypes.ADD_N,
        num
    }
}

export function subNumber(num){
    return {
        type:counterTypes.SUB_N,
        num
    }
}

export function addCar(car){
    return {
        type:carTypes.ADD,
        car
    }
}