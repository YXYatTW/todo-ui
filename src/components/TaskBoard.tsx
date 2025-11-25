import React, { useState } from "react";
import { allStatuses, Task } from "@/data/types";
import StatusList from "@/components/StatusList";
import styled from "styled-components";
import { demoTasks } from "@/data/demoTasks";

const TaskBoard = () => {
  const [tasks, setTasks] = useState(demoTasks as Task[]);

  return (
    <Board>
      {allStatuses.map((status) => (
        <StatusList
          key={status}
          status={status}
          tasks={tasks.filter((task) => task.status === status)}
          setTasks={setTasks}
        />
      ))}
    </Board>
  );
};

const Board = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: flex-start;
`;

export default TaskBoard;
