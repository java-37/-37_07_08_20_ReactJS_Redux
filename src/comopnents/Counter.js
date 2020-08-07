import React from 'react';
import {connect} from 'react-redux';
// import * as ActionTypes from '../store/actionCounterTypes';
import * as actions from '../store/actionCreator';

class Counter extends React.Component{
    
    render(){
        return(
            <div style={{
                width:'300px',
                margin:'50px auto',
                border:'1px solid black',
                padding:'20px',
                textAlign:'center'
            }}>
                <h2>Counter</h2>
                <h3>Count: {this.props.cnt}</h3>
                <button onClick={this.props.addCount}>Add</button>
                <button onClick={this.props.subCount}>Sub</button><br/>
                <button onClick={() => this.props.addNum(25)}>Add25</button>
                <button onClick={() => this.props.subNum(10)}>Sub10</button>
            </div>
        );
    }
}

function mapStateToProps(state){
    // console.log(state);
    return {
        cnt: state.counterReducer.count
    }
}

// function mapDispatchToProps(dispatch){
//     return {
//         addCount: () => dispatch({type:ActionTypes.ADD}),
//         subCount: () => dispatch({type:ActionTypes.SUB}),
//         addNum: num => dispatch({type:ActionTypes.ADD_N,num:num}),
//         subNum: num => dispatch({type:ActionTypes.SUB_N,num})
//     }
// }

function mapDispatchToProps(dispatch){
    return {
        addCount: () => dispatch(actions.incCount()),
        subCount: () => dispatch(actions.decCount()),
        addNum: num => dispatch(actions.addNumber(num)),
        subNum: num => dispatch(actions.subNumber(num))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);