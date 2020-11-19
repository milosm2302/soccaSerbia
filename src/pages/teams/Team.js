import React from 'react';
import { useParams, Link } from 'react-router-dom'

const Team = ({teams}) => {
   let { name } = useParams()
   console.log(teams)
   
    return (
        <div>
            {teams.map(team=>{
                let players = team.players;
                if(team.name === name){
                    return (
                    <div>
                    <p>{team.name}</p>
                    <p>{team.description}</p>
                    {players.map(player=>
                       
                           ( <div>
                                <li> <Link to={`${team.name}/${player.id}`}> {player.name}</Link></li>
                            </div>)
                        
                        )}
                    </div>
                        )
                }
            }    
            )}
        </div>
    )
}
export default Team;
