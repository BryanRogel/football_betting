import React, { Component } from 'react';
// import { connect } from 'react-redux';
import logo from "../../assets/images/logo-wide.png";


class Singup extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div id="login" className="row justify-content-end">
                        <div className="col-sm-8">
                            {/* <a className="btn btn-warning" href="#" id="ir-a-registro"> <i className="fa fa-pencil"></i> Registrarme</a> */}
                            <img id="logo-sport-betting" src={logo} className="img-fluid" alt="sport_betting" style={{ padding: "20px 0" }}/>
                            <div id="formularios" className="row justify-content-center">
                            </div>
                            <div id="info-contacto" className="row justify-content-center">
                                <div className="col-sm-6">
                                    <div id="info">
                                        <p>
                                        
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="modal-terminos" className="modal" tabIndex={-1} role="dialog">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">T&eacute;rminos y condiciones</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <h2>xd</h2>
                                <h3>xd</h3>
                                <p>xd</p>
                                <h3>xd</h3>
                                <p>xd</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn button-style" data-dismiss="modal">Cerrar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Singup;