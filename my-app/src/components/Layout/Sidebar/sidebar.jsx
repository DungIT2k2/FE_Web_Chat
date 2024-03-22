import './sidebar.css'
import avt from '../../../img/avt.jpg';
// import Item from './item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMessage, faCalendar, faTag, faFile, faGear, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

const categorys = [{
    id: 1,
    icon: faHouse,
    title: "PROPERTIES"
}, {
    id: 2,
    icon: faMessage,
    title: "CHAT"
}, {
    id: 3,
    icon: faCalendar,
    title: "CALENDER",
}, {
    id: 4,
    icon: faTag,
    title: "OFFERS",
}, {
    id: 5,
    icon: faFile,
    title: "DOCUMENTS",
}, {
    id: 6,
    icon: faGear,
    title: "SETTINGS",
}
];

function Sidebar({ onCategorySelect }) {
    const [choose, setChoose] = useState(2);

    return (
        <div className="sidebar">
            <div className="userContainer">
                <div className="circle-container">
                    <img src={avt} alt="" className="circle-image"></img>

                </div>
                <span>Tiến Dũng <FontAwesomeIcon icon={faAngleDown} /></span>
            </div>

            <div className="itemContainer">
                {categorys.map(category => (
                    <div className={`Item ${choose === category.id ? 'Item_active' : ''}`} key={category.id} onClick={() => {
                        onCategorySelect(category.id);
                        setChoose(category.id)
                    }}>
                        <div className="iconItem" ><FontAwesomeIcon icon={category.icon} /> </div>
                        <label className="nameItem">{category.title}</label>
                    </div>
                )
                )}
            </div>
        </div>
    );
}

export default Sidebar;