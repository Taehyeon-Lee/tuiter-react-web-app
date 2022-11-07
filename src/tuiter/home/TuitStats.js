import React from "react";

const TuitStats = ({post}) => {
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
                    <i className="bi bi-suit-heart-fill me-2"
                       style={{color:post.liked ? 'red': "white"}}></i>
                }
                {
                    !post.liked &&
                     <i className="bi bi-suit-heart me-2"></i>
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
