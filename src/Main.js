import React from 'react';
import './App.css';
import Article from './Article';
import Ad from './Ad';
import OtherArticles from './OtherArticles';

class Main extends React.Component {
  render() {
    return (
      <main className="expanded row">
        <Article />
        <Ad />
        <OtherArticles />
      </main>
    );
  }
}

export default Main;
