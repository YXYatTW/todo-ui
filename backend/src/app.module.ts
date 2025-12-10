/*
Spring Equivalent:
Your main @Configuration class or application.properties (logic-wise).

Purpose:
This is the Root Module.
In Spring, the Classpath scan finds all your beans.
In NestJS, you must explicitly import other modules here (like TasksModule, DatabaseModule) so the compiler knows they exist.
 */
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      // autoSchemaFile: join(process.cwd(), 'src/schema.gql'), -- code first approach
      // schema first approach:
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class',
      },
    }),
    TasksModule,
  ],
})
export class AppModule {}
