import { useContext } from "react"

//Context
import { PlayersContext } from "../../context/PlayersContext"

//Components
import PlayerModal from "../PlayerModal";


const Modal = () => {

    const { currentPosition, 
            goleiros, zagueiros, laterais, meias, pontas, atacantes,
            setGoleiro, setZagueiroDireita, setZagueiroEsquerda, setLateralDireita, setLateralEsquerda,
            setMeiaDireita, setMeiaEsquerda, setMeiaCentral,
            setPontaDireita, setPontaEsquerda, setAtacante} = useContext(PlayersContext);

    return(
        <div className="modal fade" id="modal" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="ModalLabel">Escolha seu {currentPosition}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="container-fluid">
                            <div className="row">
                        
                                {currentPosition === 'goleiro' && goleiros.map(item => (
                                    <PlayerModal name={item.name} img={item.img} action={() => setGoleiro(item)} />
                                ))}

                                {currentPosition === 'zagueiro direita' && zagueiros.map(item => (
                                    <PlayerModal name={item.name} img={item.img} action={() => setZagueiroDireita(item)} />
                                ))}

                                {currentPosition === 'zagueiro esquerda' && zagueiros.map(item => (
                                    <PlayerModal name={item.name} img={item.img} action={() => setZagueiroEsquerda(item)} />
                                ))}

                                {currentPosition === 'lateral direita' && laterais.map(item => (
                                    <PlayerModal name={item.name} img={item.img} action={() => setLateralDireita(item)} />
                                ))}

                                {currentPosition === 'lateral esquerda' && laterais.map(item => (
                                    <PlayerModal name={item.name} img={item.img} action={() => setLateralEsquerda(item)} />
                                ))}

                                {currentPosition === 'meia direita' && meias.map(item => (
                                    <PlayerModal name={item.name} img={item.img} action={() => setMeiaDireita(item)} />
                                ))}

                                {currentPosition === 'meia esquerda' && meias.map(item => (
                                    <PlayerModal name={item.name} img={item.img} action={() => setMeiaEsquerda(item)} />
                                ))}

                                {currentPosition === 'meia central' && meias.map(item => (
                                    <PlayerModal name={item.name} img={item.img} action={() => setMeiaCentral(item)} />
                                ))}

                                {currentPosition === 'ponta direita' && pontas.map(item => (
                                    <PlayerModal name={item.name} img={item.img} action={() => setPontaDireita(item)} />
                                ))}

                                {currentPosition === 'ponta esquerda' && pontas.map(item => (
                                    <PlayerModal name={item.name} img={item.img} action={() => setPontaEsquerda(item)} />
                                ))}

                                {currentPosition === 'atacante' && atacantes.map(item => (
                                    <PlayerModal name={item.name} img={item.img} action={() => setAtacante(item)} />
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