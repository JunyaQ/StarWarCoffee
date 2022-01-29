import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { Router } from 'react-router-dom';

import Category from './pages/Category';
import Drinks from './pages/Drinks';

import Header from './components/Header';
import Footer from './components/Footer';

const httpLink = createHttpLink({
  uri: '/graphql',
});

console.log(httpLink);
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        
       
          {/* <Category /> */}
          <Drinks/>
         
        <Footer />
        </div>
     
    </ApolloProvider>
  );
}

export default App;
