import React, { useEffect, useState } from 'react';
import { gql } from '@apollo/client';
import { useMutation, useQuery } from '@apollo/client/react';
import { allStatuses, Task, TaskStatus } from '@/data/types';
import StatusList from '@/components/StatusList';
import styled from 'styled-components';
import { DndContext, DragEndEvent, DragOverlay } from '@dnd-kit/core';
import { TaskCard } from '@/components/TaskCard/TaskCard';

// import { arrayMove, SortableContext } from "@dnd-kit/sortable";

const GET_TASKS = gql`
  query getTasks {
    tasks {
      id
      title
      status
      description
      progress
      completed
      emoji
      image
      profileImage
    }
  }
`;

const UPDATE_TASK_STATUS = gql`
  mutation updateTaskStatus($id: ID!, $input: UpdateTaskInput!) {
    updateTask(id: $id, input: $input) {
      id
    }
    #    {
    #      id
    #      title
    #      status
    #      description
    #      progress
    #      completed
    #      emoji
    #      image
    #      profileImage
    #    }
  }
`;

const TaskBoard = () => {
  const { loading, error, data } = useQuery<{ tasks: Task[] }>(GET_TASKS);
  const [updateTask] = useMutation(UPDATE_TASK_STATUS, {
    refetchQueries: [GET_TASKS],
  });
  console.log('==query data:==', data);
  const tasks = data?.tasks ?? [];
  const [activeId, setActiveId] = useState<string | null>(null);

  const updateTaskStatus = (taskId: string, newStatus: TaskStatus) => {
    console.log(`Updating task ${taskId} to status ${newStatus}`);
    updateTask({
      variables: { id: taskId, input: { status: newStatus } },
    });
  };

  const onDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;

    const taskId = active.id;
    const newStatus = over.id as TaskStatus;

    console.log('taskId ', taskId, ' newStatus ', newStatus.toString());
    updateTaskStatus(taskId.toString(), newStatus);
    console.log('onDragEnd ', newStatus);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <DndContext
      onDragStart={(event) => setActiveId(event.active.id as string)}
      onDragEnd={(event) => {
        setActiveId(null);
        onDragEnd(event);
      }}
    >
      <Board>
        {allStatuses.map((status) => (
          <StatusList
            key={status}
            status={status}
            tasks={tasks.filter((task) => task.status === status)}
            // setTasks={updateTaskStatus}
          />
        ))}
      </Board>
      <DragOverlay>
        {activeId ? (
          <TaskCard task={tasks.find((t) => t.id === activeId)!} />
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};

const Board = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: flex-start;
`;

export default TaskBoard;
