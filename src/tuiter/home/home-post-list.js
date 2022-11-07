import React from "react";
import HomePostItem from './home-post-item';
import {useSelector} from "react-redux";

const HomePostList = () => {
    const postsArray = useSelector((state) => state.tuits);

    return(
        <ul className="list-group">
            {
                postsArray.map(post =>
                    <HomePostItem key={post._id} post={post}/>
                )
            }
        </ul>
    );
};
export default HomePostList;