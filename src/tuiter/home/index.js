import React from "react";
import HomePostList from "./home-post-list";
import "./index.css";
import WhatsHappening from "./whats-happening";
import TuitList from "../tuits/tuit-list";

const HomeComponent = () => {
    return(
        <>
            <h4>Home</h4>
            <WhatsHappening/>
            <TuitList/>
        </>
    );
};
export default HomeComponent