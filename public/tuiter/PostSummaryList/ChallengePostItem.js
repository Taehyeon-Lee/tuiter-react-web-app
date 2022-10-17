const PostItem = (post) => {
    return(`
        <li class="list-unstyled wd-border">
          <span class="float-left align-top pe-2 pt-2">
            <img class="wd-profile-image rounded-circle" src=${post.profileImage}/>
          </span>

        <!--rest of body contents -->
        <span class="wd-right-contents">
        <!-- name of user and contents text paragraph-->
            <p class="text-white"><b>${post.fullName}</b>
                <span><i class="fas fa-certificate"></i></span>
                <span class="text-muted">${post.userName} * ${post.time}</span> </br>
                  ${post.post}
            </p>

        <!--    picture and text below-->
            <figure class="wd-border-wrap-image-text rounded">
              <img class="wd-contents-image rounded-top" src=${post.image}/>
              <figcaption class="wd-padding-title-contents">
                <b class="text-white">${post.title}</b>
                <span class="wd-padding-body-contents wd-profile-handle">
                    ${post.text}</br>
                </span>
                ${post.link}
              </figcaption>
            </figure>

        <!--    Icons-->
            <div class="wd-padding-title-contents wd-icon-size">
              <a class="wd-icon-link" href="#>"><i class="far fa-comment pe-2"></i>${post.comment}</a>
              <a class="wd-icon-link" href="#>"><i class="fas fa-sync pe-2"></i>${post.share}</a>
              <a class="wd-icon-link" href="#>"><i class="far fa-heart pe-2"></i>${post.like}</a>
              <a class="wd-icon-link" href="#>"><i class="far fa-share-square pe-2"></i></a>
            </div>
        </span>

        <!--  end of span for everything except profile picture-->
          <!--  border ends for body contents-->
        </li>
    `);
}
export default PostItem;