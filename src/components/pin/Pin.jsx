import { Marker, Popup } from 'react-leaflet'
import './pin.scss'
import { Link } from 'react-router-dom'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// Set up the default icon for markers
const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

function Pin({item}){
  return (
    <div className='pin'>
        <Marker position={[item.latitude, item.longitude]}>
                <Popup>
                    <div className="popupContainer">
                      <img src={item.img} alt="" />
                      <div className="textContainer">
                        <Link to={`/${item.id}`}>{item.title}</Link>
                        <span>{item.bedrppm} bedroom</span>
                        <b>₹ {item.price}</b>
                      </div>
                    </div>
                </Popup>
            </Marker>
    </div>
  )
}

export default Pin