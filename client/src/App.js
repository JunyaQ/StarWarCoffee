import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';


import Header from './components/Header';
import Footer from './components/Footer';
import NavigateBar from './components/NavigateBar';
import DrinkList from './components/DrinkList';

import DrinkForm from './components/DrinkForm';



import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";
import Drinksupdate from './pages/Drinksupdate';
import SingleCategory from './pages/SingleCategory';



import SingleDrink from './pages/SingleDrink';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

//console.log(httpLink);
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
// const[menuItem, setMenuitem] = useState(menuItem);
// const[buttons, setButtons] = useState([])

  return (
    <ApolloProvider client={client}>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <div className="container">
        <Router>
        <NavigateBar/>
        {/* wait for solve navigate problem then remove */}
        {/* <CategoryList/> */}
        <Switch>
        
        <Route exact path="/" component={Home}/>
        <Route exact path="/categories/:id" component={SingleCategory}/>
        <Route exact path="/drinks" component={DrinkList}/>
        <Route exact path="/form" component={DrinkForm}/>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/drinks/:id" component={SingleDrink}/>
        <Route exact path="/drinksupdate/:id" component={Drinksupdate}/>
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
