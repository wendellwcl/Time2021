//Context
import { PlayersContext } from "../../context/PlayersContext";

//Css
import "./player.css";

//Components
import { Hexagon } from "../styled-components"

import { useContext } from "react";


const Player = ({ img, name, flag, action, position }) => {

    const positionData = position.replace("_", " ")

    const { setCurrentPosition } = useContext(PlayersContext);

    return(
        <div id={position} className="player">
            <Hexagon size={75}>
                <button type="button" onClick={(e) => setCurrentPosition(e.target.dataset.position)}
                        data-position={positionData}
                        data-bs-toggle="modal"
                        data-bs-target="#modal">
                </button>
                <div id="bg">
                    <img src={img} alt={name} />
                </div>
            </Hexagon>
            {flag && <img src={flag} alt="bandeira" className="flag" /> }   
            {name && <nobr className="name">{name}</nobr>}
            {name && <button className="resetButton" onClick={action}>X</button>}
        </div>
    )

}

export default Player