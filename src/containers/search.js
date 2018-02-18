import React, { Component } from 'react';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      keyword: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      keyword: event.target.value
    });
  }

  searchCars = (event) => {
    event.preventDefault();
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="main-search">
        <form onSubmit={this.searchCars}>
          <input
            type="text"
            onChange={(event) => this.handleChange(event)}
            value={this.state.keyword}
            />
        </form>
      </div>
    );
  }
}

export default Search;
