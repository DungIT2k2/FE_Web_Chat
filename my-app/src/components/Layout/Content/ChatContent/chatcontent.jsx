import ListChat from "./listchat";
import Message from "./message";

const chatdata = [
    {
        id: 1,
        name: "Quang Vinh",
        nation: "VietNam",
        message: [
            { chat: "Hi", time: "10:11", people: "your" },
            { chat: "How are you ?", time: "10:11", people: "your" },
            { chat: "Hello", time: "10:11", people: "me" },
            { chat: "I'm fine", time: "10:11", people: "me" }],
    },
    {
        id: 1,
        name: "John",
        nation: "America",
        message: [
            { chat: "Hi", time: "10:11", people: "your" },
            { chat: "How are you ?", time: "10:11", people: "your" },
            { chat: "Hello", time: "10:11", people: "me" },
            { chat: "I'm fine", time: "10:11", people: "me" }],
    },
]
const check = localStorage.getItem('chatdata');
if (!check) {
    localStorage.setItem('chatdata', JSON.stringify(chatdata));
}

function ChatContent() {
    return (
        <div className="bodycontent">
            <div className="namecontent"><span>Chat</span></div>
            <div className="frame">
                <ListChat />
                <Message />
            </div>
        </div>
    );
}

export default ChatContent;