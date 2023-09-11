import React from 'react';
import './scss/app.scss';
import Posts from "./components/Posts";
import {Navigate, Route, Routes} from "react-router";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import Layout from "./pages/Layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Navigate to="/feed" replace/>}/>
        <Route path="feed" element={<Posts/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Route>
    </Routes>
  );
}


export default App;
