import React from "react";
import { connect } from "react-redux";
import * as actions from "../store/actionCreator";

const carsContainer = {
  display: "flex",
  width: "800px",
  margin: "0 auto",
};
const car = {
  flexBasis: "200px",
  border: "1px solid black",
  padding: "15px",
  boxSizing: "border-box",
};

const Cars = (props) => {
    console.log(props);
  return (
      <>
      <div style={{width:'400px',margin:'50px auto'}}>
          <form onSubmit={e => {
              e.preventDefault();
              props.addCar({
                  title:e.target.title.value,
                  price: parseInt(e.target.price.value)
              });
          }}>
            <input type="text" name="title"/>
            <input type="text" name="price"/>
            <input type="submit"/>
          </form>
      </div>
    <div style={carsContainer}>
      {props.cars.map((v, i) => {
        return (
          <div key={i} style={car}>
            <h2>{v.title}</h2>
            <h3>Car price: {v.price}</h3>
          </div>
        );
      })}
    </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cars: state.carReducer.cars,
  };
};

const mapDispatchToProps = dispatch => {
    return {
        addCar: car => dispatch(actions.addCar(car))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Cars);
