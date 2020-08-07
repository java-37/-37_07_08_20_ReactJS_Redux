import * as Types from './actionCarTypes';
const init = {
    cars:[
        {
            title:'Car1',
            price:100
        },
        {
            title:'Car2',
            price:200
        },
        {
            title:'Car3',
            price:300
        }
    ]
}

export default function carReducer(state=init,action){
    switch(action.type){
        case Types.ADD:
            return {cars:[...state.cars,action.car]}
    }
    return state;
}