import avtuser from '../../../../img/avt.jpg'

function ItemListChat({ dataItem, onChoose }) {
    const dataLastMessage = dataItem.message[dataItem.message.length - 1]; 

    return (
        <div className='item_list_chat' id={dataItem.id} onClick={() => {onChoose(dataItem.id)}}>
            <div className="img_user">
                <div className="circle-container-small">
                    <img src={avtuser} alt="" className="circle-image-small"></img>
                </div>
            </div>
            <div className="info_users">
                <p className='name_user'>{dataItem.name}</p>
                <p className='lastmessage'>{dataLastMessage.chat}</p>
            </div>
            <div className="note_user">
                <p className='lasttime'>{dataLastMessage.time}</p>
                <div className='count_message'>1</div>
            </div>
        </div>
    );
}

export default ItemListChat;