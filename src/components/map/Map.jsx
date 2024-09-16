import { MapContainer, TileLayer } from 'react-leaflet'
import './map.scss'
import "leaflet/dist/leaflet.css"
import Pin from '../pin/Pin'

function Map({items}){
  return (
    <div className='map'>
        <MapContainer center={[17.3969522, 78.4243469]} zoom={7} scrollWheelZoom={false} className='map'>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {items.map(item => (
              <Pin item={item} key={item.id} />
            ))}
        </MapContainer>
    </div>
  )
}

export default Map