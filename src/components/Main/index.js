import PlayersList from "../PlayersList"
import SoccerPitch from "../SoccerPitch"

const Main = () => {

    return(
        <main className="container">
            <div className="row">
                <SoccerPitch/>
                <PlayersList/>
            </div>
        </main>
    )

}

export default Main