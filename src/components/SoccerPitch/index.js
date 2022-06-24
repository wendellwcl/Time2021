import { useContext } from "react"

//Context
import { PlayersContext } from "../../context/PlayersContext"

//Css
import "./soccerPitch.css"

//Components
import Player from "../Player"



const SoccerPitch = () => {

    const { goleiro, zagueiroDireita, zagueiroEsquerda, lateralDireita, lateralEsquerda, 
            meiaDireita, meiaEsquerda, meiaCentral, 
            pontaDireita, pontaEsquerda, atacante } = useContext(PlayersContext);

    return(
        <div className="col-12 col-lg-6" id="soccerPitch-Container">
            <div id="soccerPitch">
                <Player img={goleiro} name="nome" position="goleiro"/>
                <Player img={zagueiroDireita} name="nome" position="zagueiro_direita"/>
                <Player img={zagueiroEsquerda} name="nome" position="zagueiro_esquerda"/>
                <Player img={lateralDireita} name="nome" position="lateral_direita"/>
                <Player img={lateralEsquerda} name="nome" position="lateral_esquerda"/>
                <Player img={meiaDireita} name="nome" position="meia_direita"/>
                <Player img={meiaEsquerda} name="nome" position="meia_esquerda"/>
                <Player img={meiaCentral} name="nome" position="meia_central"/>
                <Player img={pontaDireita} name="nome" position="ponta_direita"/>
                <Player img={pontaEsquerda} name="nome" position="ponta_esquerda"/>
                <Player img={atacante} name="nome" position="atacante"/>
            </div>
        </div>
    )

}

export default SoccerPitch