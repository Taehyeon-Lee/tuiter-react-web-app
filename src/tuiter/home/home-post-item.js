import React from "react";
import HomePostImage from "./home-post-image-item";
import HomePostNoImage from "./home-post-no-image-item";

const HomePostItem = (
    {
        post = {
            "_id": 123,
            "fullName": "SpaceX",
            "userName": "@SpaceX",
            "time": "23h",
            "post": "Dennis and Akiko Tito are the first two crewmembers on Starship's second commercial spaceflight around the Moon <a href=# class=text-decoration-none>spacex.com/updates</a>",
            "profileImage": "elon-musk.jpeg",
            "image": "inspiration4x.jpeg",
            "imageExist": true,
            "title": "",
            "text": "",
            "comment": "4.2k",
            "share": "3.5k",
            "like": "37.5k",
            "link": "Show this thread"
        }
    }

) => {

    if(post._id === 123){
        return (<HomePostImage/>);
    }
    else{
        return (<HomePostNoImage/>);
    }
};
export default HomePostItem;




