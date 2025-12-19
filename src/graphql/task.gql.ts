import { gql } from '@apollo/client';
export const GET_TASKS = gql`
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

export const UPDATE_TASK_STATUS = gql`
  mutation updateTaskStatus($id: ID!, $input: UpdateTaskInput!) {
    updateTask(id: $id, input: $input) {
      id
    }
  }
`;
