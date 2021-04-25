import React, { Component } from 'react';
import styled from 'styled-components';
import $ from 'jquery';


class CornerKickTableMaker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newValues: [],
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        $("input:checkbox").on('click', function () {
            var $box = $(this);
            if ($box.is(":checked")) {
                var group = "input:checkbox[name='" + $box.attr("name") + "']";
                $(group).prop("checked", false);
                $box.prop("checked", true);
                console.log('es true')
            } else {
                $box.prop("checked", false);
                console.log('es false')
            }
        });
    }

    handleChange({target}){
        const { nameTabla, getDataTable } = this.props;
        const { newValues } = this.state;

        console.log('state', target.checked)

        let data = "";
        let exist = false;

        if(newValues.length > 0){
            newValues && newValues.map((values, index) => {
                if (values.idGame === target.name){
                    exist = true;
                    data = newValues.splice(index, 1);
                    data = newValues.concat( { value: target.checked ? target.value : null, idGame: target.name }  )
                }
                return null;
            })
        } 
        if (!exist) {
            data = newValues.concat( { value: target.checked ? target.value : null, idGame: target.name }  )
            exist = false;
        }

        if (target.checked){
            target.removeAttribute('checked');
            target.parentNode.style.textDecoration = "";
        }

        getDataTable(data, nameTabla);
        this.setState({ newValues: data })
    }

    render() {
        const { dataTeam, disabledData } = this.props;
        return (
            <Style>
                <div className="container">
                    <div className="row">
                        <div className="col-12 responsive-table">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th colSpan={6}>EQUIPO CON MÁS SAQUES DE ESQUINA</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dataTeam && dataTeam.data.map((teamData, index) => (
                                        <tr key={index}>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <img src={teamData.partido.equipo1.logo} className="team-logo" alt={teamData.partido.equipo1.id} />
                                                    <p>{teamData.partido.equipo1.nombre}</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="custom-control custom-input">
                                                    <label>
                                                        <input type="checkbox" defaultChecked={ teamData.seleccion && teamData.seleccion.toString() === teamData.partido.equipo1.id.toString() } className="radio" name={teamData.partido.id} value={teamData.partido.equipo1.id} onClick={this.handleChange} disabled={disabledData}/>
                                                    </label>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <img src={teamData.partido.equipo2.logo} className="team-logo" alt={teamData.partido.equipo2.id} />
                                                    <p>{teamData.partido.equipo2.nombre}</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="custom-control custom-input">
                                                    <label>
                                                        <input type="checkbox" defaultChecked={ teamData.seleccion && teamData.seleccion.toString() === teamData.partido.equipo2.id.toString() } className="radio" name={teamData.partido.id} value={teamData.partido.equipo2.id} onClick={this.handleChange} disabled={disabledData}/>
                                                    </label>
                                                </div>
                                            </td>
                                            <td>{teamData.otro}</td>
                                            <td>
                                                <div className="custom-control custom-input">
                                                    <label>
                                                        <input type="checkbox" defaultChecked={teamData.seleccion === teamData.otro } className="radio" name={teamData.partido.id} value={teamData.otro} onClick={this.handleChange} disabled={disabledData}/>
                                                    </label>
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
input {
        width: 50px;
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


export default CornerKickTableMaker;