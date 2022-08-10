import { useContext } from "react";

//Component
import { PlayerLi } from "../styled-components";

//Context
import { PlayersContext }from '../../context/PlayersContext';


const PlayersList = () => {

    //Recuperar dados do context
    const { setCurrentPosition , playerNull,
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

                <PlayerLi data-abbr='GOL'>
                    <button className="btn100"
                        onClick={(e) => setCurrentPosition(e.target.dataset.position)}
                        data-position='goleiro'
                        data-bs-toggle="modal"
                        data-bs-target="#modal">
                    </button>
                    <img src={goleiro.flag} alt={goleiro.name} />
                    <span>{goleiro.name}</span>
                    {goleiro.name && <button className="list-reset-button" onClick={() => {setGoleiro(playerNull)}}>X</button>}
                </PlayerLi>

                <PlayerLi data-abbr='ZAG'>
                    <button className="btn100"
                        onClick={(e) => setCurrentPosition(e.target.dataset.position)}
                        data-position='zagueiro direito'
                        data-bs-toggle="modal"
                        data-bs-target="#modal">
                    </button>
                    <img src={zagueiroDireito.flag} alt={zagueiroDireito.name} />
                    <span>{zagueiroDireito.name}</span>
                    {zagueiroDireito.name && <button className="list-reset-button" onClick={() => {setZagueiroDireito(playerNull)}}>X</button>}
                </PlayerLi>

                <PlayerLi data-abbr='ZAG'>
                    <button className="btn100"
                        onClick={(e) => setCurrentPosition(e.target.dataset.position)}
                        data-position='zagueiro esquerdo'
                        data-bs-toggle="modal"
                        data-bs-target="#modal">
                    </button>
                    <img src={zagueiroEsquerdo.flag} alt={zagueiroEsquerdo.name} />
                    <span>{zagueiroEsquerdo.name}</span>
                    {zagueiroEsquerdo.name && <button className="list-reset-button" onClick={() => {setZagueiroEsquerdo(playerNull)}}>X</button>}
                </PlayerLi>

                <PlayerLi data-abbr='LTD'>
                    <button className="btn100"
                        onClick={(e) => setCurrentPosition(e.target.dataset.position)}
                        data-position='lateral direito'
                        data-bs-toggle="modal"
                        data-bs-target="#modal">
                    </button>
                    <img src={lateralDireito.flag} alt={lateralDireito.name} />
                    <span>{lateralDireito.name}</span>
                    {lateralDireito.name && <button className="list-reset-button" onClick={() => {setLateralDireito(playerNull)}}>X</button>}
                </PlayerLi>

                <PlayerLi data-abbr='LTE'>
                    <button className="btn100"
                        onClick={(e) => setCurrentPosition(e.target.dataset.position)}
                        data-position='lateral esquerdo'
                        data-bs-toggle="modal"
                        data-bs-target="#modal">
                    </button>
                    <img src={lateralEsquerdo.flag} alt={lateralEsquerdo.name} />
                    <span>{lateralEsquerdo.name}</span>
                    {lateralEsquerdo.name && <button className="list-reset-button" onClick={() => {setLateralEsquerdo(playerNull)}}>X</button>}
                </PlayerLi>

                <PlayerLi data-abbr='MCD'>
                    <button className="btn100"
                        onClick={(e) => setCurrentPosition(e.target.dataset.position)}
                        data-position='meia direita'
                        data-bs-toggle="modal"
                        data-bs-target="#modal">
                    </button>
                    <img src={meiaDireita.flag} alt={meiaDireita.name} />
                    <span>{meiaDireita.name}</span>
                    {meiaDireita.name && <button className="list-reset-button" onClick={() => {setMeiaDireita(playerNull)}}>X</button>}
                </PlayerLi>

                <PlayerLi data-abbr='MCE'>
                    <button className="btn100"
                        onClick={(e) => setCurrentPosition(e.target.dataset.position)}
                        data-position='meia esquerda'
                        data-bs-toggle="modal"
                        data-bs-target="#modal">
                    </button>
                    <img src={meiaEsquerda.flag} alt={meiaEsquerda.name} />
                    <span>{meiaEsquerda.name}</span>
                    {meiaEsquerda.name && <button className="list-reset-button" onClick={() => {setMeiaEsquerda(playerNull)}}>X</button>}
                </PlayerLi>

                <PlayerLi data-abbr='MEI'>
                    <button className="btn100"
                        onClick={(e) => setCurrentPosition(e.target.dataset.position)}
                        data-position='meia central'
                        data-bs-toggle="modal"
                        data-bs-target="#modal">
                    </button>
                    <img src={meiaCentral.flag} alt={meiaCentral.name} />
                    <span>{meiaCentral.name}</span>
                    {meiaCentral.name && <button className="list-reset-button" onClick={() => {setMeiaCentral(playerNull)}}>X</button>}
                </PlayerLi>

                <PlayerLi data-abbr='PTD'>
                    <button className="btn100"
                        onClick={(e) => setCurrentPosition(e.target.dataset.position)}
                        data-position='ponta direita'
                        data-bs-toggle="modal"
                        data-bs-target="#modal">
                    </button>
                    <img src={pontaDireita.flag} alt={pontaDireita.name} />
                    <span>{pontaDireita.name}</span>
                    {pontaDireita.name && <button className="list-reset-button" onClick={() => {setPontaDireita(playerNull)}}>X</button>}
                </PlayerLi>

                <PlayerLi data-abbr='PTE'>
                    <button className="btn100"
                        onClick={(e) => setCurrentPosition(e.target.dataset.position)}
                        data-position='ponta esquerda'
                        data-bs-toggle="modal"
                        data-bs-target="#modal">
                    </button>
                    <img src={pontaEsquerda.flag} alt={pontaEsquerda.name} />
                    <span>{pontaEsquerda.name}</span>
                    {pontaEsquerda.name && <button className="list-reset-button" onClick={() => {setPontaEsquerda(playerNull)}}>X</button>}
                </PlayerLi>

                <PlayerLi data-abbr='ATA'>
                    <button className="btn100"
                        onClick={(e) => setCurrentPosition(e.target.dataset.position)}
                        data-position='atacante'
                        data-bs-toggle="modal"
                        data-bs-target="#modal">
                    </button>
                    <img src={atacante.flag} alt={atacante.name} />
                    <span>{atacante.name}</span>
                    {atacante.name && <button className="list-reset-button" onClick={() => {setAtacante(playerNull)}}>X</button>}
                </PlayerLi>
                
            </ul>
        </div>
    );

};

export default PlayersList;