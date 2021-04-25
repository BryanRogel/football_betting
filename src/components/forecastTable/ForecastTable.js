import React, { Component } from 'react';
import styled from 'styled-components';
import $ from 'jquery';


class ForecastTable extends Component {

    componentDidMount() {
        $("input:checkbox").on('click', function () {
            // Cambia cada vez que se haga clic en el checkbox
            var $box = $(this);
            if ($box.is(":checked")) {
                // Evalua el estado del checkbox
                var group = "input:checkbox[name='" + $box.attr("name") + "']";
                // Si ya existe un cambio en el grupo, quitará el valor anterior y agregará el nuevo elemento seleccionado
                $(group).prop("checked", false);
                $box.prop("checked", true);
            } else {
                $box.prop("checked", false);
            }
        });
    }


    render() {
        const { resultsData } = this.props;

        return (
            <Style>
                <div className="container">
                    <div className="row">
                        <div className="col-12 responsive-table">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th rowSpan="2" style={{ width: '30%' }}>PARTIDO</th>
                                        <th rowSpan="1" colSpan="3">PRONÓSTICO</th>
                                        <th rowSpan="1" colSpan="3">PARTIDO REAl</th>
                                        <th rowSpan="2">PUNTOS</th>
                                    </tr>
                                    <tr>
                                        <th>PRIMER TIEMPO</th>
                                        <th>SEGUNDO TIEMPO</th>
                                        <th>ACIERTO</th>
                                        <th>PRIMER TIEMPO</th>
                                        <th>SEGUNDO TIEMPO</th>
                                        <th>ACIERTO</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {resultsData && resultsData.map((resultData, index) => (
                                        <tr key={index}>
                                            <td>
                                                <div>
                                                    <p>{resultData.partido}</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <p>{resultData.prT1}</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <p>{resultData.prT2}</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <p>{ resultData.condicion + ': ' + resultData.prCn}</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <p>{resultData.paT1}</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <p>{resultData.paT2}</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <p>{resultData.paCn}</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <p>{resultData.puntos}</p>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Style>
        )
    }
}

const Style = styled.div`
.container {
    padding: 2rem 0rem;
}
.table {
    font-size: 15px;
}
h4 {
    margin: 2rem 0rem 1rem;
}
.radio {
    height: 20px;
    width: 20px;
}
.responsive-table {
    overflow-x: auto;
}
p {
    margin: 0px;
}
`;


export default ForecastTable;