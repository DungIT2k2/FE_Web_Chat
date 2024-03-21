import './content.css'
import avtuser from '../../../img/avt.jpg'

function ItemListChat() {
    return (
        <div className='itemlistchat'>
            <div className="imguser">
                <div className="circle-container-small">
                    <img src={avtuser} alt="" className="circle-image-small"></img>
                </div>
            </div>
            <div className="infousers">
                <p className='nameuser'>Quang Vinh</p>
                <p className='lastmessage'>Hi, How are you ?</p>
            </div>
            <div className="noteuser">
                <p className='lasttime'>02 Feb</p>
                <div className='countmessage'>5</div>
            </div>
        </div>
    );
}

export default ItemListChat;