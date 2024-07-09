import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/userReducer";
import profileSlice from "./reducers/profileReducer";
import courseSlice from "./reducers/courseReducer";
import subscriptionSlice from "./reducers/subscriptionReducer";
import adminSlice from "./reducers/adminReducer";
import otherSlice from "./reducers/otherReducer";

const store = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
    [profileSlice.name]: profileSlice.reducer,
    [courseSlice.name]: courseSlice.reducer,
    [subscriptionSlice.name]: subscriptionSlice.reducer,
    [adminSlice.name]: adminSlice.reducer,
    [otherSlice.name]: otherSlice.reducer,
  },
});

export default store;
