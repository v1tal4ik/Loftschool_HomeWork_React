import React ,{Component} from 'react';




export default class Map extends Component {
    map = null;
    mapContainer = React.createRef();
  
    componentDidMount() {
      mapboxgl.accessToken = "pk.eyJ1IjoidjF0YWw0aWsiLCJhIjoiY2pyaGZxazNrMDZxOTQ0cGtxc2NyNzM4ZyJ9.fzm42pF2nqngAPU2OX5cvQ";
      this.map = new mapboxgl.Map({
        container: this.mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v9",
        center: [30.2656504, 59.8029126],
        zoom: 15
      });
    }
  
    componentWillUnmount() {
      this.map.remove();
    }
  
    render() {
      return <div ref={this.mapContainer} />;
    }
  }