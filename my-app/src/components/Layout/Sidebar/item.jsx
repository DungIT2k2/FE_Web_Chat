import './sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Item(props) {

    const handleOnClick = () => {
        const items = document.querySelectorAll('.Item');
        items.forEach(item => {
            item.classList.remove('Item_active');
        });
        const currentItem = document.getElementById(props.id);
        currentItem.classList.add('Item_active');
    }

    return (
        <div className="Item" id={props.id} onClick={handleOnClick}>
            <div className="iconItem" ><FontAwesomeIcon icon={props.icon} /> </div>
            <label className="nameItem">{props.title}</label>
        </div>
    );
}

export default Item;