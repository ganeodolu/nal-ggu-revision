import React from "react";
import { useRecoilState } from "recoil";
import Category from "@/components/molecules/Category";
import SetupHeader from "@/components/organisms/SetupHeader";
import Select from "@/components/molecules/Select";
import { categoryListState } from "@/lib/store";
import styled from "styled-components";


const Setup = () => {
  const [selectedCategoryList, setSelectedCategoryList] =
    useRecoilState(categoryListState);

  
  return (
    <Wrapper>
      <SetupHeader />
      <Container>
        <Select cards={selectedCategoryList} />
        <Category />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  max-width: 47rem;
  min-width: 22rem;
  margin-left: auto;
  margin-right: auto;
`;

const Container = styled.div`
  min-height: 100vh;
  margin: 0 2rem;
`;
export default Setup;
