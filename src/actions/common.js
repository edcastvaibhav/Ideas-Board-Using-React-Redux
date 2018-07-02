import * as actionTypes from '../constants/actionTypes';

export function addCard(card){
    return dispatch=>{
        dispatch({
            type: actionTypes.ADD_CARD,
            card
        });
    }
}

export function editCard(card){
    return dispatch=>{
        dispatch({
            type: actionTypes.EDIT_CARD,
            card
        });
    }
}

export function deleteCard(id){
    return dispatch=>{
        dispatch({
            type: actionTypes.DELETE_CARD,
            id
        });
    }
}