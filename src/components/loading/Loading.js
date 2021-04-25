import React, { Component } from 'react';
import styled from 'styled-components';

import logo from '../../assets/images/loading-logo.png'

class Loading extends Component {
    render() {
        return (
            <Style>
                <div className="screenLogo">
                    <img src={logo} height="200px" className="loading" alt="loading" />
                    <h1 className="text-center font-weight-bold">CARGANDO</h1>
                </div>
            </Style>
        )
    }
}

const Style = styled.div`
@-webkit-keyframes spin {
    from {
        -webkit-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    to {
        -webkit-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
@keyframes spin {
    from {
        -ms-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    to {
        -ms-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
.loading {
    -webkit-animation: spin 2s linear infinite;
    -moz-animation: spin 2s linear infinite;
    -ms-animation: spin 2s linear infinite;
    -o-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
}

.screenLogo {
    display: grid;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 90vh;
    z-index: 99999; 
}
`;

export default Loading;