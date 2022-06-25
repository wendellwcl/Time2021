import { useContext } from "react"

//Context
import { PlayersContext } from "../../context/PlayersContext"

//Css
import "./soccerPitch.css"

//Components
import Player from "../Player"


const SoccerPitch = () => {

    const { playerNull, 
            goleiro, setGoleiro,
            zagueiroDireito, setZagueiroDireito, 
            zagueiroEsquerdo, setZagueiroEsquerdo, 
            lateralDireito, setLateralDireito,
            lateralEsquerdo, setLateralEsquerdo,
            meiaDireita, setMeiaDireita,
            meiaEsquerda, setMeiaEsquerda,
            meiaCentral, setMeiaCentral,
            pontaDireita, setPontaDireita,
            pontaEsquerda, setPontaEsquerda,
            atacante, setAtacante } = useContext(PlayersContext);

    return(
        <div className="col-12 col-lg-6" id="soccerPitch-Container">
            <div id="soccerPitch">
                <Player img={goleiro.img} name={goleiro.name} flag={goleiro.flag} 
                        action={() => setGoleiro(playerNull)} position="goleiro"/>
                <Player img={zagueiroDireito.img} name={zagueiroDireito.name} flag={zagueiroDireito.flag} 
                        action={() => setZagueiroDireito(playerNull)} position="zagueiro_direito"/>
                <Player img={zagueiroEsquerdo.img} name={zagueiroEsquerdo.name} flag={zagueiroEsquerdo.flag} 
                        action={() => setZagueiroEsquerdo(playerNull)} position="zagueiro_esquerdo"/>
                <Player img={lateralDireito.img} name={lateralDireito.name} flag={lateralDireito.flag} 
                        action={() => setLateralDireito(playerNull)} position="lateral_direito"/>
                <Player img={lateralEsquerdo.img} name={lateralEsquerdo.name} flag={lateralEsquerdo.flag} 
                        action={() => setLateralEsquerdo(playerNull)} position="lateral_esquerdo"/>
                <Player img={meiaDireita.img} name={meiaDireita.name} flag={meiaDireita.flag} 
                        action={() => setMeiaDireita(playerNull)} position="meia_direita"/>
                <Player img={meiaEsquerda.img} name={meiaEsquerda.name} flag={meiaEsquerda.flag} 
                        action={() => setMeiaEsquerda(playerNull)} position="meia_esquerda"/>
                <Player img={meiaCentral.img} name={meiaCentral.name} flag={meiaCentral.flag} 
                        action={() => setMeiaCentral(playerNull)} position="meia_central"/>
                <Player img={pontaDireita.img} name={pontaDireita.name} flag={pontaDireita.flag} 
                        action={() => setPontaDireita(playerNull)} position="ponta_direita"/>
                <Player img={pontaEsquerda.img} name={pontaEsquerda.name} flag={pontaEsquerda.flag} 
                        action={() => setPontaEsquerda(playerNull)} position="ponta_esquerda"/>
                <Player img={atacante.img} name={atacante.name} flag={atacante.flag} 
                        action={() => setAtacante(playerNull)} position="atacante"/>
            </div>
        </div>
    )

}

export default SoccerPitch