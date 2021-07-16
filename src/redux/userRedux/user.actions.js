import { LOAD_DATA_REQUEST,
         LOAD_DATA_SUCCESS,
         LOAD_DATA_FAILURE  } from "./user.actionTypes"

import Axios from "axios"

export const loadData = () =>{
    return async (dispatch) =>{
        try{
            dispatch({type: LOAD_DATA_REQUEST})
            let dataURL = 'https://randomuser.me/api/'
            let response = await Axios.get(dataURL)
            dispatch({type: LOAD_DATA_SUCCESS, payload:response.data})
        }
        catch(error){
            dispatch({type:LOAD_DATA_FAILURE, payload: error})
        }
    }
}








