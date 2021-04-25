import React, { Component } from 'react';
import styled from 'styled-components';
import $ from 'jquery';


class TeamPointTableMaker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            teams: [
                {
                    idTeam: 1,
                    teamName1: 'Real Madrid',
                    team-logo1: 'https://www.logofootball.net/wp-content/uploads/Real-Madrid-CF-Logo.png',
                    teamName2: 'Barcelona',
                    team-logo2: 'https://www.logofootball.net/wp-content/uploads/FC-Barcelona-HD-Logo.png'
                },
                {
                    idTeam: 4,
                    teamName1: 'Real Madrid',
                    team-logo1: 'https://www.logofootball.net/wp-content/uploads/Real-Madrid-CF-Logo.png',
                    teamName2: 'Barcelona',
                    team-logo2: 'https://www.logofootball.net/wp-content/uploads/FC-Barcelona-HD-Logo.png'
                },
                {
                    idTeam: 2,
                    teamName1: 'Real Madrid',
                    team-logo1: 'https://www.logofootball.net/wp-content/uploads/Real-Madrid-CF-Logo.png',
                    teamName2: 'Juventus',
                    team-logo2: 'https://www.logofootball.net/wp-content/uploads/juventus-fc-logo.png'
                },
                {
                    idTeam: 5,
                    teamName1: 'Real Madrid',
                    team-logo1: 'https://www.logofootball.net/wp-content/uploads/Real-Madrid-CF-Logo.png',
                    teamName2: 'Milan',
                    team-logo2: 'https://www.logofootball.net/wp-content/uploads/AC-Milan-HD-Logo.png'
                }
            ]
        }
    }

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
        const { teams } = this.state;
        return (
            <Style>
                <div className="container">
                    <div className="row">
                        <div className="col-12 responsive-table">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th colSpan={4}>PRIMER TIEMPO</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {teams && teams.map((teamData, index) => (
                                        <tr key={index}>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <img src={teamData.team-logo1} className="team-logo" alt={teamData.teamName1}/>
                                                    <p>{teamData.teamName1}</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="custom-control custom-input">
                                                    <label>
                                                        <input type="checkbox" className="radio" value="1" name={index} />
                                                    </label>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <img src={teamData.team-logo2} className="team-logo" alt={teamData.teamName2}/>
                                                    <p>{teamData.teamName2}</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="custom-control custom-input">
                                                    <label>
                                                        <input type="checkbox" className="radio" value="1" name={index} />
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


export default TeamPointTableMaker;