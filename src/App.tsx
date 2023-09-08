import React from 'react';
import './scss/app.scss';
import Header from "./components/Header";
import LeftProfile from "./components/LeftProfile";
import Posts from "./components/Posts";
import RightBlock from "./components/RightBlock";

function App() {
  return (
    <div>
      <Header/>
      <div className="content">
        <div className="content-body">
          <LeftProfile/>
          <Posts/>
          <RightBlock/>
        </div>
      </div>
    </div>
  );
}


export default App;
