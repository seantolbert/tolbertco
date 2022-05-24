import {
    ApolloClient,
    InMemoryCache,
    gql,
    createHttpLink,
  } from "@apollo/client";
  import { setContext } from "@apollo/client/link/context";
  
  export const useGitMetrics = async () => {
    const httpLink = createHttpLink({
      uri: "https://api.github.com/graphql",
    });
  
    const authLink = setContext((_, { headers }) => {
      return {
        headers: {
          ...headers,
          authorization: `Bearer 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`,
        },
      };
    });
  
    const client = new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
    });
  
    const { data } = await client.query({
      query: gql`
        {
          user(login: "seantolbert") {
            pinnedItems(first: 6) {
              totalCount
              edges {
                node {
                  ... on Repository {
                    id
                    name
                    url
                    updatedAt
                  }
                }
              }
            }
            contributionsCollection {
              contributionCalendar {
                colors
                totalContributions
                weeks {
                  firstDay
                  contributionDays {
                    color
                    contributionCount
                    contributionLevel
                    date
                    weekday
                  }
                }
              }
            }
            url
          }
        }
      `,
    });
  
    const { user } = data;
    const pinnedItems = user.pinnedItems.edges.map(({ node }) => node);
    const totalContributions =
      user.contributionsCollection.contributionCalendar.totalContributions;
    console.log(data);
  
    return {
      pinnedItems
    };
  };
  