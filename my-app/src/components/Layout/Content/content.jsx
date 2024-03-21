import './content.css'
import HeaderBar from './headerbar'
import ListChat from './listchat';
import Message from './message';

function Content() {
    return ( 
        <div className="content">
            <HeaderBar />
            <div className="bodycontent">
                <div className="namecontent"><span>Chat</span></div>
                <div className="frame">
                    <ListChat />
                    <Message />
                </div>
            </div>
        </div>
    );
}

export default Content;