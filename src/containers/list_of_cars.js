import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class ListOfCars extends Component {
  listOfCars = ({ list }) => {
    if (list) {
      return list.map(car => {
        return (
          <Link to={`/car/${car.id}`} key={car.id} className="car-item">
            <div className="left">
              <img alt={car.model} src={`/images/${car.model}.jpg`} />
            </div>
            <div className="right">
              <h4>{ car.model }</h4>
              <h6>{ car.brand }</h6>
            </div>
          </Link>
        )
      })
    }
  };

  render () {
    return (
      <div>
        {this.listOfCars(this.props.cars)}
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    cars: state.cars
  }
}

export default connect(mapStateToProps, null)(ListOfCars);