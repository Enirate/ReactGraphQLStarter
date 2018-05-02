import React from 'react';
import ApolloClient from 'apollo-boost';
import {  ApolloProvider} from 'react-apollo';
import Courses from './Courses';
import './App.css';

const Client = new ApolloClient({
  uri: 'https://vm8mjvrnv3.lp.gql.zone/graphql',
})

const App = () => (
  <ApolloProvider client={Client}>
    <div className="container">
      <nav className="navbar navbar-dark bg-primary">
        <a href="#" className="navbar-brand">React and GraphQL -By Eniola</a>
      </nav>
      <div>
        <Courses />
      </div>
    </div>
  </ApolloProvider>
)

export default App;
