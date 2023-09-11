import Header from "../../components/Header";
import LeftProfile from "../../components/LeftProfile";
import {Outlet} from "react-router";
import RightBlock from "../../components/RightBlock";
import React from "react";

const Layout = () => {
  return (
    <>
      <Header/>
      <div className="content">
        <div className="content-body">
          <LeftProfile/>
          <Outlet/>
          <RightBlock/>
        </div>
      </div>
    </>
  )
}

export default Layout