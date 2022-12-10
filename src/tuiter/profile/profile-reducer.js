import { createSlice } from "@reduxjs/toolkit";
import profileInfo from "./profileInfo.json";

const profileSlice = createSlice({
    name: "profile",
    initialState: profileInfo,
    reducers: {
        editProfile(state, action) {
            console.log("Inside the profile reducer");
            console.log(action.payload);
            const p = action.payload
            state.firstName = p.firstName;
            state.lastName = p.lastName;
            state.bio = p.bio;
            state.location = p.location;
            state.website = p.website;
            state.dateOfBirth = p.dateOfBirth;
            return state;
        },
    }
});
export const {editProfile} = profileSlice.actions
export default profileSlice.reducer;