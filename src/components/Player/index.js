import "./player.css";

import { Hexagon } from "../styled-components"

const Player = ({ img, name, position }) => {

    const positionData = position.replace("_", " ")

    return(
        <div id={position} className="player" data-position={positionData} data-bs-toggle="modal" data-bs-target="#modal">
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