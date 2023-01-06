import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { createContext } from "react";
import ThemeContext from "./context/ThemeContext";

import { setContext } from "@apollo/client/link/context";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
// import Alt from "./pages/Alt";
import App from "../src/App";

export const AppState = createContext();

const httpLink = createHttpLink({
  uri: "https://api.github.com/graphql",
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <AppState.Provider value={ThemeContext}>
          <Routes>
            {/* <Route path="/" element={<Alt />} /> */}
            <Route path="/" element={<App />} />
            {/* <Route path="/projects" element={<Projects />} /> */}
          </Routes>
        </AppState.Provider>
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
);
