import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://easycoders-movies.herokuapp.com/",
  cache: new InMemoryCache(),
});

export default client;
