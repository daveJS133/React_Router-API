import React from 'react';
import ShipsList from './ShipsList.jsx';

class Ships extends React.Component{
  constructor() {
    super();
    this.state = {ships: []}
  }

  componentDidMount() {
    let url = 'http://swapi.co/api/starships/?format=json'
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.onload = () => {
      const responseData = JSON.parse(request.responseText);
      const shipsList = responseData.results;
      this.setState({ships: shipsList});
    }

    request.send();
  }

  render() {
    return(<ShipsList ships={this.state.ships} />)
  }
}

export default Ships;