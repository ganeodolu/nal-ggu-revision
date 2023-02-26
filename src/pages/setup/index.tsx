import React, { useEffect } from "react";
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
    <div>
      <SetupHeader />
      <Container>
        <Select cards={selectedCategoryList} />
        <Category />
      </Container>
    </div>
  );
};

const Container = styled.div`
  min-height: 100vh;
  margin: 0 2rem;
  max-width: 43rem;
  min-width: 22rem;
`;
export default Setup;
