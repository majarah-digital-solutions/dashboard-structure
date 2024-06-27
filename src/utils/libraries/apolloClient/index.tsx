import { ApolloClient, InMemoryCache, HttpLink, split } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { setContext } from "@apollo/client/link/context";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { getSession } from "next-auth/react";
import { createClient } from "graphql-ws";

const fetchUserData = async (): Promise<any> => {
  const session = await getSession();
  if (session) {
    return session.user;
  } else {
    return null;
  }
};

const httpLink = new HttpLink({
  uri: process.env.BASE_URL,
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: process.env.SOCKET_URL || "",
    connectionParams: async () => {
      const userData = (await fetchUserData()) || {};
      return {
        "x-secret-key": userData.app || undefined,
        Authorization: userData.token || undefined,
      };
    },
  })
);

const authLink = setContext(async (_, { headers }) => {
  const userData = (await fetchUserData()) || {};
  return {
    headers: {
      ...headers,
      "x-secret-key": userData.app || undefined,
      Authorization: userData.token || undefined,
    },
  };
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink, // استخدم الاتصال بـ WebSocket هنا
  authLink.concat(httpLink)
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export default client;
