import {
    GET_SESSION_LOADING,
    GET_SESSION_SUCCESS,
    GET_SESSION_FAIL,
} from "../actions/loginActions";

const initState = {
    getSession: {
        isLoading: false,
        isSuccess: false,
        isError: false,
        message: '',
        status: '',
        data: [],
    }
}

const LoginReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_SESSION_LOADING: return {
            ...state,
            getSession: {
                ...state.getSession,
                isLoading: true,
                isSuccess: false,
                isError: false,
                message: '',
                status: '',
                data: [],
            }
        }
        case GET_SESSION_SUCCESS: return {
            ...state,
            getSession: {
                isLoading: false,
                isSuccess: true,
                isError: false,
                message: action.payload.message,
                status: action.payload.status,
                data: action.payload.result,
            }
        }
        case GET_SESSION_FAIL: return {
            ...state,
            getSession: {
                isLoading: false,
                isSuccess: false,
                isError: true,
                message: action.payload.message,
                status: action.payload.status,
                data: action.payload.result,
            }
        }
        default: return state;
    }
};

export default LoginReducer;