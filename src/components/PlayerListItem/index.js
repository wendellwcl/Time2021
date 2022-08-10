import { useContext } from "react";

//Components
import { PlayerLi } from "../styled-components";

//Context
import { PlayersContext } from "../../context/PlayersContext";


const PlayerListItem = ({ data_abbr, data_position, name, flag, handleClick }) => {

    const { setCurrentPosition } = useContext(PlayersContext);

    return(
        <PlayerLi data-abbr={data_abbr}>
            <button className="btn100"
                onClick={(e) => setCurrentPosition(e.target.dataset.position)}
                data-position={data_position}
                data-bs-toggle="modal"
                data-bs-target="#modal">
            </button>
            <img src={flag} alt={name} />
            <span>{name}</span>
            {name && <button className="list-reset-button" onClick={handleClick}>X</button>}
        </PlayerLi>
    );

};

export default PlayerListItem;