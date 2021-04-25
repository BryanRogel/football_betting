import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoadingScreen from '../../components/loading/Loading';
import { getForecastData } from '../../store/actions/tableActions';
import ForecastTable from '../../components/forecastTable/ForecastTable';
import Header from '../../components/header/Header';
import Menu from '../../components/menu/Menu';

class Forecast extends Component {
    constructor(props) {
        super(props);
        // if (!localStorage.getItem('userSession') && !localStorage.getItem('userName')) {
        //     this.props.history.push('/');
        // }
        this.props.getForecast();
    }

    closeSession() {
        localStorage.removeItem('userSession');
        localStorage.removeItem('userName');
        this.props.history.push('/login');
    }

    render() {
        const {
            isLoadingForecast,
            isErrorForecast,
            data,
        } = this.props;

        return (
            <>
            {isLoadingForecast ?
                <LoadingScreen /> 
                : 
                <div className="col-sm-12">
                        <Header closeSession={()=> this.closeSession()}/>
                        <Menu />
                    <div className="row titulo-seccion">
                        {isErrorForecast ? 
                            <div className="col-12 text-center">
                                <h2 className="error-text">ERROR</h2>
                                <h3 className="error-text">ERROR AL CARGAR LOS DATOS</h3>
                            </div>
                            :
                            <>
                                <div className="col-12">
                                    <h2>HISTORIAL DE PRONÓSTICOS</h2>
                                </div>
                                <div className="col-12 text-center mt-2">
                                    <ForecastTable resultsData={data.data} />
                                </div>
                            </>
                        }
                    </div>
                </div>
            }
        </>
    )}
}
const mapStateToProps = (state) => ({
    isLoadingForecast: state.tableReducer.getForecast.isLoading,
    isSuccessForecast: state.tableReducer.getForecast.isSuccess,
    isErrorForecast: state.tableReducer.getForecast.isError,
    data: state.tableReducer.getForecast.data,
})

const mapDispatchToProps = (dispatch) => ({
    getForecast: () => dispatch(getForecastData())
})


export default connect(mapStateToProps, mapDispatchToProps)(Forecast);