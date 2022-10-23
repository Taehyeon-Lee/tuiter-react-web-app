import {Link} from "react-router-dom";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import ExploreComponent from "./explore";
import {Routes, Route} from "react-router";
import HomeComponent from "./home";

function Tuiter() {
    return(
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                style={{"position":"relative"}}>
                <h2>Please click explore and home to see tuiter and challange part</h2>
                <Routes>
                    <Route path="home" element={<HomeComponent/>}/>
                    <Route path="explore" element={<ExploreComponent/>}/>
                </Routes>
            </div>
            <div className="col-sm-none col-md-none d-lg-block col-lg-4 col-xl-4">
                <WhoToFollowList/>
            </div>
        </div>
    );
}
export default Tuiter;