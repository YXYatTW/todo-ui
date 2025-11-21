"use client";

import styled from "styled-components";
import { TaskCard } from "@/components/TaskCard";
import { demoTasks } from "@/data/demoTasks";

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
      {demoTasks.map((task) => (
        <TaskCard
          key={task.id}
          image={task.image || "/task-default.png"}
          title={task.title}
          description={task.description}
          date={task.date}
          progress={task.progress}
        />
      ))}
    </Wrapper>
  );
}
