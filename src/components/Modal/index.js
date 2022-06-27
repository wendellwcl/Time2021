import { useContext } from "react"

//Css
import './modal.css'

//Context
import { PlayersContext } from "../../context/PlayersContext"

//Components
import PlayerModal from "../PlayerModal";


const Modal = () => {

    const { currentPosition, 
            goleiros, zagueiros, laterais, meias, pontas, atacantes,
            setGoleiro, setZagueiroDireito, setZagueiroEsquerdo, 
            setLateralDireito, setLateralEsquerdo,
            setMeiaDireita, setMeiaEsquerda, setMeiaCentral,
            setPontaDireita, setPontaEsquerda, setAtacante } = useContext(PlayersContext);

    return(
        <div className="modal fade" id="modal" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="ModalLabel">Escolha seu <strong>{currentPosition}</strong></h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="container-fluid g-0">
                            <div className="row">

                                {currentPosition === 'goleiro' && goleiros.map(item => (
                                    <PlayerModal player={item} action={() => setGoleiro(item)} key={item.name} />
                                ))}

                                {currentPosition === 'zagueiro direito' && zagueiros.map((item) => (
                                    (<PlayerModal player={item} action={() => setZagueiroDireito(item)} key={item.name} />)
                                ))}

                                {currentPosition === 'zagueiro esquerdo' && zagueiros.map(item => (
                                    (<PlayerModal player={item} action={() => setZagueiroEsquerdo(item)} key={item.name} />)
                                ))}

                                {currentPosition === 'lateral direito' && laterais.map(item => (
                                    (<PlayerModal player={item} action={() => setLateralDireito(item)} key={item.name} />)
                                ))}

                                {currentPosition === 'lateral esquerdo' && laterais.map(item => (
                                    (<PlayerModal player={item} action={() => setLateralEsquerdo(item)} key={item.name} />)
                                ))}

                                {currentPosition === 'meia direita' && meias.map(item => (
                                    (<PlayerModal player={item} action={() => setMeiaDireita(item)} key={item.name} />)
                                ))}

                                {currentPosition === 'meia esquerda' && meias.map(item => (
                                    (<PlayerModal player={item} action={() => setMeiaEsquerda(item)} key={item.name} />)
                                ))}

                                {currentPosition === 'meia central' && meias.map(item => (
                                    (<PlayerModal player={item} action={() => setMeiaCentral(item)} key={item.name} />)
                                ))}

                                {currentPosition === 'ponta direita' && pontas.map(item => (
                                    (<PlayerModal player={item} action={() => setPontaDireita(item)} key={item.name} />)
                                ))}

                                {currentPosition === 'ponta esquerda' && pontas.map(item => (
                                    (<PlayerModal player={item} action={() => setPontaEsquerda(item)} key={item.name} />)
                                ))}

                                {currentPosition === 'atacante' && atacantes.map(item => (
                                    <PlayerModal player={item} action={() => setAtacante(item)} key={item.name} />
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Modal