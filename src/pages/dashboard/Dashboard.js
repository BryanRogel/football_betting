import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import Header from '../../components/header/Header';
import Menu from '../../components/menu/Menu';
import TextPointTableMaker from '../../components/textPointTableMaker/TextPointTableMaker';
import FirstGoalTableMaker from '../../components/firstGoalTableMaker/FirstGoalTableMaker';
import LoadingScreen from '../../components/loading/Loading';
import {
    getFirstTimeData,
    getFinalScoreData,
    getFirstGoalData,
    getStageData,
    postForecastData,
} from '../../store/actions/tableActions';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            yearNow: moment().format('YYYY'),
            loadingScreen: true,
            loadingStatus1: false,
            loadingStatus2: false,
            loadingStatu3: false,
            loadingStatus4: false,
            firstTime: null,
            finalScore: null,
            firstGoal: null,
            blockData: false,
            disabledData: false,
            notInitDate: false,
        }
        // if (!localStorage.getItem('userSession') && !localStorage.getItem('userName')) {
        //     this.props.history.push('/login');
        // }
        this.props.getFirstTime();
        this.props.getFinalScore();
        this.props.getFirstGoal()
        this.props.getStage();
    }

    componentDidUpdate(prevProps) {
        const {
            isSuccessFirstTime,
            isSuccessFinalScore,
            isSuccessFirstGoal,
            isSuccessStage,
        } = this.props;

        const { loadingStatus1, loadingStatus2, loadingStatus3, loadingStatus4 } = this.state;

        if (isSuccessFirstGoal !== prevProps.isSuccessFirstGoal && isSuccessFirstGoal) {
            this.setState({ loadingStatus1: true });
        }

        if (isSuccessFinalScore !== prevProps.isSuccessFinalScore && isSuccessFinalScore) {
            this.setState({ loadingStatus2: true });
        }

        if (isSuccessFirstTime !== prevProps.isSuccessFirstTime && isSuccessFirstTime) {
            this.setState({ loadingStatus3: true });
        }

        if (isSuccessStage !== prevProps.isSuccessStage && isSuccessStage) {
            this.setState({ loadingStatus4: true });
        }

        if (loadingStatus1 && loadingStatus2 && loadingStatus3 && loadingStatus4) {
            this.setState({ loadingScreen: false, loadingStatus1: false, loadingStatus2: false, loadingStatus3: false, loadingStatus4: false })
            this.dateValidation();
            this.dateInitFinish();
        }
    }

    closeSession() {
        localStorage.removeItem('userSession');
        localStorage.removeItem('userName');
        this.props.history.push('/login');
    }

    sendData() {
        const { firstTime,
            finalScore,
            firstGoal } = this.state;
        const { postForecast, dataFirstGoal, dataFinalScore, dataFirstTime } = this.props;
    
        const send = {
            "token": localStorage.getItem('userSession'),
            "pregunta3": [
                ...dataFirstGoal.data,
            ],
            "pregunta2": [
                ...dataFinalScore.data,
            ],
            "pregunta1": [
                ...dataFirstTime.data,
            ],
        }

        let sendNewData = send;

        send && send.pregunta3.map((data, index) => {
            firstGoal && firstGoal.map((first, i) => {
                if (first.idGame === data.partido.id.toString()){
                    sendNewData.pregunta3[index].seleccion = first.value;
                }
                return null;
            })
            return index;
        })

        send && send.pregunta2.map((data, index) => {
            finalScore && finalScore.map((final, i) => {
                if (final.idGame === data.partido.id.toString()){
                    if(final.team === 'team1'){
                        sendNewData.pregunta2[index].puntajeEquipo1 = final.value;
                    } else {
                        sendNewData.pregunta2[index].puntajeEquipo2 = final.value;
                    }
                }
                return index;
            })
            return index;
        })

        send && send.pregunta1.map((data, index) => {
            firstTime && firstTime.map((first, i) => {
                if (first.idGame === data.partido.id.toString()){
                    if(first.team === 'team1'){
                        sendNewData.pregunta1[index].puntajeEquipo1 = first.value;
                    } else {
                        sendNewData.pregunta1[index].puntajeEquipo2 = first.value;
                    }
                }
                return null;
            })
            return index;
        })

        postForecast(sendNewData);
        this.setState({ loadingScreen: true });
    }

    getDataTable(data, nameTable) {
        if (data) {
            switch (nameTable) {
                case 'firstTime':
                    this.setState({ firstTime: data })
                    break;

                case 'finalScore':
                    this.setState({ finalScore: data })
                    break;

                case 'firstGoal':
                    this.setState({ firstGoal: data })
                    break;
                default:
                    break;
            }
        }
    }

    dateValidation(){

        const { dataStage } = this.props;

        const timeStamp = new Date(dataStage.fechaFinActivo);
        const dateEnd = moment(timeStamp).add(30, 'hours').format('DD-MM-YYYY HH:mm');
        const block = moment(dateEnd, 'DD-MM-YYYY HH:mm').isBefore(moment(new Date()))

        this.setState({ blockData: block });
    }


    dateInitFinish(){
        const { dataStage } = this.props;

        const dateInit = new Date(dataStage.fechaInicioMod);
        const dateEnd = new Date(dataStage.fechaFinMod);
        const dateInitActive = new Date(dataStage.fechaInicioActivo);
        const newDateInit = moment(dateInit).add(6, 'hours').format('DD-MM-YYYY HH:mm');
        const dateInitActiveInit = moment(dateInitActive).add(6, 'hours').format('DD-MM-YYYY HH:mm');
        const newDateEnd = moment(dateEnd).add(30, 'hours').format('DD-MM-YYYY HH:mm');

        const notInit = moment(newDateInit, 'DD-MM-YYYY HH:mm').isBefore(moment(new Date()));
        const notInitActive = moment(dateInitActiveInit, 'DD-MM-YYYY HH:mm').isBefore(moment(new Date()));
        const notFinish = moment(newDateEnd, 'DD-MM-YYYY HH:mm').isBefore(moment(new Date()));
        console.log('lol', moment(dateInitActiveInit, 'DD-MM-YYYY HH:mm') , moment(new Date()))
        if(notInitActive) {
            if(notInit && notFinish){
                // Finalizó
                this.setState({ disabledData: true });
            } else if(!notInit && !notFinish){
                // No comenzó
                this.setState({ notInitDate: true });
            }
        }
    }


    closeModalData() {
        this.props.getFirstTime();
        this.props.getFinalScore();
        this.props.getFirstGoal()
        this.props.getStage();
    }

    render() {
        const { 
            loadingScreen,
            textInput,
            blockData,
            disabledData,
            notInitDate,
            yearNow
        } = this.state;

        const {
            isErrorFirstTime,
            dataFirstTime,

            isErrorFinalScore,
            dataFinalScore,

            isErrorFirstGoal,
            dataFirstGoal,

            isErrorStage,
            dataStage,

            isSuccessForecast,
            dataForecast,

        } = this.props;

        return (
            <>
                {loadingScreen ?
                    <LoadingScreen />
                    :
                    <>
                    { isErrorFinalScore || isErrorFirstGoal || isErrorFirstTime || isErrorStage ?
                    <div className="col-sm-12">
                        {/* <Header closeSession={()=> this.closeSession()}/> */}
                        <Menu/>
                        <div className="row titulo-seccion">
                            <div className="col-12">
                                <h2 className="error-text">Ocurrió un error con los servicios</h2>
                            </div>
                            <div className="col-12 text-center mt-2">
                                <h3 className="error-text">Por favor, vuelva más tarde</h3>
                            </div>
                        </div>
                    </div>
                    :
                        <div className="col-sm-12">
                            {/* <Header closeSession={()=> this.closeSession()}/> */}
                            <Menu/>
                            <div className="row titulo-seccion">
                                <div className="col-12">
                                    <h2>Pronostico {yearNow}</h2>
                                </div>
                                <div className="col-12 text-center mt-2">
                                    <h3>{dataStage.codigo}</h3>
                                </div>
                            </div>
                            {blockData || notInitDate ?
                            <div className="col-12 text-center mt-2">
                                <h3>
                                    { notInitDate ? 
                                    'Aún no se han habilitado los pronosticos' 
                                    : 'Los pronosticos se han cerrado.' }
                                </h3>
                            </div>
                            :
                            <>
                                <div id="contenido" className="container-fluid">
                                    <TextPointTableMaker disabledData={disabledData} textInput={textInput} title={"MARCADOR DEL PRIMER TIEMPO"} dataTeam={dataFirstTime} nameTabla="firstTime" getDataTable={(data, nameTable) => this.getDataTable(data, nameTable)} />
                                    <TextPointTableMaker disabledData={disabledData} title={"MARCADOR FINAL"} dataTeam={dataFinalScore} nameTabla="finalScore" getDataTable={(data, nameTable) => this.getDataTable(data, nameTable)} />
                                    <FirstGoalTableMaker disabledData={disabledData} dataTeam={dataFirstGoal} nameTabla="firstGoal" getDataTable={(data, nameTable) => this.getDataTable(data, nameTable)} />
                                </div>
                                {!disabledData &&
                                    <div className="text-right">
                                        <button onClick={() => this.sendData()} className="btn button-style send-data" data-toggle="modal" data-target="#modalConfirmation">Enviar</button>
                                    </div>
                                }
                            </>
                            }
                        </div>
                    }
                    </>
                }
                <>
                <div className="modal fade" id="modalConfirmation" tabIndex="-1" role="dialog" aria-labelledby="modalConfirmationTitle" data-backdrop="static" data-keyboard="false" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modalConfirmationTitle"> { dataForecast.titleMessage && dataForecast.titleMessage }</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            { dataForecast.bodyMessage && dataForecast.bodyMessage }
                        </div>
                        <div className="modal-footer">
                            <button type="button" onClick={() => this.closeModalData()} className="btn btn-secondary" data-dismiss="modal" disabled={!isSuccessForecast}>Close</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </>
            </>
        )
    }
}


const mapStateToProps = (state) => ({
    isLoadingFirstTime: state.tableReducer.getFirstTime.isLoading,
    isSuccessFirstTime: state.tableReducer.getFirstTime.isSuccess,
    isErrorFirstTime: state.tableReducer.getFirstTime.isError,
    dataFirstTime: state.tableReducer.getFirstTime.data,

    isLoadingFinalScore: state.tableReducer.getFinalScore.isLoading,
    isSuccessFinalScore: state.tableReducer.getFinalScore.isSuccess,
    isErrorFinalScore: state.tableReducer.getFinalScore.isError,
    dataFinalScore: state.tableReducer.getFinalScore.data,

    isLoadingFirstGoal: state.tableReducer.getFirstGoal.isLoading,
    isSuccessFirstGoal: state.tableReducer.getFirstGoal.isSuccess,
    isErrorFirstGoal: state.tableReducer.getFirstGoal.isError,
    dataFirstGoal: state.tableReducer.getFirstGoal.data,

    isLoadingStage: state.tableReducer.getStage.isLoading,
    isSuccessStage: state.tableReducer.getStage.isSuccess,
    isErrorStage: state.tableReducer.getStage.isError,
    dataStage: state.tableReducer.getStage.data,

    isLoadingForecast: state.tableReducer.postForecast.isLoading,
    isSuccessForecast: state.tableReducer.postForecast.isSuccess,
    isErrorForecast: state.tableReducer.postForecast.isError,
    dataForecast: state.tableReducer.postForecast.data,
});

const mapDispatchToProps = (dispatch) => ({
    getFirstTime: () => dispatch(getFirstTimeData()),
    getFinalScore: () => dispatch(getFinalScoreData()),
    getFirstGoal: () => dispatch(getFirstGoalData()),
    getStage: () => dispatch(getStageData()),
    postForecast: (bodDatay) => dispatch(postForecastData(bodDatay)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);