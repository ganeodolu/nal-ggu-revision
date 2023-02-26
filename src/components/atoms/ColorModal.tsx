import { categoryListState } from "@/lib/store";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";

const color = [
  "#ECC332",
  "#FFA57A",
  "#64B2E3",
  "#56DFA4",
  "#9FA5DF",
  "#FFA3F0",
  "#F97373",
  "#B0ABB7"
] as const;

interface IColorModal {
  index: number;
  setSave: (x: string) => void;
  saveColor: string;
  onHandleModal: () => void;
}
const ColorModal = ({
  index,
  setSave,
  saveColor,
  onHandleModal
}: IColorModal) => {
  const [selectedCategoryList, setSelectedCategoryList] =
    useRecoilState(categoryListState);
  const [selectedColor, setSelectedColor] = useState("");
  // 바뀌는 color를 saveColor로 세팅
  const [isSaveColor, setSaveColor] = useState(saveColor);

  // 버튼 클릭시 색상 선택되는 handler
  const onHandleColor = (color: string) => {
    setSelectedColor(color);
    setSaveColor(color); // setSaveColor로 color값 저장
  };

  // 모달 닫으면 선택된 color값 전달
  const fn = () => {
    setSave(isSaveColor);
    onHandleModal();
    setSelectedCategoryList((prev) => {
      let newSelectedCategoryList = [...prev];
      newSelectedCategoryList[index] = {
        ...newSelectedCategoryList[index],
        color: selectedColor
      };
      return newSelectedCategoryList;
    });
  };
  return (
    <Container>
      <Title>색상 선택 모달</Title>
      <ColorSection>
        {color.map((color, idx) => {
          return color === selectedColor ? (
            <SelectedColorButton
              onClick={() => {
                onHandleColor(color);
              }}
              key={idx}
              color={color}
            />
          ) : (
            <ColorButton
              key={idx}
              color={color}
              onClick={() => {
                onHandleColor(color);
              }}
            />
          );
        })}
      </ColorSection>
      <ButtonSection>
        <Button onClick={onHandleModal}>취소</Button>
        <Button onClick={fn}>저장</Button>
      </ButtonSection>
    </Container>
  );
};

export default ColorModal;

const Container = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
`;
const Title = styled.p`
  text-align: center;
  padding: 2rem;
  font-size: 1.5rem;
  font-weight: 600;
`;

const ColorSection = styled.div`
  padding: 1rem;
  margin-bottom: 1rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const ColorButton = styled.button`
  width: 3rem;
  height: 3rem;
  background: ${(props) => props.color};
  border-radius: 50%;
  border: 3px solid ${(props) => props.color};
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;
const SelectedColorButton = styled(ColorButton)`
  border: 3px solid #797979;
`;

const ButtonSection = styled.div`
  margin: auto;
  display: flex;
  gap: 2.5rem;
`;

const Button = styled.button`
  width: 5rem;
  padding: 0.5rem;
  border: 1px solid #898989;
  background-color: #efefef;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;
