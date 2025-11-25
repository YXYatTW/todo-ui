// import React, { useState } from "react";
// import PropTypes from "prop-types";

import { TaskCard } from "@/components/TaskCard/TaskCard";
import styled from "styled-components";
import type { Task, TaskStatus } from "@/data/types";

interface StatusListProps {
  status: TaskStatus;
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const statusDisplayMap: Record<TaskStatus, string> = {
  TODO: "To Do",
  INPROGRESS: "In Progress",
  DONE: "Done",
};

function StatusList({ status, tasks }: StatusListProps) {
  return (
    <StatusListStyle>
      <ListHeader>
        <ListTitle>{statusDisplayMap[status]}</ListTitle>
      </ListHeader>

      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </StatusListStyle>
  );
}

const StatusListStyle = styled.div`
  border-radius: 9px;
  border: 1.5px solid #fff;
  background: #ebecf0;

  display: inline-flex;
  padding-bottom: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const ListHeader = styled.div`
  width: 400px;
  height: 80px;
  display: flex;
  align-items: center;
  border-bottom: white 1.5px solid;
`;

const ListTitle = styled.h2`
  color: #172b4d;
  font-family: Inter, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0 30px;
`;

export default StatusList;
