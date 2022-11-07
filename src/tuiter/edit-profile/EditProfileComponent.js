import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import React from "react";
import {useState} from "react";

const EditProfileComponent = () =>{
    const userProfile = useSelector((state) => state.profile);
    const dispatch = useDispatch();

    const [profile, setProfile] = useState(userProfile);

    const nameChangeHandler = (event) => {
        const newName = event.target.value;
        const newFirstName = newName.split(" ")[0];
        const newLastName = newName.split(" ")[1];
        userProfile={...userProfile, "fullName": newName, "firstName":newFirstName, "lastName": newLastName};
        setProfile(userProfile);
    }



    return(
        <div className="row mb-2">
            <Link to="/tuiter/profile" className="col-1">
                <i className="bi bi-x-lg float-end"></i>
            </Link>
            <div className="col-8">
                 <label className="fw-bold" style={{fontSize:"20px"}}>
                    Edit profile
                </label>
            </div>
            <div className="col-3">
                <button className="btn btn-dark rounded-pill float-end">
                    <b>Save</b>
                </button>
            </div>

             <div className="mt-2 mb-2">
                <img src={`/images/myuniverse.png`} style={{width:"100%", height: "200px"}}></img>
            </div>

            <div className="row mb-0" height="50px">
                <div className="col-7 float-start" >
                    <img src={`/images/Hi.jpeg`} className="rounded-circle wd-profile-image-profile-page"/>
                </div>
            </div>

             <form>
                <div className="border border-muted rounded ps-2 pe-2 mb-3">
                    <span className="mt-1 mb-1 text-muted">Name</span>
                    <br/>
                    <textarea className="mt-1 wd-textbox-edit-profile"
                     onChange={nameChangeHandler} rows="1" value={userProfile.fullName}/>
                </div>

                <div className="border border-muted rounded ps-2 pe-2 mb-3 wd-bio-edit-profile">
                    <span className="mt-1 mb-1 text-muted">Bio</span>
                    <br/>
                    <textarea className="mt-1 wd-textbox-edit-profile" rows="1" value={userProfile.bio}/>
                </div>

                <div className="border border-muted rounded ps-2 pe-2 mb-3">
                    <span className="mt-1 mb-1 text-muted">Location</span>
                    <br/>
                    <textarea className="mt-1 wd-textbox-edit-profile" rows="1" value={userProfile.location}/>
                </div>

                <div className="border border-muted rounded ps-2 pe-2 mb-3">
                    <span className="mt-1 mb-1 text-muted">Website</span>
                    <br/>
                    <textarea className="mt-1 wd-textbox-edit-profile" rows="1"
                    placeholder="Website"
                    value={userProfile.website}/>
                </div>

                <div className="border border-muted rounded ps-2 pe-2 mb-3">
                    <span className="mt-1 mb-1 text-muted">Birth date</span>
                    <br/>
                    <textarea className="mt-1 wd-textbox-edit-profile" rows="1"
                    value={userProfile.dateOfBirth}/>
                </div>
             </form>

             <div className="col-11">
                Swithch to professional
             </div>
             <div className="col-1 float-end">
                <i className="bi bi-arrow-right" style={{fontSize:"20px"}}></i>
             </div>

         </div>

    );
}
export default EditProfileComponent;
