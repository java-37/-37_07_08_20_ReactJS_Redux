import * as Types from './actionCounterTypes';
const init = {
    count:100
}

export default function counterReducer(state = init, action){
    switch(action.type){
        case Types.ADD:return {count:state.count + 1};
        case Types.SUB:return {count:state.count - 1};
        case Types.ADD_N: return {count:state.count + action.num};
        case Types.SUB_N: return {count:state.count - action.num};
        default:return state;
    }
}