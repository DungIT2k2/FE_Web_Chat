import './sidebar.css'
import avt from '../../../img/avt.jpg';
import Item from './item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMessage, faCalendar, faTag, faFile, faGear, faAngleDown } from '@fortawesome/free-solid-svg-icons'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="userContainer">
                <div className="circle-container">
                    <img src={avt} alt="" className="circle-image"></img>

                </div>
                <span>Tiến Dũng <FontAwesomeIcon icon={faAngleDown} /></span> 
            </div>
            <div className="itemContainer">
                <Item
                    id="PROPERTIES"
                    icon={faHouse}
                    title="PROPERTIES"
                />
                <Item
                    id="CHAT"
                    icon={faMessage}
                    title="CHAT"
                />
                <Item
                    id="CALENDER"
                    icon={faCalendar}
                    title="CALENDER"
                />
                <Item
                    id="OFFERS"
                    icon={faTag}
                    title="OFFERS"
                />
                <Item
                    id="DOCUMENTS"
                    icon={faFile}
                    title="DOCUMENTS"
                />
                <Item
                    id="SETTINGS"
                    icon={faGear}
                    title="SETTINGS"
                />
            </div>
        </div>
    );
}

export default Sidebar;