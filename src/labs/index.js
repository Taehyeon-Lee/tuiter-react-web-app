import Nav from "../nav";
import Assignment6 from "./A6";
import Assignment7 from "./A7";
import {Routes, Route} from "react-router";

function Labs() {
    return(
        <div>
            <Nav/>
            <Routes>
                <Route path="a6"
                 element = {<Assignment6/>}/>
                <Route index
                 element = {<Assignment7/>}/>
            </Routes>
        </div>
    );
}
export default Labs;