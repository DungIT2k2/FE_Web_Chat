import './content.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import ItemListChat from './itemlistchat';

function ListChat() {
    return (
        <div className='listchat'>
            <div className="search">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input type="text" placeholder='Search' />
            </div>
            <div className='allitemlistchat'>
                <ItemListChat />
                <ItemListChat />
                <ItemListChat />
                <ItemListChat />
                <ItemListChat />
                <ItemListChat />
                <ItemListChat />
                <ItemListChat />
                <ItemListChat />
                <ItemListChat />
                <ItemListChat />
            </div>
        </div>
    );
}

export default ListChat;