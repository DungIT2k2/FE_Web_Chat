import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import ItemListChat from './itemlistchat';

function ListChat() {
    const getdata = localStorage.getItem('chatdata');
    const chatdata = JSON.parse(getdata);
    console.log(chatdata);
    return (
        <div className='listchat'>
            <div className="search">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input type="text" placeholder='Search' />
            </div>
            <div className='allitemlistchat'>
                {chatdata.map(data => (
                    <ItemListChat dataItem={data}/>
                ))}
                
                {/* <ItemListChat />
                <ItemListChat />
                <ItemListChat />
                <ItemListChat />
                <ItemListChat />
                <ItemListChat />
                <ItemListChat />
                <ItemListChat />
                <ItemListChat />
                <ItemListChat /> */}
            </div>
        </div>
    );
}

export default ListChat;