import React from 'react';
import { Link } from 'react-router-dom'

const Standings = ({teams}) => {
    console.log(teams)
    return (
       
        <div>
            {teams.map(team=>(
                <li key={team.id}><Link to={`standings/${team.name}`}>{team.name}</Link></li>
            ))}
        </div>
    )
}
export default Standings;
