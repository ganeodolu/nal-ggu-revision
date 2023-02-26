import styled from "styled-components";
import { useRouter } from "next/router";

interface SideBarType {
  isOpenSideBar: boolean;
  hideSideBar?: any;
  //any 수정
}

const SideBar = ({ isOpenSideBar, hideSideBar }: SideBarType) => {
  const router = useRouter();

  return (
    <>
      <SideBarContainer isOpenSideBar={isOpenSideBar}>
        <SideBarNav isOpenSideBar={isOpenSideBar}>
          <div className="logoContainer">
            <img className="logo" src="/sun.png" />
          </div>
          <button onClick={() => router.push("/setup")} className="customBtn">
            🛎 커스텀 설정
          </button>
          <button onClick={() => router.push("/")} className="customBtn">
            🛎 프리셋 보기
          </button>
        </SideBarNav>
        <SideBarBlank isOpenSideBar={isOpenSideBar} onClick={hideSideBar} />
      </SideBarContainer>
    </>
  );
};

const SideBarContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  text-align: center;
  max-width: 750px;
  min-width: 350px;
  margin: auto;
  top: 0;
  display: flex;
  visibility: ${(props: SideBarType) =>
    props.isOpenSideBar ? "visible" : "hidden"};
  transition: all 0.5s;
`;

const SideBarNav = styled.div`
  background-color: #ffffff;
  width: calc(100% * 0.6);
  animation: 0.7s
    ${(props: SideBarType) => (props.isOpenSideBar ? "showUp" : "showOut")}
    forwards;
  @keyframes showUp {
    0% {
      transform: translate(-100%, 0);
    }
    100% {
      transform: translate(0, 0);
    }
  }
  @keyframes showOut {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-100%, 0);
    }
  }
  .logoContainer {
    width: 100%;
    height: calc(100% * 0.3);
    display: flex;
    justify-content: center;
    background-color: #ffffff;
    .logo {
      height: calc(100% * 0.5);
      display: block;
      margin: auto;
    }
  }
  .customBtn {
    appearance: none;
    cursor: pointer;
    height: 40px;
    border: none;
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 50px;
    color: #454647;
    background-color: transparent;
  }
`;

const SideBarBlank = styled.div`
  width: calc(100% - 100% * 0.6);
  background: linear-gradient(to left, #4f4e4f, black);
  cursor: pointer;
  animation: 0.3s
    ${(props: SideBarType) => (props.isOpenSideBar ? "fadein" : "fadeout")}
    forwards;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.2;
    }
  }
  @keyframes fadeout {
    from {
      opacity: 0.2;
    }
    to {
      opacity: 0;
    }
  }
`;

export default SideBar;
