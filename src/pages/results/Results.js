import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import LoadingScreen from '../../components/loading/Loading';
import { getResultsData } from '../../store/actions/tableActions';
import ResultTable from '../../components/resultTable/ResultTable';
import Header from '../../components/header/Header';
import Menu from '../../components/menu/Menu';

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            yearNow: moment().format('YYYY')
        }
        // if (!localStorage.getItem('userSession') && !localStorage.getItem('userName')) {
        //     this.props.history.push('/');
        // }
        this.props.getResults(localStorage.getItem('userSession'));
    }

    closeSession() {
        localStorage.removeItem('userSession');
        localStorage.removeItem('userName');
        this.props.history.push('/login');
    }

    render() {
        const {
            isLoadingResults,
            isErrorResults,
            data,
        } = this.props;

        const { yearNow } = this.state;

        return (
            <>
            {isLoadingResults ?
                <LoadingScreen /> 
                :
                <div className="col-sm-12">
                        <Header closeSession={()=> this.closeSession()}/>
                        <Menu />
                    <div className="row titulo-seccion">
                        {isErrorResults ? 
                            <div className="col-12 text-center">
                                <h2 className="error-text">ERROR</h2>
                                <h3 className="error-text">ERROR AL CARGAR LOS DATOS</h3>
                            </div>
                            :
                            <>
                                <div className="col-12">
                                    <h2>RESULTADOS {yearNow}</h2>
                                </div>
                                <div className="col-12 text-center mt-2">
                                    <ResultTable resultsData={data.data} />
                                </div>
                            </>
                        }
                    </div>
                </div>
            }
        </>
    )
    }
}
const mapStateToProps = (state) => ({
    isLoadingResults: state.tableReducer.getResults.isLoading,
    isSuccessResults: state.tableReducer.getResults.isSuccess,
    isErrorResults: state.tableReducer.getResults.isError,
    data: state.tableReducer.getResults.data,
})

const mapDispatchToProps = (dispatch) => ({
    getResults: (userCode) => dispatch(getResultsData(userCode))
})


export default connect(mapStateToProps, mapDispatchToProps)(Results);