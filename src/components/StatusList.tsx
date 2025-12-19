import React from 'react';
// import PropTypes from "prop-types";

import { TaskCard } from '@/components/TaskCard/TaskCard';
import styled from 'styled-components';
import type { Task, TaskStatus } from '@/data/types';
import { useDroppable } from '@dnd-kit/core';

interface StatusListProps {
  status: TaskStatus;
  tasks: Task[];
  // updateTaskStatus: (taskId: string, newStatus: TaskStatus) => void;
}

const statusDisplayMap: Record<TaskStatus, string> = {
  TODO: 'To Do',
  INPROGRESS: 'In Progress',
  DONE: 'Done',
};

function StatusList({ status, tasks }: StatusListProps) {
  const { setNodeRef } = useDroppable({
    id: status.toString(),
  });

  return (
    <StatusListStyle ref={setNodeRef}>
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
  border: 2px solid #fff;
  background: #ebecf0;
  height: 1000px; //TODO: adjust height dynamically

  display: inline-flex;
  padding-bottom: 30px;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
  gap: 20px;
`;

const ListHeader = styled.div`
  width: 400px;
  height: 80px;
  display: flex;
  align-items: center;
  border-bottom: white 2px solid;
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
