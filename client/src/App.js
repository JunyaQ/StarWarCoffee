import React from 'react';

// UI
// import { ThemeProvider } from '@chakra-ui/core';
// import customTheme  from '../src/theme/theme';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {ApolloProvider} from '@apollo/client';
import ApolloClient from 'apollo-boost';
import { StoreProvider } from './utils/GlobalState';

import HomeStrap from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import MyOrder from './pages/MyOrder/MyOrder';
import History from './pages/History/History';
import SignupStrap from './pages/Signup/Signup';
import LoginStrap from './pages/Login/Login';
import NoMatch from "./pages/NoMatch/NoMatch";
import Success from "./pages/Success/Success";
import Headers from './components/Header';

// import Nav from './components/Nav';
import FooterStrap from './components/Footer'
import NavigateBar from './components/NavigateBar';

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}`: ''
      }
    })
  },
  uri: 'http://localhost:3001/graphql',
})

function App() {
  return (
    <ApolloProvider client={client}>
    <Headers/>
      <Router>
        <div>
          <StoreProvider>
            {/* <ThemeProvider theme={customTheme}> */}
              <NavigateBar />
              <Switch>
                <Route exact path="/" component={HomeStrap} />
                <Route exact path="/menu" component={Menu} />
                <Route exact path="/login" component={LoginStrap} />
                <Route exact path="/signup" component={SignupStrap} />
                <Route exact path="/cart" component={MyOrder} />
                <Route exact path="/profile" component={History} />
                <Route exact path="/success" component={Success} />
                <Route component={NoMatch} />
              </Switch>
              <FooterStrap />
            {/* </ThemeProvider> */}
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
    
  );
}

export default App;