import LocationModalFrame from "@/components/location/LocationModalFrame";
import { locationState } from "@/lib/store";
import { xyConvert } from "@/lib/utils";
import React, { useRef, useState } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { HandleClickEvent, HandleSubmitEvent } from "@/lib/types";
import AddressResults from "@/components/location/AddressResults";


interface IProps {
  setPopLocationModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Location = ({ setPopLocationModal }: IProps) => {
  const [inputAddress, setInputAddress] = useState("");
  const [selectedAddress, setSelectedAddress] = useState([""]);
  const setSelectedLocation = useSetRecoilState(locationState);
  const inputValueRef = useRef<HTMLInputElement>(null);

  const handleInputSubmit: HandleSubmitEvent = (e) => {
    e.preventDefault();
    if (inputValueRef.current) {
      const inputValue = inputValueRef.current.value;
      if (inputValue.length === 0) return;
      setInputAddress(inputValue);
      inputValueRef.current.value = "";
    }
  };

  const handleListClick: HandleClickEvent = (e) => {
    const target = e.target as HTMLFormElement;
    if (target.className === "result_container") return;
    const convertedGrid = xyConvert(
      Number(target.dataset.y),
      Number(target.dataset.x)
    );
    setSelectedAddress([
      String(target.textContent),
      String(convertedGrid.x),
      String(convertedGrid.y),
      String(convertedGrid.lon),
      String(convertedGrid.lat)
    ]);
  };

  const handleButtonConfirm: HandleClickEvent = (e) => {
    if (selectedAddress.length !== 1) {
      setSelectedLocation(selectedAddress);
      setPopLocationModal(false);
    }
  };

  return (
    <LocationModalFrame>
      <Wrapper>
        <img
          className="close"
          src="/close.png"
          onClick={() => {
            setPopLocationModal(false);
          }}
          alt=""
        />
        <form onSubmit={handleInputSubmit}>
          <section>
            <h1 className="address_name">주소 검색</h1>
            <div className="input_container">
              <input
                className="input"
                ref={inputValueRef}
                name="findAddress"
                placeholder="예)효자동, 여의공원로 68"
              ></input>
              <button className="search_btn">검색</button>
            </div>
          </section>
          <section className="result_wrapper">
            {inputAddress.length !== 0 && (
              <AddressResults
                address={inputAddress}
                handleListClick={handleListClick}
              />
            )}
          </section>
          <section>
            <div className="selected">{selectedAddress?.[0]}</div>
            <div>
              <div className="button_container">
                <button
                  className="cancel_button"
                  onClick={() => {
                    setPopLocationModal(false);
                  }}
                >
                  취소
                </button>
                <button className="save_button" onClick={handleButtonConfirm}>
                  저장
                </button>
              </div>
            </div>
          </section>
        </form>
      </Wrapper>
    </LocationModalFrame>
  );
};

const Wrapper = styled.div`
  width: 80%;
  margin: auto;
  section {
    margin: auto;
    width: 100%;
  }
  .address_name {
    margin-bottom: 0.5rem;
  }
  .input_container {
    display: flex;
    justify-content: space-between;
  }
  .input {
    height: 2rem;
    width: 12rem;
    margin-right: 0.5rem;
  }
  .search_btn {
    /* margin-right: 1rem; */
    height: 2rem;
    width: 3rem;
    font-size: 15px;
    border-radius: 5px;
    border: none;
    background-color: #6d3dff;
    color: white;
    cursor: pointer;
  }
  .close {
    position: absolute;
    right: 16px;
    top: 16px;
    width: 32px;
    height: 32px;
    opacity: 0.8;
    cursor: pointer;
  }
  form {
    margin-top: 2rem;
  }
  .result_wrapper {
    height: 10rem;
  }
  .result_empty {
    margin: 2rem;
  }
  .result_container {
    border: 2px solid #bebdbd;
    padding-top: 0.5rem;
    margin-top: 1rem;
    height: 10rem;
    overflow-y: auto;
    overflow-x: hidden;
    border-radius: 5px;
    padding-left: 0.3rem;
    div {
      padding-bottom: 0.4rem;
      cursor: pointer;
    }
  }
  .selected {
    margin-top: 1rem;
    height: 2rem;
    overflow-y: hidden;
    width: 100%;
    border: 2px solid #bebdbd;
    border-radius: 5px;
    padding-top: 5px;
  }
  .button_container {
    margin-top: 0.5rem;
    margin-left: 1.5rem;
    display: flex;
    width: 12rem;
    height: 2rem;
    justify-content: space-around;
    button {
      width: 4rem;
      border-radius: 5px;
      /* border: 0.2px solid '#b5b4b43'; */
      border: none;
      color: white;
      cursor: pointer;
      &.cancel_button {
        color: #333;
      }
      &.save_button {
        background-color: #6d3dff;
      }
    }
  }
`;
export default Location;
