import { useState, useLayoutEffect, useEffect, useRef, Fragment } from "react";
import { faFaceSmile, faPaperclip, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import avtuser from "../../../../img/avt.jpg"

var userName;
var userNation;

function Message({ idChoose }) {
    useEffect(() => {
        console.log("re-render");
        const getdata = localStorage.getItem('chatdata');
        const chatdata = JSON.parse(getdata);
        const dataChoose = chatdata[idChoose - 1];
        const dataInit = dataChoose.message;
        userName = dataChoose.name;
        userNation = dataChoose.nation;
        setData(dataInit);
    }, [idChoose]);
    const [data, setData] = useState([]);
    const messageboxRef = useRef();

    useLayoutEffect(() => {
        messageboxRef.current.scrollTop = messageboxRef.current.scrollHeight;
    }, []);

    useEffect(() => {
        const getdata = localStorage.getItem('chatdata');
        const chatdata = JSON.parse(getdata);
        const dataChoose = chatdata[idChoose - 1];
        dataChoose.message = data;
        localStorage.setItem('chatdata', JSON.stringify(chatdata));
        messageboxRef.current.scrollTop = messageboxRef.current.scrollHeight;
    }, [data]);

    const handleClick = () => {
        const currentTime = new Date();
        const hours = currentTime.getHours();
        const minutes = currentTime.getMinutes();
        const textMessage = document.getElementById('input_message');

        const newMessage = { chat: textMessage.value, time: hours + ":" + minutes, people: "me" }
        textMessage.value = '';
        textMessage.focus();
        setData([...data, newMessage]);
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleClick();
        }
    }

    return (
        <div className='message'>
            <div className='info_user_message'>
                <p className='name_message'>{userName}</p>
                <p className='nation_user'>From: {userNation}</p>
            </div>
            <div className="message_box" ref={messageboxRef}>
                {data.map(value => (
                    <Fragment>
                        {value.people === "your" ?
                            <div className="line_message_your">
                                <div className="user_message">
                                    <div className="circle-container-smaller">
                                        <img src={avtuser} alt="" className="circle-image-smaller"></img>
                                    </div>
                                    <div className="time">{value.time}</div>
                                </div>
                                <div className={`line_message ${value.people}`}>
                                    {value.chat}
                                </div>
                            </div> :
                            <div className={`line_message ${value.people}`}>
                                {value.chat}
                            </div>}

                    </Fragment>
                ))}
            </div>
            <div className="toolbar">
                <div className="tool_request">
                    <button>REQUEST VISIT</button>
                    <button>MAKE OFFER</button>
                </div>
                <div className="tool_message">
                    <div className="icon_message"><FontAwesomeIcon icon={faFaceSmile} /></div>
                    <input id="input_message" type="text" placeholder="Type a message ..." onKeyDown={handleKeyDown} />
                    <div className="tool_file"><FontAwesomeIcon icon={faPaperclip} /></div>
                    <button onClick={handleClick}><span><FontAwesomeIcon icon={faPaperPlane} /></span></button>
                </div>
            </div>
        </div>
    );
}

export default Message;