import React ,{Component} from 'react';
import mapboxgl from 'mapbox-gl';
import {connect} from 'react-redux';
import {getCoords,getIsRoute,getIsRemoveRoute} from '../../modules/Map/map';
import './mapBox.css';

class Map extends Component {
    map = null;
    mapContainer = React.createRef();
  
    componentDidMount() {
      mapboxgl.accessToken = "pk.eyJ1IjoidjF0YWw0aWsiLCJhIjoiY2pyaGZxazNrMDZxOTQ0cGtxc2NyNzM4ZyJ9.fzm42pF2nqngAPU2OX5cvQ";
      this.map = new mapboxgl.Map({
        container: this.mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v9",
        center: [30.2656504, 59.8029126],
        zoom: 10
      });
    }
    componentDidUpdate(){
      const{coords,isRoute,remove}=this.props;
      if(isRoute){
        this.map.addLayer({
          "id": "route",
          "type": "line",
          "source": {
          "type": "geojson",
          "data": {
          "type": "Feature",
          "properties": {},
          "geometry": {
              "type": "LineString",
              "coordinates": coords
              } 
            }
          },
          "layout": {
              "line-join": "round",
              "line-cap": "round"
            },
          "paint": {
              "line-color": "#e50d0d",
              "line-width": 8
          }
          });
      }
      if(remove){
        this.map.removeLayer('route')
      }    
    }
  
    componentWillUnmount() {
      this.map.remove();
    }
  
    render() {
      return <div className='mapBox' ref={this.mapContainer} />;
    }
  }

  export default connect(
    state=>({
      coords:getCoords(state),
      isRoute:getIsRoute(state),
      remove:getIsRemoveRoute(state)
    }),{})(Map);
