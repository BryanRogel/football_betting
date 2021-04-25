import axios from "axios";

import { 
    // getFirstTime,
    // getFinalScore, 
    // getFirstGoal, 
    // getStage, 
    postForecast, 
    getResults,
    getForecast
} from "../../services/paths";

export const GET_FIRST_TIME_LOADING = "GET_FIRST_TIME_LOADING";
export const GET_FIRST_TIME_SUCCESS = "GET_FIRST_TIME_SUCCESS";
export const GET_FIRST_TIME_FAIL = "GET_FIRST_TIME_FAIL";

export const GET_FINAL_SCORE_LOADING = "GET_FINAL_SCORE_LOADING";
export const GET_FINAL_SCORE_SUCCESS = "GET_FINAL_SCORE_SUCCESS";
export const GET_FINAL_SCORE_FAIL = "GET_FINAL_SCORE_FAIL";

export const GET_FIRST_GOAL_LOADING = "GET_FIRST_GOAL_LOADING";
export const GET_FIRST_GOAL_SUCCESS = "GET_FIRST_GOAL_SUCCESS";
export const GET_FIRST_GOAL_FAIL = "GET_FIRST_GOAL_FAIL";

export const GET_STAGE_LOADING = "GET_STAGE_LOADING";
export const GET_STAGE_SUCCESS = "GET_STAGE_SUCCESS";
export const GET_STAGE_FAIL = "GET_STAGE_FAIL";

export const POST_FORECAST_LOADING = "POST_FORECAST_LOADING";
export const POST_FORECAST_SUCCESS = "POST_FORECAST_SUCCESS";
export const POST_FORECAST_FAIL = "POST_FORECAST_FAIL";

export const GET_RESULTS_LOADING = "GET_RESULTS_LOADING";
export const GET_RESULTS_SUCCESS = "GET_RESULTS_SUCCESS";
export const GET_RESULTS_FAIL = "GET_RESULTS_FAIL";

export const GET_FORECAST_LOADING = "GET_FORECAST_LOADING";
export const GET_FORECAST_SUCCESS = "GET_FORECAST_SUCCESS";
export const GET_FORECAST_FAIL = "GET_FORECAST_FAIL";

const getFirstTimeLoading = () => ({ type: GET_FIRST_TIME_LOADING });
const getFirstTimeSuccess = (payload) => ({ type: GET_FIRST_TIME_SUCCESS, payload });
const getFirstTimeFail = (payload) => ({ type: GET_FIRST_TIME_FAIL, payload });

const getFinalScoreLoading = () => ({ type: GET_FINAL_SCORE_LOADING });
const getFinalScoreSuccess = (payload) => ({ type: GET_FINAL_SCORE_SUCCESS, payload });
const getFinalScoreFail = (payload) => ({ type: GET_FINAL_SCORE_FAIL, payload });

const getFirstGoalLoading = () => ({ type: GET_FIRST_GOAL_LOADING });
const getFirstGoalSuccess = (payload) => ({ type: GET_FIRST_GOAL_SUCCESS, payload });
const getFirstGoalFail = (payload) => ({ type: GET_FIRST_GOAL_FAIL, payload });

const getStageLoading = () => ({ type: GET_STAGE_LOADING });
const getStageSuccess = (payload) => ({ type: GET_STAGE_SUCCESS, payload });
const getStageFail = (payload) => ({ type: GET_STAGE_FAIL, payload });

const postForecastLoading = () => ({ type: POST_FORECAST_LOADING });
const postForecastSuccess = (payload) => ({ type: POST_FORECAST_SUCCESS, payload });
const postForecastFail = (payload) => ({ type: POST_FORECAST_FAIL, payload });

const getResultsLoading = () => ({ type: GET_RESULTS_LOADING });
const getResultsSuccess = (payload) => ({ type: GET_RESULTS_SUCCESS, payload });
const getResultsFail = (payload) => ({ type: GET_RESULTS_FAIL, payload });

const getForecastLoading = () => ({ type: GET_FORECAST_LOADING });
const getForecastSuccess = (payload) => ({ type: GET_FORECAST_SUCCESS, payload });
const getForecastFail = (payload) => ({ type: GET_FORECAST_FAIL, payload });

const getFirstTimeData = () => async (dispatch) => {
    dispatch(getFirstTimeLoading());
    try {
        let data = {
                result: {
                    data: [
                        {
                            "id": null,
                            "partido": {
                                "id": 1,
                                "equipo1": {
                                    "id": 1,
                                    "nombre": "Real Madrid",
                                    "codigo": "RM",
                                    "logo": "https://www.logofootball.net/wp-content/uploads/Real-Madrid-CF-Logo.png"
                                },
                                "equipo2": {
                                    "id": 2,
                                    "nombre": "Liverpool F.C.",
                                    "codigo": "LIV",
                                    "logo": "https://www.logofootball.net/wp-content/uploads/Liverpool-FC-HD-Logo.png"
                                },
                                "etapa": {
                                    "id": 4,
                                    "codigo": "Cuartos de Final - Ida",
                                    "fechaInicioMod": 1617170400000,
                                    "fechaFinMod": 1617688800000,
                                    "fechaInicioActivo": 1615788000000,
                                    "fechaFinActivo": 1618034400000,
                                    "modificable": null
                                }
                            },
                            "otro": "No goles",
                            "seleccion": null
                        },
                        {
                            "id": null,
                            "partido": {
                                "id": 2,
                                "equipo1": {
                                    "id": 3,
                                    "nombre": "Manchester City F.C.",
                                    "codigo": "MC",
                                    "logo": "https://www.logofootball.net/wp-content/uploads/Manchester-City-FC-HD-Logo.png"
                                },
                                "equipo2": {
                                    "id": 4,
                                    "nombre": "Borussia Dortmund",
                                    "codigo": "BVB",
                                    "logo": "https://www.logofootball.net/wp-content/uploads/Borussia-Dortmund-Logo.png"
                                },
                                "etapa": {
                                    "id": 4,
                                    "codigo": "Cuartos de Final - Ida",
                                    "fechaInicioMod": 1617170400000,
                                    "fechaFinMod": 1617688800000,
                                    "fechaInicioActivo": 1615788000000,
                                    "fechaFinActivo": 1618034400000,
                                    "modificable": null
                                }
                            },
                            "otro": "No goles",
                            "seleccion": null
                        },
                        {
                            "id": null,
                            "partido": {
                                "id": 3,
                                "equipo1": {
                                    "id": 5,
                                    "nombre": "F.C. Bayern Munich",
                                    "codigo": "BM",
                                    "logo": "https://www.logofootball.net/wp-content/uploads/FC-Bayern-Munich-Logo.png"
                                },
                                "equipo2": {
                                    "id": 6,
                                    "nombre": "Paris Saint-Germain F.C. ",
                                    "codigo": "PSG",
                                    "logo": "https://www.logofootball.net/wp-content/uploads/Paris-Saint-Germain-FC-Logo.png"
                                },
                                "etapa": {
                                    "id": 4,
                                    "codigo": "Cuartos de Final - Ida",
                                    "fechaInicioMod": 1617170400000,
                                    "fechaFinMod": 1617688800000,
                                    "fechaInicioActivo": 1615788000000,
                                    "fechaFinActivo": 1618034400000,
                                    "modificable": null
                                }
                            },
                            "otro": "No goles",
                            "seleccion": null
                        },
                        {
                            "id": null,
                            "partido": {
                                "id": 4,
                                "equipo1": {
                                    "id": 7,
                                    "nombre": "F.C. Porto",
                                    "codigo": "POR",
                                    "logo": "https://www.logofootball.net/wp-content/uploads/FC-Porto-HD-Logo.png"
                                },
                                "equipo2": {
                                    "id": 8,
                                    "nombre": "Chelsea F.C.",
                                    "codigo": "CHE",
                                    "logo": "https://www.logofootball.net/wp-content/uploads/Chelsea-FC-HD-Logo.png"
                                },
                                "etapa": {
                                    "id": 4,
                                    "codigo": "Cuartos de Final - Ida",
                                    "fechaInicioMod": 1617170400000,
                                    "fechaFinMod": 1617688800000,
                                    "fechaInicioActivo": 1615788000000,
                                    "fechaFinActivo": 1618034400000,
                                    "modificable": null
                                }
                            },
                            "otro": "No goles",
                            "seleccion": null
                        }
                    ]                    
                }
            };
            await dispatch(getFirstTimeSuccess(data));
    } catch (error) {
        console.log("error actionAction first time", error ? error : error);
        const data = {
            status: null,
            message: "Error",
            result: "Error en los datos.",
        };
        dispatch(getFirstTimeFail(data));
    }
    return Promise.resolve();
};

const getFinalScoreData = () => async (dispatch) => {
    dispatch(getFinalScoreLoading());
    try {
        let data = {
                result: {
                    data: [
                        {
                            "id": 0,
                            "partido": {
                                "id": 1,
                                "equipo1": {
                                    "id": 1,
                                    "nombre": "Real Madrid",
                                    "codigo": "RM",
                                    "logo": "https://www.logofootball.net/wp-content/uploads/Real-Madrid-CF-Logo.png"
                                },
                                "equipo2": {
                                    "id": 2,
                                    "nombre": "Liverpool F.C.",
                                    "codigo": "LIV",
                                    "logo": "https://www.logofootball.net/wp-content/uploads/Liverpool-FC-HD-Logo.png"
                                },
                                "etapa": {
                                    "id": 4,
                                    "codigo": "Cuartos de Final - Ida",
                                    "fechaInicioMod": 1617170400000,
                                    "fechaFinMod": 1617688800000,
                                    "fechaInicioActivo": 1615788000000,
                                    "fechaFinActivo": 1618034400000,
                                    "modificable": null
                                }
                            },
                            "puntajeEquipo1": null,
                            "puntajeEquipo2": null
                        },
                        {
                            "id": 0,
                            "partido": {
                                "id": 2,
                                "equipo1": {
                                    "id": 3,
                                    "nombre": "Manchester City F.C.",
                                    "codigo": "MC",
                                    "logo": "https://www.logofootball.net/wp-content/uploads/Manchester-City-FC-HD-Logo.png"
                                },
                                "equipo2": {
                                    "id": 4,
                                    "nombre": "Borussia Dortmund",
                                    "codigo": "BVB",
                                    "logo": "https://www.logofootball.net/wp-content/uploads/Borussia-Dortmund-Logo.png"
                                },
                                "etapa": {
                                    "id": 4,
                                    "codigo": "Cuartos de Final - Ida",
                                    "fechaInicioMod": 1617170400000,
                                    "fechaFinMod": 1617688800000,
                                    "fechaInicioActivo": 1615788000000,
                                    "fechaFinActivo": 1618034400000,
                                    "modificable": null
                                }
                            },
                            "puntajeEquipo1": null,
                            "puntajeEquipo2": null
                        },
                        {
                            "id": 0,
                            "partido": {
                                "id": 3,
                                "equipo1": {
                                    "id": 5,
                                    "nombre": "F.C. Bayern Munich",
                                    "codigo": "BM",
                                    "logo": "https://www.logofootball.net/wp-content/uploads/FC-Bayern-Munich-Logo.png"
                                },
                                "equipo2": {
                                    "id": 6,
                                    "nombre": "Paris Saint-Germain F.C. ",
                                    "codigo": "PSG",
                                    "logo": "https://www.logofootball.net/wp-content/uploads/Paris-Saint-Germain-FC-Logo.png"
                                },
                                "etapa": {
                                    "id": 4,
                                    "codigo": "Cuartos de Final - Ida",
                                    "fechaInicioMod": 1617170400000,
                                    "fechaFinMod": 1617688800000,
                                    "fechaInicioActivo": 1615788000000,
                                    "fechaFinActivo": 1618034400000,
                                    "modificable": null
                                }
                            },
                            "puntajeEquipo1": null,
                            "puntajeEquipo2": null
                        },
                        {
                            "id": 0,
                            "partido": {
                                "id": 4,
                                "equipo1": {
                                    "id": 7,
                                    "nombre": "F.C. Porto",
                                    "codigo": "POR",
                                    "logo": "https://www.logofootball.net/wp-content/uploads/FC-Porto-HD-Logo.png"
                                },
                                "equipo2": {
                                    "id": 8,
                                    "nombre": "Chelsea F.C.",
                                    "codigo": "CHE",
                                    "logo": "https://www.logofootball.net/wp-content/uploads/Chelsea-FC-HD-Logo.png"
                                },
                                "etapa": {
                                    "id": 4,
                                    "codigo": "Cuartos de Final - Ida",
                                    "fechaInicioMod": 1617170400000,
                                    "fechaFinMod": 1617688800000,
                                    "fechaInicioActivo": 1615788000000,
                                    "fechaFinActivo": 1618034400000,
                                    "modificable": null
                                }
                            },
                            "puntajeEquipo1": null,
                            "puntajeEquipo2": null
                        }
                    ]
                    
                }
            };
            await dispatch(getFinalScoreSuccess(data));
    } catch (error) {
        console.log("error actionAction final score", error ? error : error);
        const data = {
            status: null,
            message: "Error",
            result: "Error en los datos de resultado final.",
        };
        dispatch(getFinalScoreFail(data));
    }
    return Promise.resolve();
};

const getFirstGoalData = () => async (dispatch) => {
    dispatch(getFirstGoalLoading());
    try {
        let data = {
                result: {
                    data: [
                        {
                            "id": 0,
                            "partido": {
                                "id": 1,
                                "equipo1": {
                                    "id": 1,
                                    "nombre": "Real Madrid",
                                    "codigo": "RM",
                                    "logo": "https://www.logofootball.net/wp-content/uploads/Real-Madrid-CF-Logo.png"
                                },
                                "equipo2": {
                                    "id": 2,
                                    "nombre": "Liverpool F.C.",
                                    "codigo": "LIV",
                                    "logo": "https://www.logofootball.net/wp-content/uploads/Liverpool-FC-HD-Logo.png"
                                },
                                "etapa": {
                                    "id": 4,
                                    "codigo": "Cuartos de Final - Ida",
                                    "fechaInicioMod": 1617170400000,
                                    "fechaFinMod": 1617688800000,
                                    "fechaInicioActivo": 1615788000000,
                                    "fechaFinActivo": 1618034400000,
                                    "modificable": null
                                }
                            },
                            "puntajeEquipo1": null,
                            "puntajeEquipo2": null
                        },
                        {
                            "id": 0,
                            "partido": {
                                "id": 2,
                                "equipo1": {
                                    "id": 3,
                                    "nombre": "Manchester City F.C.",
                                    "codigo": "MC",
                                    "logo": "https://www.logofootball.net/wp-content/uploads/Manchester-City-FC-HD-Logo.png"
                                },
                                "equipo2": {
                                    "id": 4,
                                    "nombre": "Borussia Dortmund",
                                    "codigo": "BVB",
                                    "logo": "https://www.logofootball.net/wp-content/uploads/Borussia-Dortmund-Logo.png"
                                },
                                "etapa": {
                                    "id": 4,
                                    "codigo": "Cuartos de Final - Ida",
                                    "fechaInicioMod": 1617170400000,
                                    "fechaFinMod": 1617688800000,
                                    "fechaInicioActivo": 1615788000000,
                                    "fechaFinActivo": 1618034400000,
                                    "modificable": null
                                }
                            },
                            "puntajeEquipo1": null,
                            "puntajeEquipo2": null
                        },
                        {
                            "id": 0,
                            "partido": {
                                "id": 3,
                                "equipo1": {
                                    "id": 5,
                                    "nombre": "F.C. Bayern Munich",
                                    "codigo": "BM",
                                    "logo": "https://www.logofootball.net/wp-content/uploads/FC-Bayern-Munich-Logo.png"
                                },
                                "equipo2": {
                                    "id": 6,
                                    "nombre": "Paris Saint-Germain F.C. ",
                                    "codigo": "PSG",
                                    "logo": "https://www.logofootball.net/wp-content/uploads/Paris-Saint-Germain-FC-Logo.png"
                                },
                                "etapa": {
                                    "id": 4,
                                    "codigo": "Cuartos de Final - Ida",
                                    "fechaInicioMod": 1617170400000,
                                    "fechaFinMod": 1617688800000,
                                    "fechaInicioActivo": 1615788000000,
                                    "fechaFinActivo": 1618034400000,
                                    "modificable": null
                                }
                            },
                            "puntajeEquipo1": null,
                            "puntajeEquipo2": null
                        },
                        {
                            "id": 0,
                            "partido": {
                                "id": 4,
                                "equipo1": {
                                    "id": 7,
                                    "nombre": "F.C. Porto",
                                    "codigo": "POR",
                                    "logo": "https://www.logofootball.net/wp-content/uploads/FC-Porto-HD-Logo.png"
                                },
                                "equipo2": {
                                    "id": 8,
                                    "nombre": "Chelsea F.C.",
                                    "codigo": "CHE",
                                    "logo": "https://www.logofootball.net/wp-content/uploads/Chelsea-FC-HD-Logo.png"
                                },
                                "etapa": {
                                    "id": 4,
                                    "codigo": "Cuartos de Final - Ida",
                                    "fechaInicioMod": 1617170400000,
                                    "fechaFinMod": 1617688800000,
                                    "fechaInicioActivo": 1615788000000,
                                    "fechaFinActivo": 1618034400000,
                                    "modificable": null
                                }
                            },
                            "puntajeEquipo1": null,
                            "puntajeEquipo2": null
                        }
                    ]                    
                }
            };

            await dispatch(getFirstGoalSuccess(data));
    } catch (error) {
        console.log("error actionAction first goal", error ? error : error);
        const data = {
            status: null,
            message: "Error",
            result: "Error en los datos del primer gol.",
        };
        dispatch(getFirstGoalFail(data));
    }
    return Promise.resolve();
};

const getStageData = () => async (dispatch) => {
    dispatch(getStageLoading());
    try {
        let data = {
                result: {
                    "id": 4,
                    "codigo": "Cuartos de Final - Ida",
                    "fechaInicioMod": 1617170400000,
                    "fechaFinMod": 925617688800000,
                    "fechaInicioActivo": 1615788000000,
                    "fechaFinActivo": 925618034400000,
                    "modificable": true
                }
            };
            await dispatch(getStageSuccess(data));

    } catch (error) {
        console.log("error actionAction stage", error ? error : error);
        const data = {
            status: null,
            message: "Error",
            result: "Error en los datos de la etapa.",
        };
        dispatch(getStageFail(data));
    }
    return Promise.resolve();
};

const postForecastData = (bodyData) => async (dispatch) => {
    dispatch(postForecastLoading());
    try {
        let response = await axios.post(postForecast(), bodyData);
        let data = [];

        if (response.status === 200) {
            data = {
                result: {
                    ...response.data,
                    titleMessage: 'Datos enviados',
                    bodyMessage: 'Predicciones guardadas ¡Buena suerte!',
                }
            };
            await dispatch(postForecastSuccess(data));
        } else {
            data = {
                status: null,
                message: "Error",
                result: {
                    ...response.data,
                    titleMessage: 'Hubo un error al guardar',
                    bodyMessage: 'Por favor, vuelva a intentar en unos minutos',
                },
            };
            dispatch(postForecastFail(data));
        }
    } catch (error) {
        console.log("error actionAction stage", error ? error : error);
        const data = {
            status: null,
            message: "Error",
            esult: {
                titleMessage: 'Hubo un error al guardar',
                bodyMessage: 'Por favor, vuelva a intentar en unos minutos',
            },
        };
        dispatch(postForecastFail(data));
    }
    return Promise.resolve();
};

const getResultsData = () => async (dispatch) => {
    dispatch(getResultsLoading());
    try {
        let token = null;
        if(localStorage.getItem('userSession')){
            token = localStorage.getItem('userSession');
        }
        let response = await axios.post(getResults(token));
        let data = [];

        if (response.status === 200) {
            data = {
                result: {
                    data: [
                        ...response.data
                    ]
                }
            };
            await dispatch(getResultsSuccess(data));
        } else {
            data = {
                status: null,
                message: "Error",
                result: {
                    ...response.data
                },
            };
            dispatch(getResultsFail(data));
        }
    } catch (error) {
        console.log("error actionAction Results", error ? error : error);
        const data = {
            status: null,
            message: "Error",
            result: "Error en los datos de la etapa.",
        };
        dispatch(getResultsFail(data));
    }
    return Promise.resolve();
};

const getForecastData = () => async (dispatch) => {
    dispatch(getForecastLoading());
    try {
        let token = null;
        if(localStorage.getItem('userSession')){
            token = localStorage.getItem('userSession');
        }
        let response = await axios.post(getForecast(token));
        let data = [];

        if (response.status === 200) {
            data = {
                result: {
                    data: [
                        ...response.data
                    ]
                }
            };
            await dispatch(getForecastSuccess(data));
        } else {
            data = {
                status: null,
                message: "Error",
                result: {
                    ...response.data
                },
            };
            dispatch(getForecastFail(data));
        }
    } catch (error) {
        console.log("error actionAction Forecast", error ? error : error);
        const data = {
            status: null,
            message: "Error",
            result: "Error en los datos de la etapa.",
        };
        dispatch(getForecastFail(data));
    }
    return Promise.resolve();
};

export {
    getFirstTimeData,
    getFinalScoreData,
    getFirstGoalData,
    getStageData,
    postForecastData,
    getResultsData,
    getForecastData
};