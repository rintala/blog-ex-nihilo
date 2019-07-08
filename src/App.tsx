import * as React from 'react';
import './App.css';
import { Post } from './components/Post';

const App: React.FC = () => {
  console.log("app", Post);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ex Nihilo </h1>
      </header>
      <div id="headerBar">
        <h2 style={{ flex: "1 1 auto", color: '#ffa3d5' }}>Posts</h2>
        <h2 style={{ flex: "1 1 auto", color: '#ffa3d5' }}>About</h2>
      </div>
      <div id="mainSection">
       <Post date="2019-07-08" headline="A day to remember" readingLength="20min" subheadline="A tale of a tough swim race in the north." content="Eiusmod dolor mollit elit deserunt voluptate qui ullamco aliqua in reprehenderit eiusmod culpa. Sit excepteur consectetur dolore nulla Lorem sint pariatur. Cillum pariatur culpa est do ad eiusmod culpa. Esse ullamco dolor est pariatur aliquip laboris non adipisicing laborum. Non laborum ea ipsum tempor."/>
       <Post date="2019-07-09" headline="A weekday of coding" readingLength="5min" subheadline="Just a  nother Tuesday" content="Eiusmod dolor mollit elit deserunt voluptate qui ullamco aliqua in reprehenderit eiusmod culpa. Sit excepteur consectetur dolore nulla Lorem sint pariatur. Cillum pariatur culpa est do ad eiusmod culpa. Esse ullamco dolor est pariatur aliquip laboris non adipisicing laborum. Non laborum ea ipsum tempor."/>
      </div>
    </div>
  );

}

export default App;
