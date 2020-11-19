import React from 'react';
import {useParams} from 'react-router-dom';


 const Player = ({players}) => {
     console.log(players)
     let { name } = useParams();
     let { id } = useParams()
     console.log()
    return (
        <div>
            {players.map(player=>{
                if(player.name === name){
                    let players = player.players;
                    console.log(players)
                    return(
                    players.map(player=>{
                        if(player.id === id){
                            let history = player.history;
                            let stats = player.stats;
                            return(
                                
                                <div>
                                    <p>{player.name}</p>
                                    <p>{player.position}</p>
                                    <span>Scored</span><p>{stats.goals}</p>
                                    <span>Assists</span><p>{stats.assists}</p>
                                
                                </div>
                            )
                        }
                    }))
                }
            }
            )
            }
                        
                       
             
        </div>
    )
}
export default Player
