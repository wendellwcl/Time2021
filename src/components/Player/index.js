import "./player.css";

import { Hexagon } from "../styled-components"

const Player = ({ img, name, position }) => {

    return(
        <div id={position} className="player">
            <Hexagon size={75}>
                <div id="bg">
                    <img src={img} alt="" />
                </div>
            </Hexagon>
            <nobr id="name">{name}</nobr>
        </div>
    )

}

export default Player