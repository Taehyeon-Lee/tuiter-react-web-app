import {createSlice} from "@reduxjs/toolkit";
import profileInfo from "./profileInfo.json";

const profileSlice = createSlice({
    name: "profile",
    initialState: profileInfo,
    reducers: {
        editProfile(state, action) {
            console.log("Inside the profile reducer");
            console.log(action.payload);
            /*
            const newFullName = action.payload;
            console.log(newFullName);
            state.fullName = newFullName;
            const splitName = newFullName.split(" ");
            state.firstName = splitName[0];
            state.lastName = splitName[1];
            */

        },
    }
});
export const {editProfile} = profileSlice.actions
export default profileSlice.reducer;