import React from "react";

const HomePostImage = (
    {
        post = {
            "_id": 123,
           "fullName": "SpaceX",
           "userName": "@SpaceX",
           "time": "23h",
           "post": "Dennis and Akiko Tito are the first two crewmembers on Starship's second commercial spaceflight around the Moon",
           "profileImage": "elon-musk.jpeg",
           "image": "inspiration4x.jpeg",
           "imageExist": true,
           "retuitProfile": "",
           "retuitName": "",
           "retuitUserName": "",
           "retuitTime": "",
           "text": "",
           "comment": "4.2k",
           "share": "3.5k",
           "like": "37.5k",
           "link": "Show this thread"
        }
    }
) => {
    return(
        <li className="list-group-item list-unstyled">
            <span className="float-left align-top pe-2 pt-2">
                <img className="rounded-circle wd-profile-image" src={`/images/${post.profileImage}`}/>
            </span>
            <span className="wd-right-contents">
                <p>
                    <b>{post.fullName}</b>
                    <span> <i class="bi bi-patch-check-fill"></i> </span>
                    <span className="text-muted">{post.userName} * {post.time}</span>
                    <span className="float-end align-top"><i class="bi bi-three-dots"></i></span>
                    <br>
                    </br>
                    {post.post}
                    <i class="bi bi-arrow-right"></i>
                    <a href="./" className="text-decoration-none"> spacex.com/updates</a>
                </p>
                <>
                <img className="wd-contents-image rounded-top rounded-bottom"
                    src={`/images/${post.image}`}/>

                <div className="wd-padding-title-contents wd-icon-size ">
                    <a className="wd-icon-link" href="#>"><i class="bi bi-chat"> </i>{post.comment}</a>
                    <a className="wd-icon-link" href="#>"><i class="bi bi-arrow-repeat"> </i>{post.share}</a>
                    <a className="wd-icon-link" href="#>"><i class="bi bi-suit-heart"> </i>{post.like}</a>
                    <a className="wd-icon-link" href="#>"><i class="bi bi-share"></i></a>
                </div>

                <a className="text-decoration-none" href="./">{post.link}</a>

                </>




            </span>
        </li>
    );
};
export default HomePostImage;