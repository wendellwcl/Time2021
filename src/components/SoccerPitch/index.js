import { useContext } from "react";

//Context
import { PlayersContext } from "../../context/PlayersContext";

//Css
import "./soccerPitch.css";

//Components
import Player from "../Player";


const SoccerPitch = () => {

    //Recuperando dados do context
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
        <div className="col-12 col-lg-6" id="soccerPitch-container">
            <div id="soccerPitch">
                <Player player={goleiro} reset={() => setGoleiro(playerNull)} position="goleiro"/>
                <Player player={zagueiroDireito} reset={() => setZagueiroDireito(playerNull)} position="zagueiro_direito"/>
                <Player player={zagueiroEsquerdo} reset={() => setZagueiroEsquerdo(playerNull)} position="zagueiro_esquerdo"/>
                <Player player={lateralDireito} reset={() => setLateralDireito(playerNull)} position="lateral_direito"/>
                <Player player={lateralEsquerdo} reset={() => setLateralEsquerdo(playerNull)} position="lateral_esquerdo"/>
                <Player player={meiaDireita} reset={() => setMeiaDireita(playerNull)} position="meia_direita"/>
                <Player player={meiaEsquerda} reset={() => setMeiaEsquerda(playerNull)} position="meia_esquerda"/>
                <Player player={meiaCentral} reset={() => setMeiaCentral(playerNull)} position="meia_central"/>
                <Player player={pontaDireita} reset={() => setPontaDireita(playerNull)} position="ponta_direita"/>
                <Player player={pontaEsquerda} reset={() => setPontaEsquerda(playerNull)} position="ponta_esquerda"/>
                <Player player={atacante} reset={() => setAtacante(playerNull)} position="atacante"/>
            </div>
        </div>
    );

};

export default SoccerPitch;