import styled from "styled-components";
import { messagesList } from "../mockData";
import Picker from "emoji-picker-react";
import { useEffect, useState } from "react";
import "./script.js";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  flex: 3;
`;
const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-direction: row;
  padding: 10px;
  background: #ededed;
  cursor: pointer;
`;
const ProfileImg = styled.img`
  widht: 32px;
  height: 32px;
  border-radius: 50%;
`;
const Chatbox = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background: #f0f0f0;
  bottom: 0;
`;
const SearchInput = styled.input`
  width: 100%;
  outline: none;
  border: none;
  font-size: 15px;
  margin-left: 10px;
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: white;
  padding: 5px 10px;
  border-radius: 16px;
  width: 100%;
`;
const Impjimage = styled.img`
  width: 28px;
  height: 28px;
  cursor: pointer;
  opacity: 0.4;
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #e5ddd6;
  background-image: url("/whatsapp-clone/chat-background.png");
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
 
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey; 
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: grey; 
    border: 1px solid black;
    border-radius:10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background:black; 
  }
`;

const MessageDiv = styled.div`
  justify-content: ${(props) => (props.isYours ? "flex-end" : "flex-start")};
  display: flex;
  margin: 5px 15px;
  opacity: 1;
`;

const Message = styled.div`
  max-width: 50%;
  color: #303030;
  padding: 8px 10px;
  font-size: 14px;
  border: 1px solid black;
  border-radius: 4px;
  background: ${(props) => (props.isYours ? "#daf8cb" : "white")};
`;

function ConversationComponent(props) {
  const { selectedChat } = props;
  const [text, setText] = useState("");
  const [pVisible, setVisi] = useState(false);
  const [messageList, setMessageList] = useState(messagesList);

  useEffect(()=>{
console.log("int the use effect")
setTimeout(()=>{
  console.log("in seTimeout")
  const ms=document.getElementById("abc");
  if(ms!==null){
     ms.scrollTop=ms.scrollHeight;
  }
},100)
  },[messageList])

  const onEmojiClick = (event, emojiObj) => {
    console.log("Event", event.emoji);
    setText(text + event.emoji);
  };

  const onEnterPress = (e) => {
    setVisi(false);

    if (e.key === "Enter" && text) {
      const message = [...messageList];

      message.push({
        id: 0,
        messageType: "TEXT",
        text,
        senderID: 0,
        addedOn: "00",
      });

      setMessageList(message);

      message.push({
        id: 0,
        messageType: "TEXT",
        text: "hey,",
        senderID: 1,
        addedOn: "00",
      });

      setMessageList(message);
      message.push({
        id: 0,
        messageType: "TEXT",
        text: " WhatsAap is not connected with database yet",
        senderID: 1,
        addedOn: "00",
      })
      setMessageList(message);
    
     
      setText("");
    }
  };

 
  return (
    <Container>
      <ProfileHeader>
        <ProfileImg src={selectedChat.profilePic} />
        {selectedChat.name}
      </ProfileHeader>
      <MessageContainer id="abc">

        {messageList.map((message) => (
          <MessageDiv isYours={message.senderID === 0}>
            <Message isYours={message.senderID === 0}>{message.text}</Message>
          </MessageDiv>
        ))}
      
      </MessageContainer>
      <Chatbox>
      <div style={{ height: 50, width: "80px", position: "absolute" ,top:"110px" }}>{pVisible && (
          <Picker
        
            onEmojiClick={onEmojiClick} searchDisabled
          />
        )}</div> 
        <SearchContainer>
          <Impjimage src={"/data.svg"} onClick={() => setVisi(!pVisible)} />
          <SearchInput
            placeholder="Type a message"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              setVisi(false);
            }}
            onKeyDown={onEnterPress}
          />
        </SearchContainer>
        <Impjimage
          src={"/profile/enter.png"}
          style={{ paddingLeft: "5px", opacity: "1" }}
          onClick={() => {
            setVisi(false);
            if (text) {
              const message = [...messageList];

              message.push({
                id: 0,
                messageType: "TEXT",
                text,
                senderID: 0,
                addedOn: "12:00 PM",
              });

              setMessageList(message);
              message.push({
                id: 0,
                messageType: "TEXT",
                text: "hey sorry, ",
                senderID: 1,
                addedOn: "00",
              });
        
              setMessageList(message);
              setMessageList(message);
              message.push({
                id: 0,
                messageType: "TEXT",
                text: "hey sorry, WhatsAap is not connected with database yet",
                senderID: 1,
                addedOn: "00",
              });
        
              setMessageList(message);
              setText("");
            }
          }}
        />
      </Chatbox>
    </Container>
  );
}
export default ConversationComponent;
