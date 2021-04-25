import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import logo from "../../assets/images/logo-wide.png";

class Menu extends Component {
    render() {

        return (
            <Style>
                <div className="row mt-2 mobile-navbar">
                    <div className="col-3 mobile-col" id="logo">
                    <Link to="/dashboard">
                        <img id="sport_betting" className="logoDashboard" src={logo} alt="logo_sport_betting" />
                    </ Link>
                    </div>
                    <div className="col-9 mobile-col">
                        <nav id="menu-principal">
                            <ul>
                                {/* <li><div id="link-web" className="enlace-menu">Pronostico</div> </li> */}
                                <li>   
                                    <Link to="/forecast">
                                        <div  id="enlace-clasificacion" className="enlace-menu">Mis pronósticos</div> 
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/results">
                                        <div id="enlace-estadisticas" className="enlace-menu">Resultados</div>
                                    </Link>
                                </li>
                                {/* <li><div  id="enlace-reglas" className="enlace-menu" data-toggle="modal" data-target="#modal-reglas">Las reglas</div> </li> */}
                                <li>
                                    <Link to="/rewards">
                                        <div id="enlace-premios" className="enlace-menu">Premios</div>
                                    </ Link>
                                </li>
                                {/* <li><div  id="enlace-novedades" className="enlace-menu" data-toggle="modal" data-target="#modal-novedades">Novedades</div> </li> */}
                            </ul>
                        </nav>
                    </div>
                </div>
            </Style>
        )
    }
}

const Style = styled.div`
    .enlace-menu:hover {
        cursor: pointer;
    }
    .logoDashboard {
        filter: invert(1);
    }
    a {
        text-decoration: none;
    }
`;


export default Menu;