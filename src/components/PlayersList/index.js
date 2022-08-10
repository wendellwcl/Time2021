import { useContext } from "react";

//Components
import PlayerListItem from "../PlayerListItem";

//Context
import { PlayersContext }from '../../context/PlayersContext';


const PlayersList = () => {

    //Recuperar dados do context
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
        <div className="d-none d-lg-flex flex-column justify-content-center col-6">
            <ul>

                <PlayerListItem data_abbr='GOL' data_position='goleiro' 
                                name={goleiro.name} flag={goleiro.flag} handleClick={() => setGoleiro(playerNull)} />

                <PlayerListItem data_abbr='ZAG' data_position='zagueiro direito' 
                                name={zagueiroDireito.name} flag={zagueiroDireito.flag} handleClick={() => setZagueiroDireito(playerNull)} />

                <PlayerListItem data_abbr='ZAG' data_position='zagueiro esquerdo' 
                                name={zagueiroEsquerdo.name} flag={zagueiroEsquerdo.flag} handleClick={() => setZagueiroEsquerdo(playerNull)} />

                <PlayerListItem data_abbr='LTD' data_position='lateral direito' 
                                name={lateralDireito.name} flag={lateralDireito.flag} handleClick={() => setLateralDireito(playerNull)} />

                <PlayerListItem data_abbr='LTE' data_position='lateral esquerdo' 
                                name={lateralEsquerdo.name} flag={lateralEsquerdo.flag} handleClick={() => setLateralEsquerdo(playerNull)} />

                <PlayerListItem data_abbr='MCD' data_position='meia direita' 
                                name={meiaDireita.name} flag={meiaDireita.flag} handleClick={() => setMeiaDireita(playerNull)} />

                <PlayerListItem data_abbr='MCE' data_position='meia esquerda' 
                                name={meiaEsquerda.name} flag={meiaEsquerda.flag} handleClick={() => setMeiaEsquerda(playerNull)} />

                <PlayerListItem data_abbr='MEI' data_position='meia central' 
                                name={meiaCentral.name} flag={meiaCentral.flag} handleClick={() => setMeiaCentral(playerNull)} />

                <PlayerListItem data_abbr='PTD' data_position='ponta direita' 
                                name={pontaDireita.name} flag={pontaDireita.flag} handleClick={() => setPontaDireita(playerNull)} />

                <PlayerListItem data_abbr='PTE' data_position='ponta esquerda' 
                                name={pontaEsquerda.name} flag={pontaEsquerda.flag} handleClick={() => setPontaEsquerda(playerNull)} />

                <PlayerListItem data_abbr='ATA' data_position='atacante' 
                                name={atacante.name} flag={atacante.flag} handleClick={() => setAtacante(playerNull)} />
                
            </ul>
        </div>
    );

};

export default PlayersList;