//Css
import "./soccerPitch.css"

//Assets
import Default from '../../assets/Players/Default.png'

//Components
import Player from "../Player"

const SoccerPitch = () => {

    return(
        <div className="col-12 col-lg-6" id="soccerPitch-Container">
            <div id="soccerPitch">
                <Player img={Default} name="nome" position="gol"/>
                <Player img={Default} name="nome" position="zagD"/>
                <Player img={Default} name="nome" position="zagE"/>
                <Player img={Default} name="nome" position="latD"/>
                <Player img={Default} name="nome" position="latE"/>
                <Player img={Default} name="nome" position="mcD"/>
                <Player img={Default} name="nome" position="mcE"/>
                <Player img={Default} name="nome" position="mcM"/>
                <Player img={Default} name="nome" position="pD"/>
                <Player img={Default} name="nome" position="pE"/>
                <Player img={Default} name="nome" position="ata"/>
            </div>
        </div>
    )

}

export default SoccerPitch