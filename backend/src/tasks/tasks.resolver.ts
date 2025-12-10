import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TasksService } from './tasks.service';
import type { Task, UpdateTaskInput } from '../types/graphql';

@Resolver('Task')
export class TasksResolver {
  constructor(private readonly tasksService: TasksService) {}
  /*
  @Mutation('createTask')
  create(@Args('createTaskInput') createTaskInput: CreateTaskInput) {
    return this.tasksService.create(createTaskInput);
  }*/

  @Query(() => [Object], { name: 'tasks' })
  findAll() {
    return this.tasksService.findAll();
  }

  /*
  @Query('task')
  findOne(@Args('id') id: number) {
    return this.tasksService.findOne(id);
  }
  */

  @Mutation(() => Object)
  update(
    @Args('id') id: string,
    @Args('input') updateTaskInput: UpdateTaskInput,
  ) {
    return this.tasksService.update(id, updateTaskInput);
  }

  /*
  @Mutation('removeTask')
  remove(@Args('id') id: number) {
    return this.tasksService.remove(id);
  }
  */
}
