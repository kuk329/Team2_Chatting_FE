import { useEffect, useState } from "react";
import Chatbox from "./components/Chatbox";
import MyChats from "./components/MyChats";
import { useRecoilState, useRecoilValue } from "recoil";
import { loggedInAtom, tokenState, userState } from "./Store/atom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const Wrapper = styled.div`
  background: #f5bf19;
`;
const ChatBoxWrapper = styled.div`
  background: inherit;
  position: fixed;
  top: 7vh;
  left: 15vw;
  display: flex;
  justify-content: space-around;
  height: 93vh;
  width: 85vw;
`;
const Chatpage = () => {
  const userInfo = useRecoilValue(userState);

  const [accessToken, setAccessToken] = useRecoilState(tokenState);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loggedInAtom);
  const navigate = useNavigate();
  const [fetchAgain, setFetchAgain] = useState(false);

  //remain api
  //remain
  // const loginRemainApi = async () => {
  //   try {
  //     const res = await axios.post(
  //       `api/members/loginremain`,
  //       {},
  //       { withCredentials: true }
  //     );
  //     if (res.status === 200) {
  //       // access token 설정.
  //       const token = res.headers.authorization;
  //       console.log("remainlogin", token);
  //       setAccessToken(token);
  //       setUserInfo(jwt_decode(token));
  //       setIsLoggedIn(true);
  //       console.log("성공");
  //     } else {
  //       console.log("실패");
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   loginRemainApi();
  //   // apitest();
  // }, []);

  //login method 2.
  //using local storage
  useEffect(() => {
    if (!userInfo) {
      setIsLoggedIn(false);
      // alert("로그인이 필요한 서비스 입니다.");
      // navigate("/login");
    } else {
      setIsLoggedIn(true);
    }
  }, []);
  return (
    <Wrapper>
      <ChatBoxWrapper>
        <MyChats fetchAgain={fetchAgain} />
        <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
      </ChatBoxWrapper>
    </Wrapper>
  );
};

export default Chatpage;
