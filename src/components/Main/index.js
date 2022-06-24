//Components
import PlayersList from "../PlayersList"
import SoccerPitch from "../SoccerPitch"
import Modal from "../Modal"


const Main = () => {

    return(
        <main className="container">
            <div className="row">
                <SoccerPitch/>
                <PlayersList/>
                <Modal/>
            </div>
        </main>
    )

}

export default Main