//Components
import PlayersList from "../PlayersList"
import SoccerPitch from "../SoccerPitch"

import { useContext } from "react"
import { PlayersContext } from "../../context/PlayersContext"

const Main = () => {

    const { currentPosition } = useContext(PlayersContext)

    return(
        <main className="container">
            <div className="row">
                <SoccerPitch/>
                <PlayersList/>
            </div>

            {/*Modal*/}
            <div className="modal fade" id="modal" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="ModalLabel">Escolha o {currentPosition}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                    </div>
                </div>
            </div>

        </main>
    )

}

export default Main