import React from "react";
import HomePostList from "./home-post-list";
import "./index.css";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
    return(
        <>
            <h4>Home</h4>
            <WhatsHappening/>
            <HomePostList/>
        </>
    );
};
export default HomeComponent