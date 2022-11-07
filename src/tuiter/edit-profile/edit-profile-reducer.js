import {createSlice} from "@reduxjs/toolkit";
import profileInfo from "../profile/profileInfo.json";

const editProfileSlice = createSlice({
    name: "edit-profile",
    initialState: profileInfo
    reducers: {
        editName(state, action) {
            state.push({

            });
        },
    }
});

export default profileSlice.reducer;