import React ,{Component} from 'react';
import mapboxgl from 'mapbox-gl';
import {connect} from 'react-redux';
import {getCoords,getIsOrder} from '../../modules/Map/map';
import './mapBox.css';

var id=0;

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
      const{coords,isOrder}=this.props;
      const start = coords[0];

      if(isOrder){
        this.map.addLayer({
          "id": "route"+id,
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
          this.map.flyTo({
            center: start,
            zoom: 12,
            speed: 0.6,
            curve: 1,
            easing(t) {
              return t;
            }
          });
      }else{
        --id
        this.map.removeLayer("route"+id);
        this.map.flyTo({
          center: [30.2656504, 59.8029126],
          zoom: 10,
          speed: 0.8,
          curve: 1,
          easing(t) {
            return t;
          }
        });
      }
      id++;
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
      isOrder:getIsOrder(state)
    }),{})(Map);
