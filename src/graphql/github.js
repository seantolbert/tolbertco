// import {
//   ApolloClient,
//   InMemoryCache,
//   createHttpLink,
// } from "@apollo/client";
// import { setContext } from "@apollo/client/link/context";

// export default function github() {
    
    
//     const httpLink = createHttpLink({
//         uri: "https://api.github.com/graphql",
//     });
    
//     const authLink = setContext((_, { headers }) => {
//         return {
//             headers: {
//                 ...headers,
//                 authorization: `Bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
//             },
//         };
//     });
    
//     const client = new ApolloClient({
//         link: authLink.concat(httpLink),
//         cache: new InMemoryCache(),
//     });
    
//     return client
//   }