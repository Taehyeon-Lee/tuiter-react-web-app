import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = ({post}) => {

    const dispatch = useDispatch();


    return(
        <div className="row mt-2">
            <div className="col">
                <i className="bi bi-chat me-2"></i>
                {post.replies}
            </div>
            <div className="col">
                <i className="bi bi-arrow-repeat me-2"> </i>
                {post.retuits}
            </div>
            <div className="col">
                {
                    post.liked &&
                    <i onClick={() => dispatch(updateTuitThunk({
                        ...post,
                        likes: post.likes - 1,
                        liked: false
                    }))} className="bi bi-heart-fill me-2 text-danger"></i>
                }
                {
                    !post.liked &&
                    <>
                        <i onClick={() => dispatch(updateTuitThunk({
                            ...post,
                            likes: post.likes + 1,
                            liked: true
                        }))} className="bi bi-heart me-2"></i>
                    </>
                }
                {post.likes}
            </div>
            <div className="col">
                <i className="bi bi-share me-2"></i>
            </div>
        </div>
    );
};
export default TuitStats;


/*
                <div>
                    Likes: {post.likes}
                    <i onClick={() => dispatch(updateTuitThunk({
                        ...post,
                        likes: post.likes + 1
                    }))} className="bi bi-heart-fill me-2 text-danger"></i>
                </div>
                <i className="bi bi-suit-heart me-2"></i>
*/