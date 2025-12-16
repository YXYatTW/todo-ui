import { gql } from "@apollo/client";

export const GET_TASKS = gql`
  query GetTasks {
    tasks {
      id
      title
      description
      status
      completed
      date
      progress
      emoji
      profileImage
      image
    }
  }
`;
