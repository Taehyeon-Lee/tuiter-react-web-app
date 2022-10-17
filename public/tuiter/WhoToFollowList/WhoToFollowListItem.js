const WhoToFollowListItem = (who) => {
    return(`
        <li class="list-group-item">
            <div class="row">
            <img class="col-2 rounded-circle overflow:visible follow-img"
            src=${who.avatarIcon} height="50px" width="50px"/>
            <p class="col-6 fw-bolder" height="50px">
                ${who.userName} <span><i class="fas fa-certificate"></i></span>
                </br>
                @${who.handle}
            </p>
            <span class="col-4">
            <button class="btn btn-primary rounded-pill float-end" >Follow</button>
            </span>
            </div>
        </li>
    `);
}
export default WhoToFollowListItem;