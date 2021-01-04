import { createSelector } from "reselect";

const selectUser = (state) => state.userReducer;

//select currentUser from user

export const selectCurrentUser = createSelector(
  [selectUser],
  (userReducer) => userReducer.currentUser
);
