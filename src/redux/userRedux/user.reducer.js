import { LOAD_DATA_REQUEST,
    LOAD_DATA_SUCCESS,
    LOAD_DATA_FAILURE  } from "./user.actionTypes"

export const USER_KEY = 'userStore'

let initialState = {
    data:[],
    loading:false,
    errorMessage: ''
}

export const userReducer = (state = initialState, action) =>{
    let {type, payload} = action
    switch(type){
        case LOAD_DATA_REQUEST:
            return{
                ...state,
                loading:true
            }
            case LOAD_DATA_SUCCESS:
            return{
                ...state,
                loading:false,
                data:payload
            }
            case LOAD_DATA_FAILURE:
            return{
                ...state,
                errorMessage:payload
            }
            default: return state
    }

}










