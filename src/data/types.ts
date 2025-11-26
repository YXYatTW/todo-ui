export type TaskStatus = "TODO" | "INPROGRESS" | "DONE";

export const allStatuses: TaskStatus[] = ["TODO", "INPROGRESS", "DONE"];

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  completed: boolean;
  date: string;
  progress: number;
  emoji: string;
  profileImage?: string;
  image?: string;
}
