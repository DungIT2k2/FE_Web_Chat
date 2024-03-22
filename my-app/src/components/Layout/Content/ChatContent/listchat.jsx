import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import ItemListChat from './itemlistchat';


function ListChat({ onChoose }) {
    const getdata = localStorage.getItem('chatdata');
    const chatdata = JSON.parse(getdata);


    return (

        <div className='list_chat'>
            <div className="search">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input type="text" placeholder='Search' />
            </div>
            <div className='all_item_list_chat'>
                {chatdata.map(data => (
                    <ItemListChat dataItem={data} onChoose={onChoose} />
                ))}
            </div>
        </div>

    );
}

export default ListChat;