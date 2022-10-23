import React from "react";
import postsArray from './posts.json';
import HomePostItem from './home-post-item';

const HomePostList = () => {
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