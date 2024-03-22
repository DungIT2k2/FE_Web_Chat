import { createContext, useState } from "react";
import ListChat from "./listchat";
import Message from "./message";

const chatdata = [
    {
        id: 1,
        name: "Quang Vinh",
        nation: "VietNam",
        message: [
            { chat: "Chào bạn", time: "10:11", people: "your" },
            { chat: "Hôm nay của bạn thế nào ?", time: "10:11", people: "your" },
            { chat: "Chào bạn", time: "10:11", people: "me" },
            { chat: "Hôm nay thật tuyệt", time: "10:11", people: "me" }],
    },
    {
        id: 2,
        name: "John",
        nation: "America",
        message: [
            { chat: "Hi", time: "10:11", people: "your" },
            { chat: "How are you ?", time: "10:11", people: "your" },
            { chat: "Hello", time: "10:11", people: "me" },
            { chat: "I'm fine", time: "10:11", people: "me" }],
    },
    {
        id: 3,
        name: "佳琦",
        nation: "China",
        message: [
            { chat: "Hi", time: "10:11", people: "your" },
            { chat: "How are you ?", time: "10:11", people: "your" },
            { chat: "Hello", time: "10:11", people: "me" },
            { chat: "I'm fine", time: "10:11", people: "me" }],
    },
    {
        id: 4,
        name: "Đình Thịnh",
        nation: "VietNam",
        message: [
            { chat: "Chào bạn", time: "10:11", people: "your" },
            { chat: "Hôm nay của bạn thế nào ?", time: "10:11", people: "your" },
            { chat: "Chào bạn", time: "10:11", people: "me" },
            { chat: "Hôm nay thật tuyệt", time: "10:11", people: "me" }],
    },
    {
        id: 5,
        name: "Ngọc Cảnh",
        nation: "VietNam",
        message: [
            { chat: "Chào bạn", time: "10:11", people: "your" },
            { chat: "Hôm nay của bạn thế nào ?", time: "10:11", people: "your" },
            { chat: "Chào bạn", time: "10:11", people: "me" },
            { chat: "Hôm nay thật tuyệt", time: "10:11", people: "me" }],
    },
    {
        id: 6,
        name: "Chí Công",
        nation: "VietNam",
        message: [
            { chat: "Chào bạn", time: "10:11", people: "your" },
            { chat: "Hôm nay của bạn thế nào ?", time: "10:11", people: "your" },
            { chat: "Chào bạn", time: "10:11", people: "me" },
            { chat: "Hôm nay thật tuyệt", time: "10:11", people: "me" }],
    },
]
const check = localStorage.getItem('chatdata');
if (!check) {
    localStorage.setItem('chatdata', JSON.stringify(chatdata));
}

export const ChatContext = createContext();

localStorage.setItem('chooseUser', 1);

function ChatContent() {
    const [chooseUser, setChooseUser] = useState(1);

    const handleClicked = (idchoose) => {
        setChooseUser(idchoose)
    }

    return (
        <div className="body_content">
            <div className="name_content"><span>Chat</span></div>
            <div className="frame">
                <ListChat onChoose={handleClicked}/>
                <Message idChoose={chooseUser}/>
            </div>
        </div>
    );
}

export default ChatContent;