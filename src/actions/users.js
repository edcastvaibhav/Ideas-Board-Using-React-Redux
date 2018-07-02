import * as actionTypes from '../constants/actionTypes';


// export function getUserInfo() {
//     return dispatch => {
//         userRequests.getUserInfo().then(data =>{
//             setToken(data.csrfToken);
//             JWT.token = data.jwtToken;
//             dispatch({
//                 type: actionTypes.GET_USER_INFO,
//                 data: data
//             });
//         }).catch(err =>  {
//             document.location = '/log_in';
//         });
//     }
// }

// export function getPwcInfo(user_id) {
//     return dispatch => {
//         userV2Requests.getUserPwcRecords(user_id).then(data =>{
//             dispatch({
//                 type: actionTypes.GET_PWC_INFO,
//                 data: data
//             });
//         }).catch(err =>  {
//             // document.location = '/log_in';
//         });
//     }
// }