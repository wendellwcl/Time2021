import { useContext } from "react";

//Css
import "./player.css";

//Components
import { Hexagon } from "../styled-components"

//Context
import { PlayersContext } from "../../context/PlayersContext";


const Player = ({ player, reset, position }) => {

    const positionData = position.replace("_", " ")

    const { setCurrentPosition } = useContext(PlayersContext);

    return(
        <div id={position} className="player">
            <Hexagon size={70}>
                <button type="button" onClick={(e) => setCurrentPosition(e.target.dataset.position)}
                        data-position={positionData}
                        data-bs-toggle="modal"
                        data-bs-target="#modal">
                </button>
                <div id="bg">
                    <img src={player.img} alt={player.name} />
                </div>
            </Hexagon>
            {player.flag && <img src={player.flag} alt="bandeira" className="flag" /> }   
            {player.name && <nobr className="name">{player.name}</nobr>}
            {player.name && <button className="resetButton" onClick={reset}>X</button>}
        </div>
    )

}

export default Player