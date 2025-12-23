import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client/react';
import { allStatuses, Task, TaskStatus } from '@/data/types';
import StatusList from '@/components/StatusList';
import styled from 'styled-components';
import { DndContext, DragEndEvent, DragOverlay } from '@dnd-kit/core';
import { TaskCard } from '@/components/TaskCard/TaskCard';
import { GET_TASKS, UPDATE_TASK_STATUS } from '@/graphql/task.gql';

// import { arrayMove, SortableContext } from "@dnd-kit/sortable";

const TaskBoard = () => {
  //TODO： react context
  const { loading, error, data, refetch } = useQuery<{ tasks: Task[] }>(
    GET_TASKS,
  );
  const [updateTask] = useMutation(UPDATE_TASK_STATUS, {
    // refetchQueries: [GET_TASKS], //TODO: optimize by updating cache instead of refetching
  });
  console.log('==query data:==', data);
  const tasks = data?.tasks ?? [];
  const [activeId, setActiveId] = useState<string | null>(null);

  const updateTaskStatus = async (taskId: string, newStatus: TaskStatus) => {
    console.log(`Updating task ${taskId} to status ${newStatus}`);

    await updateTask({
      variables: { id: taskId, input: { status: newStatus } },
    });

    await refetch();
  };

  const onDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;

    const taskId = active.id;
    const newStatus = over.id as TaskStatus;

    const task = tasks.find((t) => t.id === taskId);
    if (!task || task.status === newStatus) return; //TODO: update sorting within same status column

    updateTaskStatus(taskId.toString(), newStatus);
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
