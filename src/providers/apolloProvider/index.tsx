"use client"
import React, { ReactNode } from 'react';
import { ApolloProvider as Provider } from '@apollo/client';
import { apolloClient } from '~/utils/libraries';
  


interface ApolloProviderProps {
  children: ReactNode;
}

export default function ApolloProvider({ children }: ApolloProviderProps) {
  return (
    <Provider client={apolloClient}>
      {children}
    </Provider>
  );
}
