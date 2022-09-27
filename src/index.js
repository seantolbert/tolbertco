import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Projects from "./pages/Projects";
import { createContext } from "react";
import AdminControl from "./context/AdminControl";

import { setContext } from "@apollo/client/link/context";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import Alt from "./pages/Alt";
import Cursor from "./Cursor";

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
        <AppState.Provider value={AdminControl}>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/alt" element={<Alt />} />
          </Routes>
          <Cursor />
        </AppState.Provider>
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
);
