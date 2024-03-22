import avtuser from '../../../../img/avt.jpg'

function ItemListChat({ dataItem }) {
    const dataLastMessage = dataItem.message[dataItem.message.length - 1]; 
    console.log(dataLastMessage);
    return (
        <div className='itemlistchat'>
            <div className="imguser">
                <div className="circle-container-small">
                    <img src={avtuser} alt="" className="circle-image-small"></img>
                </div>
            </div>
            <div className="infousers">
                <p className='nameuser'>{dataItem.name}</p>
                <p className='lastmessage'>{dataLastMessage.chat}</p>
            </div>
            <div className="noteuser">
                <p className='lasttime'>{dataLastMessage.time}</p>
                <div className='countmessage'>1</div>
            </div>
        </div>
    );
}

export default ItemListChat;