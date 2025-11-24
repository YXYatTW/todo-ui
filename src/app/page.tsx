"use client";

import styled from "styled-components";
import StatusList from "@/components/StatusList";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

export default function Home() {
  return (
    <Wrapper>
      <Title>Hello World!</Title>
      <StatusList />
    </Wrapper>
  );
}
