import { useQuery, gql } from "@apollo/client";

const GET_PROJECTS = gql`
  query {
    user(login: "seantolbert") {
      name
      url
      pinnedItems(first: 6) {
        totalCount
        edges {
          node {
            ... on Repository {
              id
              name
              url
              updatedAt
              description
              repositoryTopics(first: 4) {
                edges {
                  node {
                    topic {
                      name
                    }
                  }
                }
              }
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
