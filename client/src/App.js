import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Drinks from './pages/Drinks';

import Header from './components/Header';
import Footer from './components/Footer';

import Category from './pages/Category';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";

const httpLink = createHttpLink({
  uri: '/graphql',
});

//console.log(httpLink);
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <div className="container">
        <Router>
        <Category />
        <Switch>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/drinks" component={Drinks}/>
        <Route exact path="/login" component={Login} />
        <Route exact path="/singup" component={Signup} />
        <Route component={NoMatch} />
        </Switch>
        </Router>
          </div>
              
          {/* <Category />
          <Drinks/> */}
         
        <Footer />
        
        </div>
     
    </ApolloProvider>
  );
}

export default App;
