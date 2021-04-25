import axios from "axios";

import { getSession } from "../../services/paths";

export const GET_SESSION_LOADING = "GET_SESSION_LOADING";
export const GET_SESSION_SUCCESS = "GET_SESSION_SUCCESS";
export const GET_SESSION_FAIL = "GET_SESSION_FAIL";

const getSessionLoading = () => ({ type: GET_SESSION_LOADING });
const getSessionSuccess = (payload) => ({ type: GET_SESSION_SUCCESS, payload });
const getSessionFail = (payload) => ({ type: GET_SESSION_FAIL, payload });

const getSessionData = (userCode) => async (dispatch) => {
    dispatch(getSessionLoading());
    try {
        let response = await axios.post(getSession(userCode));
        let data = [];
        if (response.status === 200) {
            data = {
                result: {
                    ...response.data
                }
            };

            const nameUser = data.result.nombre.replace(/ .*/,'');
            const lastNameUser = data.result.apellido.replace(/ .*/,'');

            localStorage.setItem("userSession", data.result.token);
            localStorage.setItem("userName", nameUser + ' ' + lastNameUser);
            await dispatch(getSessionSuccess(data));
        } else {
            data = {
                status: null,
                message: "Error",
                result: {
                    ...response.data
                },
            };
            dispatch(getSessionFail(data));
        }
    } catch (error) {
        console.log("error actionAction Login", error ? error : error);
        const data = {
            status: null,
            message: "Error",
            result: "Error en el login",
        };
        dispatch(getSessionFail(data));
    }
    return Promise.resolve();
};

export {
    getSessionData
};