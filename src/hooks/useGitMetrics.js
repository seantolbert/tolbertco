import { useQuery, gql } from "@apollo/client";

const GET_PROJECTS = gql`
  query {
    user(login: "seantolbert") {
      name
      url
      pinnedItems(first: 3) {
        totalCount
        edges {
          node {
            ... on Repository {
              id
              name
              url
              updatedAt
              description
            }
          }
        }
      }
    }
  }
`;

export const useGitMetrics = () => {
  const { error, isPending, data } = useQuery(GET_PROJECTS);

  return { error, isPending, data };
};
