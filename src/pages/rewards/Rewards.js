import React, { Component } from 'react';
import styled from 'styled-components';

import rewardsArts from "../../assets/images/logo-wide.png";
import Header from '../../components/header/Header';
import Menu from '../../components/menu/Menu';

class Rewards extends Component {
    // constructor(props) {
    //     super(props);
    //     if (!localStorage.getItem('userSession') && !localStorage.getItem('userName')) {
    //         this.props.history.push('/login');
    //     }
    // }

    closeSession() {
        localStorage.removeItem('userSession');
        localStorage.removeItem('userName');
        this.props.history.push('/login');
    }

    render() {
        return (
            <Style>
                <Header closeSession={()=> this.closeSession()}/>
                <Menu/>
                <div className="container mt-5">
                    <img className="img-fluid mb-5" src={rewardsArts} alt="rewards" />
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
`;


export default Rewards;