import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: localStorage.getItem('userName'),
        }
    }

    render() {
        const { userName } = this.state;
        const { closeSession } = this.props;
        return (
                <div id="menu-superior" className="row">
                    <div className="col" style={{ textAlign: "right" }}>
                        <ul>
                            <li>
                                <div id="username"><i className="fa fa-user"></i> <span className="datos-generales" data-rango="nickname">{userName}</span></div> 
                            </li>
                            {/* <li>
                            <div  id="puntos-totales-menu"><i className="fa fa-trophy"></i> <span id="posicion-usuario" className="pts"></span></div> 
                        </li>
                        <li>
                            <div  id="posicion-menu"><i className="fa fa-soccer-ball-o"></i> <span id="puntos-usuario" className="pts"></span></div> 
                        </li> */}
                            <li>
                                <div id="logout" onClick={ () => closeSession()}><i className="fa fa-sign-out"></i> Salir</div> 
                            </li>
                        </ul>
                    </div>
                </div>
        )
    }
}



export default Header;