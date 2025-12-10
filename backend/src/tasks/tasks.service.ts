import { Injectable, NotFoundException } from '@nestjs/common';
// import { CreateTaskInput } from './dto/create-task.input';
import type { Task, UpdateTaskInput } from '../types/graphql';


@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: '1',
      title: 'Task 1',
      description: 'This is a description of task 1',
      status: 'TODO',
      completed: false,
      date: '2024-07-01',
      progress: 45,
      emoji: '😊',
      profileImage: '/profile01.png',
    },
    {
      id: '2',
      title: 'Task 2',
      description: 'Backend setup',
      status: 'IN_PROGRESS',
      completed: false,
      date: '2024-07-02',
      progress: 10,
      emoji: '🚀',
      profileImage: '/profile02.png',
    },
  ];

  // create(createTaskInput: CreateTaskInput) {
  //   return 'This action adds a new task';
  // }

  findAll() {
    return this.tasks;
  }
  /*
  findOne(id: string) {
    return `This action returns a #${id} task`;
  }
  */

  update(id: string, updateTaskInput: UpdateTaskInput): Task {
    const taskIndex = this.tasks.findIndex((t) => t.id === id);

    if (taskIndex === -1) {
      throw new NotFoundException(`Task #${id} not found`);
    }

    const currentTask = this.tasks[taskIndex];

    //TODO:update logic
    const updatedTask: Task = {
      ...currentTask,
      title: updateTaskInput.title ?? currentTask.title,
      description: updateTaskInput.description ?? currentTask.description,
      status: updateTaskInput.status ?? currentTask.status,
      completed: updateTaskInput.completed ?? currentTask.completed,
      date: updateTaskInput.date ?? currentTask.date,
      progress: updateTaskInput.progress ?? currentTask.progress,
      emoji: updateTaskInput.emoji ?? currentTask.emoji,
      profileImage: updateTaskInput.profileImage ?? currentTask.profileImage,
    };

    if (updatedTask.status === 'DONE' && currentTask.status !== 'DONE') {
      updatedTask.completed = true;
      updatedTask.progress = 100;
    }
    // Optional: Reset if moved back
    else if (updatedTask.status === 'TODO' && currentTask.status !== 'TODO') {
      updatedTask.completed = false;
      updatedTask.progress = 0;
    }

    this.tasks[taskIndex] = updatedTask;
    return updatedTask;
  }
}
