import React from "react";
import HomePostImage from "./home-post-image-item";
import HomePostNoImage from "./home-post-no-image-item";
import TuitStats from "./TuitStats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../tuits/tuits-reducer";

const HomePostItem = ({post}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    return(
        <li className="list-group-item list-unstyled">
            <span className="float-left align-top pe-2 pt-2">
                <img className="rounded-circle wd-profile-image" src={`/images/${post.image}`}/>
            </span>
            <span className="wd-right-contents">
                <p className="pt-2 ps-2">
                    <b>{post.userName}</b>
                    <span> <i class="bi bi-patch-check-fill"></i> </span>
                    <span className="text-muted">{post.handle} * {post.time}</span>
                    <span className="float-end align-top">
                        <i className="bi bi-x-lg float-end"
                            onClick={() => deleteTuitHandler(post._id)}></i>
                    </span>
                    <br>
                    </br>
                    {post.tuit}
                </p>

                <div className="wd-padding-title-contents wd-icon-size ">
                    <TuitStats post={post}/>
                </div>
            </span>
        </li>
    );
};
export default HomePostItem;




