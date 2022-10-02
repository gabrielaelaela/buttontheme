import React from 'react';
import Header from './Header';

export const buttonThemes = {
  blue: {
    color: 'white',
    backgroundColor: 'blue'
  },
  black: {
    color: 'white',
    backgroundColor: 'black'
  },
};

const AppContext = React.createContext(null);

function App() {
  return (
    <Header />
  );
}

export default {AppContext, buttonThemes, App};
