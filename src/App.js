import styled from "styled-components";
import ConversationComponent from "./Components/ConversationComponent";
import ContactLIstComponent from "./Components/ContactListComponent";
import { useState } from "react";
const Container = styled.div`
display:flex;
flex-direction:row;
hight:100vh;
width:100%;
background color:#f8f9fb;
`;
const Placeholder = styled.div`
  display: flex;
  flex: 3;

  flex-direction: column;
  justify-content: center;
  font-size: 14px;
  align-items: center;
  color: rgba(0, 0, 0, 0.45);
  gap: 10px;
  // here we are defining the styling to span inside the Placeholder COmponent
  span {
    font-size: 31px;
    color: #525252;
  }
`;

const Chatplaceholder = styled.img`
  widht: 240px;
  height: 240px;
  border-radius: 50%;
  object-fit: contains;
`;
function App() {
  const [selectedChat, setChat] = useState();
  return (
    <Container>
      <ContactLIstComponent setChat={setChat} />
      {selectedChat ? (
        <ConversationComponent selectedChat={selectedChat}/>
      ) : (
        <Placeholder>
          <Chatplaceholder src={"/welcome-placeholder.jpeg"} />
          <span>Keep Your connected</span>
          Whatsapp connects to your phone to sync messages.
        </Placeholder>
      )}
    </Container>
  );
}

export default App;
