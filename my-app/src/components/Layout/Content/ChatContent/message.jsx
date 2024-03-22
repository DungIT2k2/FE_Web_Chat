import { useState, useLayoutEffect, useEffect, useRef } from "react";
import { faFaceSmile, faPaperclip, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Message() {
    const getdata = localStorage.getItem('chatdata');
    const chatdata = JSON.parse(getdata);
    let choosen = localStorage.getItem('chooseUser');
    const [choose, setChoose] = useState(choosen);
    const dataChoose = chatdata[choosen-1];
    const dataMessage = dataChoose.message;
    console.log(dataMessage);

    const messageboxRef = useRef(null);

    useLayoutEffect(() => {
      messageboxRef.current.scrollTop = messageboxRef.current.scrollHeight;
    }, []);
  
    useEffect(() => {
      messageboxRef.current.scrollTop = messageboxRef.current.scrollHeight;
    }, [dataMessage]);

    return (
        <div className='message'>
            <div className='info_user_message'>
                <p className='name_message'>Quang Vinh</p>
                <p className='nation_user'>From: VietNam</p>
            </div>
            <div className="message_box" ref={messageboxRef}>
                {dataMessage.map(data => (
                    <div className={`line_message ${data.people}`}>
                        {data.chat}
                    </div>
                ))}
            </div>
            <div className="toolbar">
                <div className="tool_request">
                    <button>REQUEST VISIT</button>
                    <button>MAKE OFFER</button>
                </div>
                <div className="tool_message">
                    <div className="icon_message"><FontAwesomeIcon icon={faFaceSmile}/></div>
                    <input type="text" placeholder="Type a message ..."/>
                    <div className="tool_file"><FontAwesomeIcon icon={faPaperclip}/></div>
                    <button><span><FontAwesomeIcon icon={faPaperPlane}/></span></button>
                </div>
            </div>
        </div>
    );
}

export default Message;