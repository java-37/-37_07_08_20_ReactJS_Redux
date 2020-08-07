const redux = require("redux");

const initState = {
    count:0
}

function reducer(state = initState,action){
    switch(action.type){
        case "INC": return {count:state.count + 1};
        case "DEC": return {count:state.count - 1};
        case "ADD_N": return {count:state.count + action.num}
    }
    return state;
}

const store = redux.createStore(reducer);


// store.dispatch({
//     type:"Name",
//     name:"John"
// });

// console.log(store.getState());
store.subscribe(() => {
    console.log("Subscription",store.getState());
});

store.dispatch({type:"INC"});
store.dispatch({type:"INC"});
store.dispatch({type:"INC"});
store.dispatch({type:"DEC"});

store.dispatch({
    type:"ADD_N",
    num:10
});

// console.log(store.getState());