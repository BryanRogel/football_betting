import React, { Component } from 'react';
import logo from "../../assets/images/logo-wide.png";

class Error404 extends Component {
    render() {

        return (
            <div className="container-fluid">
                <div id="login" className="row justify-content-end">
                    <div className="col-sm-8">
                        <img id="logo-sport-betting" src={logo} className="img-fluid" alt="logo_sport_betting" />
                        <div id="mantenimiento" className="row justify-content-center">
                            <div className="col-sm-6">
                                <div className="mantenimiento">
                                    <h2><i className="fa fa-wrench"></i> En mantenimiento</h2>
                                    <p className="mensaje-mantenimiento">
                                        Hola, estamos realizando una actualizaci&oacute;n. El sitio estar&aacute; disponible en breves momentos.</p>
                                </div>
                            </div>
                        </div>
                        <div id="info-contacto" className="row justify-content-center">
                            <div className="col-sm-6">
                                <div id="info">
                                    <p>
                                        <a href="www.bryanrogel.com" >a</a>&nbsp;&nbsp;
                                        <a href="mailto:info@bryanrogel.com" >
                                            <i className="fa fa-envelope-o"></i>
                                        </a>
                                        &nbsp;&nbsp;
                                        <a href="https://facebook.com/#" >
                                            <i className="fa fa-facebook-official"></i>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Error404;