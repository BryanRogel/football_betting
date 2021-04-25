import React, { Component } from 'react';
import styled from 'styled-components';
import $ from 'jquery';


class ResultTable extends Component {

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
                                        <th>LUGAR</th>
                                        <th>NOMBRE</th>
                                        <th>PAÍS</th>
                                        <th>PUNTOS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {resultsData && resultsData.map((resultData, index) => (
                                        <tr key={index}>
                                            <td>
                                                <div>
                                                    <p>{index+1}</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <p>{resultData.nombre}</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <p>{resultData.pais}</p>
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


export default ResultTable;