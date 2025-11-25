"use client";

import styled from "styled-components";
import TaskBoard from "@/components/TaskBoard";

export default function Home() {
  return (
    <Wrapper>
      <TaskBoard />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  //background: papayawhip;
`;
