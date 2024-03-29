import React from "react";
import Category from "@/components/setup/Category";
import SetupHeader from "@/components/setup/SetupHeader";
import Select from "@/components/setup/Select";
import styled from "styled-components";


const Setup = () => {

  return (
    <Wrapper>
      <SetupHeader />
      <Container>
        <Select />
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
