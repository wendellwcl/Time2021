//Components
import { Hexagon } from "../styled-components"


const PlayerModal = ({ name, img, action }) => {

    return(
        <div className="col-4 col-md-2 d-flex flex-column align-items-center">
            <Hexagon size={75}>
                <button onClick={action} 
                        data-bs-dismiss="modal" 
                        aria-label={`selecionar ${name}`}>
                </button>
                <div id="bg">
                    <img src={img} alt={name} />
                </div>
            </Hexagon>
            <nobr className="name">{name}</nobr>
        </div>
    )

}

export default PlayerModal