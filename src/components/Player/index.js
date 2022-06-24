//Context
import { PlayersContext } from "../../context/PlayersContext";

//Css
import "./player.css";

//Components
import { Hexagon } from "../styled-components"



import { useContext } from "react";

const Player = ({ img, name, position }) => {

    const positionData = position.replace("_", " ")

    const { setCurrentPosition } = useContext(PlayersContext);

    return(
        <div id={position} className="player">
            <button type="button" onClick={(e) => setCurrentPosition(e.target.dataset.position)}
                    data-position={positionData}
                    data-bs-toggle="modal"
                    data-bs-target="#modal">
            </button>
            <Hexagon size={75}>
                <div id="bg">
                    <img src={img} alt={name} />
                </div>
            </Hexagon>
            <nobr id="name">{name}</nobr>
        </div>
    )

}

export default Player