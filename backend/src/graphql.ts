/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateTaskInput {
  title: string;
  description?: Nullable<string>;
  status?: Nullable<string>;
}

export class UpdateTaskInput {
  title?: Nullable<string>;
  description?: Nullable<string>;
  status?: Nullable<string>;
  completed?: Nullable<boolean>;
  progress?: Nullable<number>;
  date?: Nullable<string>;
  emoji?: Nullable<string>;
  profileImage?: Nullable<string>;
}

export class Task {
  id: string;
  title: string;
  description?: Nullable<string>;
  image?: Nullable<string>;
  status: string;
  completed: boolean;
  date?: Nullable<string>;
  progress?: Nullable<number>;
  emoji?: Nullable<string>;
  profileImage?: Nullable<string>;
}

export abstract class IQuery {
  abstract tasks(): Task[] | Promise<Task[]>;

  abstract task(id: string): Nullable<Task> | Promise<Nullable<Task>>;
}

export abstract class IMutation {
  abstract create(createTaskInput: CreateTaskInput): Task | Promise<Task>;

  abstract update(id: string, input: UpdateTaskInput): Task | Promise<Task>;
}

type Nullable<T> = T | null;
