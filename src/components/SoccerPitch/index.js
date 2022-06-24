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
                <Player img={goleiro.img} name={goleiro.name} position="goleiro"/>
                <Player img={zagueiroDireita.img} name={zagueiroDireita.name} position="zagueiro_direita"/>
                <Player img={zagueiroEsquerda.img} name={zagueiroEsquerda.name} position="zagueiro_esquerda"/>
                <Player img={lateralDireita.img} name={lateralDireita.name} position="lateral_direita"/>
                <Player img={lateralEsquerda.img} name={lateralEsquerda.name} position="lateral_esquerda"/>
                <Player img={meiaDireita.img} name={meiaDireita.name} position="meia_direita"/>
                <Player img={meiaEsquerda.img} name={meiaEsquerda.name} position="meia_esquerda"/>
                <Player img={meiaCentral.img} name={meiaCentral.name} position="meia_central"/>
                <Player img={pontaDireita.img} name={pontaDireita.name} position="ponta_direita"/>
                <Player img={pontaEsquerda.img} name={pontaEsquerda.name} position="ponta_esquerda"/>
                <Player img={atacante.img} name={atacante.name} position="atacante"/>
            </div>
        </div>
    )

}

export default SoccerPitch