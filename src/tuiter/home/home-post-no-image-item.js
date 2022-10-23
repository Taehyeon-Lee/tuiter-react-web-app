import React from "react";

const HomePostNoImage = (
    {
        post = {
            "_id": 234,
            "fullName": "Elon Musk",
            "userName": "@elonmusk",
            "time": "15h",
            "post": "We might need a different name, as this is basically just Starlink with roaming capability, so you can take your terminal anywhere.",
            "profileImage": "elon-musk.jpeg",
            "image": "",
            "imageExist": false,
            "retuitProfile": "elon-musk.jpeg",
            "retuitName": "SpaceX",
            "retuitUserName": "@SpaceX",
            "retuitTime": "16h",
            "text": "Starlink for RVs now has over 100,000 customers! Access high-speed, low-latency internet on an as-needed basis anywhere Starlink provides active ",
            "comment": "5,346",
            "share": "1,601",
            "like": "19.2k",
            "link": ""
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
                </p>


                <div className="wd-border-wrap-image-text rounded pt-2 ps-2">
                    <span className="float-left align-top pe-2 pt-2">
                        <img className="rounded-circle wd-retuit-profile-image" src={`/images/${post.retuitProfile}`}/>
                    </span>
                    <span className="wd-retuit-right-contents">
                        <p className="text-align-bottom">
                            <b>{post.retuitName}</b>
                            <span> <i class="bi bi-patch-check-fill"></i> </span>
                            <span className="text-muted">{post.retuitUserName} * {post.retuitTime}</span>

                        </p>
                    </span>
                    <br></br>
                    <span>
                        {post.text}
                        <i class="bi bi-arrow-right"></i>
                        <> starlink.com/rv</>
                    </span>
                </div>

                <div className="wd-padding-title-contents wd-icon-size ">
                    <a className="wd-icon-link" href="#>"><i class="bi bi-chat"> </i>{post.comment}</a>
                    <a className="wd-icon-link" href="#>"><i class="bi bi-arrow-repeat"> </i>{post.share}</a>
                    <a className="wd-icon-link" href="#>"><i class="bi bi-suit-heart"> </i>{post.like}</a>
                    <a className="wd-icon-link" href="#>"><i class="bi bi-share"></i></a>
                </div>
            </span>
        </li>
    );
};
export default HomePostNoImage;