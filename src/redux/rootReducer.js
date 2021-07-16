import { userReducer, USER_KEY } from "../redux/userRedux/user.reducer";
import { combineReducers } from "redux";


let rootReducer = combineReducers({
    [USER_KEY]: userReducer
})

export {rootReducer}