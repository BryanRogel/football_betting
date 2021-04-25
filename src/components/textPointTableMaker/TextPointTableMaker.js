import React, { Component } from 'react';
import styled from 'styled-components';
import $ from 'jquery';

class FinalPointTableMaker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newValues: [],
        }
    }

    componentDidMount() {
        // validación checkbox unico por fila.
        $("input:checkbox").on('click', function () {
            var $box = $(this);
            if ($box.is(":checked")) {
                var group = "input:checkbox[name='" + $box.attr("name") + "']";
                $(group).prop("checked", false);
                $box.prop("checked", true);
            } else {
                $box.prop("checked", false);
            }
        });

        //validación solo números positivos
        $("input:text").keypress(function (e) {
            console.log('hola', e)
            var charCode = (e.which) ? e.which : e.keyCode;
            console.log("🚀 ~ file: TextPointTableMaker.js ~ line 31 ~ FinalPointTableMaker ~ charCode", charCode)
            if (charCode > 31 && (charCode < 48 || charCode > 57)) {
                return false;
            }
        });
    }

    onChange(name, e){
        const { newValues } = this.state;
        const { getDataTable, nameTabla } = this.props;

        let data = "";
        let exist = false;

        if(newValues.length > 0){
            newValues && newValues.map((values, index) => {
                if (values.id === e.target.name){
                    data = newValues.splice(index, 1);
                    data = newValues.concat( { value: e.target.value, id: e.target.name, idGame: e.target.title, team: e.target.className }  )
                    exist = true;
                }
                return null;
            })
        } 
        if (!exist) {
            data = newValues.concat( { value: e.target.value, id: e.target.name, idGame: e.target.title, team: e.target.className }  )
            exist = false;
        }

        getDataTable(data, nameTabla);
        this.setState({ newValues: data })
    }

    render() {
        const { title, dataTeam, disabledData } = this.props;
        return (
            <Style>
                <div className="container">
                    <div className="row">
                        <div className="col-12 responsive-table">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th colSpan={5}>{title}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dataTeam && dataTeam.data.map((teamData, index) => (
                                        <tr key={index} className="d-flex justify-content-center align-items-center">
                                            <td className="team-logo-wrapper">
                                                <img src={teamData.partido.equipo1.logo} className="team-logo" alt={teamData.partido.equipo1.id} />
                                                <p className="font-team">{teamData.partido.equipo1.nombre}</p>
                                            </td>
                                            <td>
                                                <div className="custom-control custom-input">
                                                    <input type="text" defaultValue={teamData.puntajeEquipo1 ? teamData.puntajeEquipo1 : 0} 
                                                    name={teamData.partido.equipo1.id} 
                                                    title={teamData.partido.id} className="team1" 
                                                    onChange={this.onChange.bind(this, index)} 
                                                    value={this.state.index} disabled={disabledData}
                                                    autoComplete="off"
                                                    maxLength={2}/>
                                                </div>
                                            </td>
                                            <td>
                                                <h1>-</h1>
                                            </td>
                                            <td>
                                                <div className="custom-control custom-input">
                                                    <input type="text" name={teamData.partido.equipo2.id} 
                                                    defaultValue={teamData.puntajeEquipo2 ? teamData.puntajeEquipo2 : 0 } 
                                                    title={teamData.partido.id} className="team2" 
                                                    onChange={this.onChange.bind(this, index)} 
                                                    autoComplete="off"
                                                    value={this.state.index} disabled={disabledData}
                                                    maxLength={2}/>
                                                </div>
                                            </td>
                                            <td className="team-logo-wrapper">
                                                <img src={teamData.partido.equipo2.logo} className="team-logo" alt={teamData.partido.equipo2.teamName2} />
                                                <p className="font-team">{teamData.partido.equipo2.nombre}</p>
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
    .team1 {
        text-align: end;
    }
    .team2 {
        text-align: start;
    }
    h4 {
        margin: 2rem 0rem 1rem;
    }
    input {
        width: 8vw;
        text-align: center;
        font-family: 'PT Sans', sans-serif;
        font-size: 5vw;
        border: 5px solid #F6F5F9;
        border-radius: 15px;
        outline: none;
    }
    input[type="text"]:disabled {
        background: #ffffff;
        border: none;
    }
    }
    .responsive-table {
        overflow-x: auto;
    }
    p {
        margin: 0px;
    }
`;


export default FinalPointTableMaker;