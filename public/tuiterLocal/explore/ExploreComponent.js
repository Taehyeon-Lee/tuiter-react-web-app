import PostSummaryList from "../PostSummaryList/PostSummaryList.js";

const ExploreComponent = () => {
    return(`
    <div class="row">
        <div class="col-11">
            <div class="form">
                <i class="fa fa-search"></i>
                <input type="text" class="form-control form-input rounded-pill"
                       placeholder="Search tuiter"/>
            </div>
        </div>
        <div class="col-1 h4">
            <a href="#"> <i class="fa fa-cog"></i> </a>
        </div>
    </div>
    <ul class="nav mb-2 nav-tabs mt-1">
        <li class="nav-item">
            <a class="nav-link active" href="#">For you</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Trending</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">News</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Sports</a>
        </li>
        <li class="nav-item d-md-block d-sm-none">
            <a class="nav-link" href="$">Entertainment</a>
        </li>
    </ul>
    <div class="position-relative mb-2">
        <img src="../../images/starship.jpeg" width="100%">
        <h2 class="wd-text-on-image-header">SpaceX's Starship</h2>
    </div>

    ${PostSummaryList()}
    `);
}
export default ExploreComponent;