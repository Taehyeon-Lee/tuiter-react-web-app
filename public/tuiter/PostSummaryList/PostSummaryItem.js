const PostSummaryItem = (post) => {
    return(`
        <li class="list-group-item">
            <div class="row">
                <div class="col-10">
                    <div class="text-secondary">
                        ${post.topic}
                    </div>
                    <div class="fw-bolder">
                        ${post.userName} <span><i class="fas fa-certificate"></i></span>
                         <span class="text-secondary fw-light">- ${post.time}</span>
                    </div>
                    <div class="fw-bolder">
                        ${post.title}
                    </div>
                </div>
                <div class="col-2">
                    <img class="float-end rounded" src=${post.image}  width="100%" height="80px"/>
                </div>
            </div>
        </li>
    `);
}
export default PostSummaryItem;
