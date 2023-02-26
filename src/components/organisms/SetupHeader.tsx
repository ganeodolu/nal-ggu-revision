import styled from "styled-components";
import { useRouter } from "next/router";

const SetupHeader = () => {
  const router = useRouter();

  return (
    <Wrapper>
      <div className="header">
        <img
          alt="arrow_left"
          className="arrow_left"
          src="/arrow-left.png"
          onClick={() => router.push("/main")}
        />
        <h1 className="location">설정</h1>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  .header {
    position: fixed;
    width: 100%;
    max-width: 47rem;
    min-width: 22rem;
    background-color: #ffffff71;
    height: 4rem;
    box-shadow: 0px 1px 10px #00000029;
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    .arrow_left {
      height: 2.5rem;
      margin-left: 1rem;
      cursor: pointer;
    }
    .location {
      margin-left: auto;
      margin-right: auto;
      text-align: center;
    }
    .save_btn {
      margin-right: 1.5rem;
      height: 2.5rem;
      width: 5rem;
      font-size: 15px;
      border-radius: 5px;
      border: none;
      background-color: #6d3dff;
      color: white;
      cursor: pointer;
    }
  }
`;

export default SetupHeader;
