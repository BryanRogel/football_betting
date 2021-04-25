import {
    GET_FIRST_TIME_LOADING,
    GET_FIRST_TIME_SUCCESS,
    GET_FIRST_TIME_FAIL,

    GET_FINAL_SCORE_LOADING,
    GET_FINAL_SCORE_SUCCESS,
    GET_FINAL_SCORE_FAIL,

    GET_FIRST_GOAL_LOADING,
    GET_FIRST_GOAL_SUCCESS,
    GET_FIRST_GOAL_FAIL,

    GET_STAGE_LOADING,
    GET_STAGE_SUCCESS,
    GET_STAGE_FAIL,

    POST_FORECAST_LOADING,
    POST_FORECAST_SUCCESS,
    POST_FORECAST_FAIL,

    GET_RESULTS_LOADING,
    GET_RESULTS_SUCCESS,
    GET_RESULTS_FAIL,

    GET_FORECAST_LOADING,
    GET_FORECAST_SUCCESS,
    GET_FORECAST_FAIL,
    } from "../actions/tableActions";

    const initState = {
        getFirstTime: {
            isLoading: false,
            isSuccess: false,
            isError: false,
            message: '',
            status: '',
            data: [],
        },
        getFinalScore: {
            isLoading: false,
            isSuccess: false,
            isError: false,
            message: '',
            status: '',
            data: [],
        },
        getFirstGoal: {
            isLoading: false,
            isSuccess: false,
            isError: false,
            message: '',
            status: '',
            data: [],
        },
        getStage: {
            isLoading: false,
            isSuccess: false,
            isError: false,
            message: '',
            status: '',
            data: [],
        },
        postForecast: {
            isLoading: false,
            isSuccess: false,
            isError: false,
            message: '',
            status: '',
            data: [],
        },
        getResults: {
            isLoading: false,
            isSuccess: false,
            isError: false,
            message: '',
            status: '',
            data: [],
        },
        getForecast: {
            isLoading: false,
            isSuccess: false,
            isError: false,
            message: '',
            status: '',
            data: [],
        }
    }
    
    const tableReducer = (state = initState, action) => {
        switch (action.type) {
            case GET_FIRST_TIME_LOADING: return {
                ...state,
                getFirstTime: {
                    ...state.getFirstTime,
                    isLoading: true,
                    isSuccess: false,
                    isError: false,
                    message: '',
                    status: '',
                    data: [],
                }
            }
            case GET_FIRST_TIME_SUCCESS: return {
                ...state,
                getFirstTime: {
                    isLoading: false,
                    isSuccess: true,
                    isError: false,
                    message: action.payload.message,
                    status: action.payload.status,
                    data: action.payload.result,
                }
            }
            case GET_FIRST_TIME_FAIL: return {
                ...state,
                getFirstTime: {
                    isLoading: false,
                    isSuccess: true,
                    isError: true,
                    message: action.payload.message,
                    status: action.payload.status,
                    data: action.payload.result,
                }
            }



            case GET_FINAL_SCORE_LOADING: return {
                ...state,
                getFinalScore: {
                    ...state.getFinalScore,
                    isLoading: true,
                    isSuccess: false,
                    isError: false,
                    message: '',
                    status: '',
                    data: [],
                }
            }
            case GET_FINAL_SCORE_SUCCESS: return {
                ...state,
                getFinalScore: {
                    isLoading: false,
                    isSuccess: true,
                    isError: false,
                    message: action.payload.message,
                    status: action.payload.status,
                    data: action.payload.result,
                }
            }
            case GET_FINAL_SCORE_FAIL: return {
                ...state,
                getFinalScore: {
                    isLoading: false,
                    isSuccess: true,
                    isError: true,
                    message: action.payload.message,
                    status: action.payload.status,
                    data: action.payload.result,
                }
            }



            case GET_FIRST_GOAL_LOADING: return {
                ...state,
                getFirstGoal: {
                    ...state.getFirstGoal,
                    isLoading: true,
                    isSuccess: false,
                    isError: false,
                    message: '',
                    status: '',
                    data: [],
                }
            }
            case GET_FIRST_GOAL_SUCCESS: return {
                ...state,
                getFirstGoal: {
                    isLoading: false,
                    isSuccess: true,
                    isError: false,
                    message: action.payload.message,
                    status: action.payload.status,
                    data: action.payload.result,
                }
            }
            case GET_FIRST_GOAL_FAIL: return {
                ...state,
                getFirstGoal: {
                    isLoading: false,
                    isSuccess: true,
                    isError: true,
                    message: action.payload.message,
                    status: action.payload.status,
                    data: action.payload.result,
                }
            }



            case GET_STAGE_LOADING: return {
                ...state,
                getStage: {
                    ...state.getStage,
                    isLoading: true,
                    isSuccess: false,
                    isError: false,
                    message: '',
                    status: '',
                    data: [],
                }
            }
            case GET_STAGE_SUCCESS: return {
                ...state,
                getStage: {
                    isLoading: false,
                    isSuccess: true,
                    isError: false,
                    message: action.payload.message,
                    status: action.payload.status,
                    data: action.payload.result,
                }
            }
            case GET_STAGE_FAIL: return {
                ...state,
                getStage: {
                    isLoading: false,
                    isSuccess: true,
                    isError: true,
                    message: action.payload.message,
                    status: action.payload.status,
                    data: action.payload.result,
                }
            }

            case POST_FORECAST_LOADING: return {
                ...state,
                postForecast: {
                    ...state.getStage,
                    isLoading: true,
                    isSuccess: false,
                    isError: false,
                    message: '',
                    status: '',
                    data:  {
                        titleMessage: 'Enviando datos',
                        bodyMessage: 'Estamos guardando sus predicciones, espere por favor',
                    },
                }
            }
            case POST_FORECAST_SUCCESS: return {
                ...state,
                postForecast: {
                    isLoading: false,
                    isSuccess: true,
                    isError: false,
                    message: action.payload.message,
                    status: action.payload.status,
                    data: action.payload.result,
                }
            }
            case POST_FORECAST_FAIL: return {
                ...state,
                postForecast: {
                    isLoading: false,
                    isSuccess: true,
                    isError: true,
                    message: action.payload.message,
                    status: action.payload.status,
                    data:  {
                        titleMessage: 'Hubo un error al guardar',
                        bodyMessage: 'Por favor, vuelva a intentar en unos minutos',
                    },
                }
            }

            case GET_RESULTS_LOADING: return {
                ...state,
                getResults: {
                    ...state.getResults,
                    isLoading: true,
                    isSuccess: false,
                    isError: false,
                    message: '',
                    status: '',
                    data: [],
                }
            }
            case GET_RESULTS_SUCCESS: return {
                ...state,
                getResults: {
                    isLoading: false,
                    isSuccess: true,
                    isError: false,
                    message: action.payload.message,
                    status: action.payload.status,
                    data: action.payload.result,
                }
            }
            case GET_RESULTS_FAIL: return {
                ...state,
                getResults: {
                    isLoading: false,
                    isSuccess: true,
                    isError: true,
                    message: action.payload.message,
                    status: action.payload.status,
                    data: action.payload.result,
                }
            }

            case GET_FORECAST_LOADING: return {
                ...state,
                getForecast: {
                    ...state.getForecast,
                    isLoading: true,
                    isSuccess: false,
                    isError: false,
                    message: '',
                    status: '',
                    data: [],
                }
            }
            case GET_FORECAST_SUCCESS: return {
                ...state,
                getForecast: {
                    isLoading: false,
                    isSuccess: true,
                    isError: false,
                    message: action.payload.message,
                    status: action.payload.status,
                    data: action.payload.result,
                }
            }
            case GET_FORECAST_FAIL: return {
                ...state,
                getForecast: {
                    isLoading: false,
                    isSuccess: true,
                    isError: true,
                    message: action.payload.message,
                    status: action.payload.status,
                    data: action.payload.result,
                }
            }



            default: return state;
        }
    };
    
    export default tableReducer;