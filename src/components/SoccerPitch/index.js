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
                <Player img={Default} name="nome" position="goleiro"/>
                <Player img={Default} name="nome" position="zagueiro_direita"/>
                <Player img={Default} name="nome" position="zagueiro_esquerda"/>
                <Player img={Default} name="nome" position="lateral_direita"/>
                <Player img={Default} name="nome" position="lateral_esquerda"/>
                <Player img={Default} name="nome" position="meia_direita"/>
                <Player img={Default} name="nome" position="meia_esquerda"/>
                <Player img={Default} name="nome" position="meia_central"/>
                <Player img={Default} name="nome" position="ponta_direita"/>
                <Player img={Default} name="nome" position="ponta_esquerda"/>
                <Player img={Default} name="nome" position="atacante"/>
            </div>
        </div>
    )

}

export default SoccerPitch