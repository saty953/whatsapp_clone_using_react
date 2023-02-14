import { useState } from "react";
import styled from "styled-components";
import { contactList } from "../mockData";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  hight: 100%;
  flex: 1.6;
  width: 100%;
  //   overflow:scroll;
`;
const ProfileInfoDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  background: #ededed;
  padding: 10px;
`;
const ProfileImg = styled.img`
  widht: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
`;
const SearchBox = styled.div`
  display: flex;
  background: #f6f6f6;
  padding: 10px;
`;
const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: white;
  padding: 5px 10px;
  border-radius: 16px;
  width: 100%;
`;
const SearchIcon = styled.img`
  widht: 32px;
  height: 32px;
`;
const SearchInput = styled.input`
  width: 100%;
  outline: none;
  border: none;
  font-size: 15px;
`;

const ContactItem = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 2px solid #f2f2f2;
  background: white;
  cursor: pointer;
  padding: 15px 12px;
  max-height: 35px;
  overflow: hidden;
  :hover {
    background: #ebebeb;
    // border:solid black;
  }
`;

const ProfileIcon = styled(ProfileImg)`
  cursor: pointer;
  width: 38px;
  height: 38px;
`;
const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 10px;
`;
const ContactName = styled.span`
  width: 100%;
  font-size: 16px;
  color: black;
`;
const MessageText = styled.span`
  width: 100%;
  font-size: 14px;
  margin-top: 3px;
  color: rgba(0, 0, 0, 0.8);
`;
const MessageTime = styled.span`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  font-size: 14px;
  margin-top: 3px;
  color: rgba(0, 0, 0, 0.45);
`;
const Setting = styled.div`
  width: 150px;
  height: 200px;
  overflow-y: scroll;
  background: none;
  position: fixed;
  top: 10px;
  left: 250px;
  border: 1px solid black;
  border-radius: 10px;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const Count = styled.div`
 background:#00FF00;
 height:20px;
 color:black;
 width:20px;
 border-radius:50%;
 text-align:center;
border:1px solid black;
`;

const ContactComponent = (props) => {
  const { userData, setChat } = props;
const [click,setclick]=useState(true);
  return (
    <ContactItem onClick={() => {setChat(userData)
    setclick(false)} }>
      <ProfileIcon src={userData.profilePic} />
      <ContactInfo>
        <ContactName>{userData.name}</ContactName>
        <MessageText>{userData.lastText}</MessageText>
      </ContactInfo>
      <MessageTime>{userData.lastTextTime}{click?<Count>1</Count>:<>.</>}</MessageTime>
    </ContactItem>
  );
};

function ContactLIstComponent(props) {
  const [setting, setSetting] = useState(false);
  return (
    <Container>
      <ProfileInfoDiv>
        <ProfileImg src={"/profile/abc.png"} />

        {setting ? (
          <Setting>
            <ContactItem
              style={{ fontSize: "14px"   }}
              onClick={() => {
                setSetting(false);
              }}
            >
              New group
            </ContactItem>
            <ContactItem
              style={{ fontSize: "14px" }}
              onClick={() => {
                setSetting(false);
              }}
            >
              New Broadcast
            </ContactItem>
            <ContactItem
              style={{ fontSize: "14px" }}
              onClick={() => {
                setSetting(false);
              }}
            >
              {" "}
              Payments
            </ContactItem>
            <ContactItem
              style={{ fontSize: "14px" }}
              onClick={() => {
                setSetting(false);
              }}
            >
              Starred messages
            </ContactItem>
            <ContactItem
              style={{ fontSize: "14px" }}
              onClick={() => {
                setSetting(false);
              }}
            >
              Settings
            </ContactItem>
          </Setting>
        ) : (
          <>WhatsAap Clone</>
        )}
        <ProfileImg
          src={"/profile/setting.png"}
          onClick={() => {
            setSetting(!setting);
          }}
        />
      </ProfileInfoDiv>
      <SearchBox
        onClick={() => {
          setSetting(false);
        }}
      >
        <SearchContainer
          onClick={() => {
            setSetting(false);
          }}
        >
          <SearchIcon src={"/search-icon.svg"} />
          <SearchInput placeholder="Search or start new chat" />
        </SearchContainer>
      </SearchBox>
      {contactList.map((userData) => (
        <ContactComponent userData={userData} setChat={props.setChat} />
      ))}
    </Container>
  );
}

export default ContactLIstComponent;
