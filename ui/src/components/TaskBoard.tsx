import React, { useEffect, useState } from "react";
import { allStatuses, Task, TaskStatus } from "@/types/types";
import StatusList from "@/components/StatusList";
import styled from "styled-components";
import { DndContext, DragEndEvent, DragOverlay } from "@dnd-kit/core";
import { TaskCard } from "@/components/TaskCard/TaskCard";
import { GET_TASKS } from "@/data/retrieveAllTasksQuery";
import { useQuery } from "@apollo/client/react";

// import { arrayMove, SortableContext } from "@dnd-kit/sortable";

const TaskBoard = () => {
  const { data, loading } = useQuery<{ tasks: Task[] }>(GET_TASKS);

  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    if (data?.tasks) {
      console.log("数据已加载:", data.tasks);
      setTasks(data.tasks);
    }
  }, [data]);

  if (1 == 1) return <div>加载任务中...</div>;

  const [activeId, setActiveId] = useState<string | null>(null);

  const onDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;

    const taskId = active.id;
    const newStatus = over.id as TaskStatus;

    console.log("taskId ", taskId, " newStatus ", newStatus.toString());

    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task,
      ),
    );
    console.log("onDragEnd ", newStatus);
  };

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
            setTasks={setTasks}
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
