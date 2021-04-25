import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from "../../assets/images/logo-wide.png";
import { getSessionData } from '../../store/actions/loginActions';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            textInput: React.createRef(),
        }
        if (localStorage.getItem('userSession') && localStorage.getItem('userName')) {
            this.props.history.push('/dashboard');
        }
    }

    componentDidUpdate(prevProps) {
        const {
            isSuccessSession,
        } = this.props;

        if (isSuccessSession !== prevProps.isSuccessSession && isSuccessSession) {
            if (localStorage.getItem('userSession') && localStorage.getItem('userName')) {
                this.props.history.push('/dashboard');
            }
        }
    }


    sendData() {
        const { textInput } = this.state;
        const { getSession } = this.props;

        const codeData = textInput.current.value;

        if (codeData) {
            getSession(codeData);
        }
    }

    render() {

        const {
            isLoadingSession,
            isErrorSession,
            data,
        } = this.props;

        const {
            textInput
        } = this.state;

        return (
            <div className="container-fluid">
                <div id="login" className="row d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                    <div className="col-sm-4 col-12 d-flex justify-content-center align-items-center">
                        <img id="logo-sport-betting" src={logo} className="logoDashboard" alt="sport_betting" />
                    </div>
                    <div className="col-sm-8 col-12">
                        <div id="info-contacto" className="row justify-content-center mb-3">
                            <div className="col-sm-8">
                                <div id="login-form" style={{ padding: "20px" }}>
                                    <h2>Iniciar sesi&oacute;n</h2>
                                    <div className="form-group">
                                        <label htmlFor="">Código de acceso</label>
                                        <input ref={textInput} id="token-usuario" name="token" type="text" className="form-control" required />
                                    </div>
                                    {isLoadingSession ?
                                        <button onClick={() => null} className="btn button-style" disabled>Ingresar</button>
                                        :
                                        <button onClick={() => this.sendData()} className="btn button-style">Ingresar</button>
                                    }
                                </div>
                            </div>
                        </div>
                        { isErrorSession && 
                            <div className="alert alert-danger text-center m-auto" style={{ maxWidth: "500px" }} role="alert">
                            { data && data }
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isLoadingSession: state.loginReducer.getSession.isLoading,
    isSuccessSession: state.loginReducer.getSession.isSuccess,
    isErrorSession: state.loginReducer.getSession.isError,
    data: state.loginReducer.getSession.data,
})

const mapDispatchToProps = (dispatch) => ({
    getSession: (userCode) => dispatch(getSessionData(userCode))
})


export default connect(mapStateToProps, mapDispatchToProps)(Login);