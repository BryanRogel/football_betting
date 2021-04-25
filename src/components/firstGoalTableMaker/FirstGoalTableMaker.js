import React, { Component } from 'react';
import styled from 'styled-components';
import $ from 'jquery';


class FirstGoalTableMaker extends Component {

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
                                        <th colSpan={6}>MÁS TIROS DE ESQUINA</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dataTeam && dataTeam.data.map((teamData, index) => (
                                        <tr key={index} className="d-flex justify-content-center align-items-center">
                                            <td className="team-logo-wrapper">
                                                <input type="checkbox" 
                                                    defaultChecked={ teamData.seleccion && teamData.seleccion.toString() === teamData.partido.equipo1.id.toString() } 
                                                    className="radio" name={teamData.partido.id} value={teamData.partido.equipo1.id} 
                                                    onClick={this.handleChange} disabled={disabledData}
                                                    id={teamData.partido.equipo1.id}/>
                                                <label htmlFor={teamData.partido.equipo1.id}>
                                                    <img src={teamData.partido.equipo1.logo} className="team-logo" alt={teamData.partido.equipo1.id} />
                                                    <p className="font-team">{teamData.partido.equipo1.nombre}</p>
                                                </label>
                                            </td>
                                            <td className="team-logo-wrapper">
                                            <input type="checkbox" defaultChecked={ teamData.seleccion && teamData.seleccion.toString() === teamData.partido.equipo2.id.toString() }
                                                className="radio" name={teamData.partido.id} value={teamData.partido.equipo2.id} 
                                                onClick={this.handleChange} disabled={disabledData}
                                                id={teamData.partido.equipo2.id}/>
                                                <label htmlFor={teamData.partido.equipo2.id}>
                                                    <img src={teamData.partido.equipo2.logo} className="team-logo" alt={teamData.partido.equipo2.id} />
                                                    <p className="font-team">{teamData.partido.equipo2.nombre}</p>
                                                </label>
                                            </td>
                                            <td className="team-logo-wrapper">
                                            <input type="checkbox" defaultChecked={teamData.seleccion === "Iguales"}
                                                className="radio" name={teamData.partido.id} value="Iguales" 
                                                onClick={this.handleChange} disabled={disabledData}
                                                id={index+1000}/>
                                                <label htmlFor={index+1000}>
                                                    <p className="equals font-team">Iguales</p>
                                                </label>
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
input[type="checkbox"] {
    display: none;
}
label {
    padding: 10px 0;
    display: block;
    position: relative;
    margin: 10px;
    cursor: pointer;
    height: 100%;
}
label:before {
    background-color: black;
    color: black;
    content: " ";
    display: block;
    border-radius: 50%;
    border: 1px solid grey;
    position: absolute;
    top: -5px;
    left: -5px;
    width: 25px;
    height: 25px;
    text-align: center;
    line-height: 28px;
    transition-duration: 0.4s;
    transform: scale(0);
}

label img {
    transition-duration: 0.2s;
    transform-origin: 50% 50%;
}

input[type="checkbox"]:checked + label {
    background-color: #6149AF;
    color: #ffffff;
    border-radius: 2vw;
}

/* input[type="checkbox"]:checked + label:before {
  content: "✓";
  background-color: grey;
  transform: scale(1);
} */

input[type="checkbox"]:checked + label img {
  transform: scale(0.9);
  /* box-shadow: 0 0 5px #333; */
  z-index: -1;
}
.equals {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 9vw;
}
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
    width: 80px;
    text-align: center;
    font-family: 'PT Sans', sans-serif;
    font-size: 5rem;
}
input[type="checkbox"]:disabled {
    background: #ffffff;
    border: none;
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


export default FirstGoalTableMaker;