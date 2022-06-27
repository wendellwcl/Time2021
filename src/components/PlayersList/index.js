import { useContext } from "react"

//Component
import { PlayerLi } from "../styled-components"

//Context
import { PlayersContext }from '../../context/PlayersContext'


const PlayersList = () => {

    const { setCurrentPosition ,
            goleiro, zagueiroDireito, zagueiroEsquerdo, lateralDireito, lateralEsquerdo,
            meiaDireita, meiaEsquerda, meiaCentral,
            pontaDireita, pontaEsquerda, atacante } = useContext(PlayersContext)

    return(
        <div className="d-none d-lg-flex flex-column justify-content-center col-6">
            <ul>
                <PlayerLi data-abbr='GOL'>
                    <button
                        onClick={(e) => setCurrentPosition(e.target.dataset.position)}
                        data-position='goleiro'
                        data-bs-toggle="modal"
                        data-bs-target="#modal">
                    </button>
                    <img src={goleiro.flag} alt={goleiro.name} />
                    <span>{goleiro.name}</span>
                </PlayerLi>
                <PlayerLi data-abbr='ZAG'>
                    <button
                        onClick={(e) => setCurrentPosition(e.target.dataset.position)}
                        data-position='zagueiro direito'
                        data-bs-toggle="modal"
                        data-bs-target="#modal">
                    </button>
                    <img src={zagueiroDireito.flag} alt={zagueiroDireito.name} />
                    <span>{zagueiroDireito.name}</span>
                </PlayerLi>
                <PlayerLi data-abbr='ZAG'>
                    <button
                        onClick={(e) => setCurrentPosition(e.target.dataset.position)}
                        data-position='zagueiro esquerdo'
                        data-bs-toggle="modal"
                        data-bs-target="#modal">
                    </button>
                    <img src={zagueiroEsquerdo.flag} alt={zagueiroEsquerdo.name} />
                    <span>{zagueiroEsquerdo.name}</span>
                </PlayerLi>
                <PlayerLi data-abbr='LTD'>
                    <button
                        onClick={(e) => setCurrentPosition(e.target.dataset.position)}
                        data-position='lateral direito'
                        data-bs-toggle="modal"
                        data-bs-target="#modal">
                    </button>
                    <img src={lateralDireito.flag} alt={lateralDireito.name} />
                    <span>{lateralDireito.name}</span>
                </PlayerLi>
                <PlayerLi data-abbr='LTE'>
                    <button
                        onClick={(e) => setCurrentPosition(e.target.dataset.position)}
                        data-position='lateral esquerdo'
                        data-bs-toggle="modal"
                        data-bs-target="#modal">
                    </button>
                    <img src={lateralEsquerdo.flag} alt={lateralEsquerdo.name} />
                    <span>{lateralEsquerdo.name}</span>
                </PlayerLi>
                <PlayerLi data-abbr='MCD'>
                    <button
                        onClick={(e) => setCurrentPosition(e.target.dataset.position)}
                        data-position='meia direita'
                        data-bs-toggle="modal"
                        data-bs-target="#modal">
                    </button>
                    <img src={meiaDireita.flag} alt={meiaDireita.name} />
                    <span>{meiaDireita.name}</span>
                </PlayerLi>
                <PlayerLi data-abbr='MCE'>
                    <button
                        onClick={(e) => setCurrentPosition(e.target.dataset.position)}
                        data-position='meia esquerda'
                        data-bs-toggle="modal"
                        data-bs-target="#modal">
                    </button>
                    <img src={meiaEsquerda.flag} alt={meiaEsquerda.name} />
                    <span>{meiaEsquerda.name}</span>
                </PlayerLi>
                <PlayerLi data-abbr='MEI'>
                    <button
                        onClick={(e) => setCurrentPosition(e.target.dataset.position)}
                        data-position='meia central'
                        data-bs-toggle="modal"
                        data-bs-target="#modal">
                    </button>
                    <img src={meiaCentral.flag} alt={meiaCentral.name} />
                    <span>{meiaCentral.name}</span>
                </PlayerLi>
                <PlayerLi data-abbr='PTD'>
                    <button
                        onClick={(e) => setCurrentPosition(e.target.dataset.position)}
                        data-position='ponta direita'
                        data-bs-toggle="modal"
                        data-bs-target="#modal">
                    </button>
                    <img src={pontaDireita.flag} alt={pontaDireita.name} />
                    <span>{pontaDireita.name}</span>
                </PlayerLi>
                <PlayerLi data-abbr='PTE'>
                    <button
                        onClick={(e) => setCurrentPosition(e.target.dataset.position)}
                        data-position='ponta esquerda'
                        data-bs-toggle="modal"
                        data-bs-target="#modal">
                    </button>
                    <img src={pontaEsquerda.flag} alt={pontaEsquerda.name} />
                    <span>{pontaEsquerda.name}</span>
                </PlayerLi>
                <PlayerLi data-abbr='ATA'>
                    <button
                        onClick={(e) => setCurrentPosition(e.target.dataset.position)}
                        data-position='atacante'
                        data-bs-toggle="modal"
                        data-bs-target="#modal">
                    </button>
                    <img src={atacante.flag} alt={atacante.name} />
                    <span>{atacante.name}</span>
                </PlayerLi>
            </ul>
        </div>
    )

}

export default PlayersList