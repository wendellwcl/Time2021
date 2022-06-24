import { useContext } from "react"

//Context
import { PlayersContext } from "../../context/PlayersContext"

//Components
import { Hexagon } from "../styled-components";


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
                                    <div key={item.name} className="col-4 col-md-2 d-flex flex-column align-items-center">
                                        <Hexagon size={75}>
                                            <button onClick={() => setGoleiro(item)} 
                                                    data-bs-dismiss="modal" 
                                                    aria-label={`selecionar ${item.name}`}>
                                            </button>
                                            <div id="bg">
                                                <img src={item.img} alt={item.name} />
                                            </div>
                                        </Hexagon>
                                        <nobr className="name">{item.name}</nobr>
                                    </div>
                                ))}

                                {currentPosition === 'zagueiro direita' && zagueiros.map(item => (
                                    <div key={item.name} className="col-4 col-md-2 d-flex flex-column align-items-center">
                                        <Hexagon size={75}>
                                            <button onClick={() => setZagueiroDireita(item)} 
                                                    data-bs-dismiss="modal" 
                                                    aria-label={`selecionar ${item.name}`}>
                                            </button>
                                            <div id="bg">
                                                <img src={item.img} alt={item.name} />
                                            </div>
                                        </Hexagon>
                                        <nobr className="name">{item.name}</nobr>
                                    </div>
                                ))}

                                {currentPosition === 'zagueiro esquerda' && zagueiros.map(item => (
                                    <div key={item.name} className="col-4 col-md-2 d-flex flex-column align-items-center">
                                        <Hexagon size={75}>
                                            <button onClick={() => setZagueiroEsquerda(item)} 
                                                    data-bs-dismiss="modal" 
                                                    aria-label={`selecionar ${item.name}`}>
                                            </button>
                                            <div id="bg">
                                                <img src={item.img} alt={item.name} />
                                            </div>
                                        </Hexagon>
                                        <nobr className="name">{item.name}</nobr>
                                    </div>
                                ))}

                                {currentPosition === 'lateral direita' && laterais.map(item => (
                                    <div key={item.name} className="col-4 col-md-2 d-flex flex-column align-items-center">
                                        <Hexagon size={75}>
                                            <button onClick={() => setLateralDireita(item)} 
                                                    data-bs-dismiss="modal" 
                                                    aria-label={`selecionar ${item.name}`}>
                                            </button>
                                            <div id="bg">
                                                <img src={item.img} alt={item.name} />
                                            </div>
                                        </Hexagon>
                                        <nobr className="name">{item.name}</nobr>
                                    </div>
                                ))}

                                {currentPosition === 'lateral esquerda' && laterais.map(item => (
                                    <div key={item.name} className="col-4 col-md-2 d-flex flex-column align-items-center">
                                        <Hexagon size={75}>
                                            <button onClick={() => setLateralEsquerda(item)} 
                                                    data-bs-dismiss="modal" 
                                                    aria-label={`selecionar ${item.name}`}>
                                            </button>
                                            <div id="bg">
                                                <img src={item.img} alt={item.name} />
                                            </div>
                                        </Hexagon>
                                        <nobr className="name">{item.name}</nobr>
                                    </div>
                                ))}

                                {currentPosition === 'meia direita' && meias.map(item => (
                                    <div key={item.name} className="col-4 col-md-2 d-flex flex-column align-items-center">
                                        <Hexagon size={75}>
                                            <button onClick={() => setMeiaDireita(item)} 
                                                    data-bs-dismiss="modal" 
                                                    aria-label={`selecionar ${item.name}`}>
                                            </button>
                                            <div id="bg">
                                                <img src={item.img} alt={item.name} />
                                            </div>
                                        </Hexagon>
                                        <nobr className="name">{item.name}</nobr>
                                    </div>
                                ))}

                                {currentPosition === 'meia esquerda' && meias.map(item => (
                                    <div key={item.name} className="col-4 col-md-2 d-flex flex-column align-items-center">
                                        <Hexagon size={75}>
                                            <button onClick={() => setMeiaEsquerda(item)} 
                                                    data-bs-dismiss="modal" 
                                                    aria-label={`selecionar ${item.name}`}>
                                            </button>
                                            <div id="bg">
                                                <img src={item.img} alt={item.name} />
                                            </div>
                                        </Hexagon>
                                        <nobr className="name">{item.name}</nobr>
                                    </div>
                                ))}

                                {currentPosition === 'meia central' && meias.map(item => (
                                    <div key={item.name} className="col-4 col-md-2 d-flex flex-column align-items-center">
                                        <Hexagon size={75}>
                                            <button onClick={() => setMeiaCentral(item)} 
                                                    data-bs-dismiss="modal" 
                                                    aria-label={`selecionar ${item.name}`}>
                                            </button>
                                            <div id="bg">
                                                <img src={item.img} alt={item.name} />
                                            </div>
                                        </Hexagon>
                                        <nobr className="name">{item.name}</nobr>
                                    </div>
                                ))}

                                {currentPosition === 'ponta direita' && pontas.map(item => (
                                    <div key={item.name} className="col-4 col-md-2 d-flex flex-column align-items-center">
                                        <Hexagon size={75}>
                                            <button onClick={() => setPontaDireita(item)} 
                                                    data-bs-dismiss="modal" 
                                                    aria-label={`selecionar ${item.name}`}>
                                            </button>
                                            <div id="bg">
                                                <img src={item.img} alt={item.name} />
                                            </div>
                                        </Hexagon>
                                        <nobr className="name">{item.name}</nobr>
                                    </div>
                                ))}

                                {currentPosition === 'ponta esquerda' && pontas.map(item => (
                                    <div key={item.name} className="col-4 col-md-2 d-flex flex-column align-items-center">
                                        <Hexagon size={75}>
                                            <button onClick={() => setPontaEsquerda(item)} 
                                                    data-bs-dismiss="modal" 
                                                    aria-label={`selecionar ${item.name}`}>
                                            </button>
                                            <div id="bg">
                                                <img src={item.img} alt={item.name} />
                                            </div>
                                        </Hexagon>
                                        <nobr className="name">{item.name}</nobr>
                                    </div>
                                ))}

                                {currentPosition === 'atacante' && atacantes.map(item => (
                                    <div key={item.name} className="col-4 col-md-2 d-flex flex-column align-items-center">
                                        <Hexagon size={75}>
                                            <button onClick={() => setAtacante(item)} 
                                                    data-bs-dismiss="modal" 
                                                    aria-label={`selecionar ${item.name}`}>
                                            </button>
                                            <div id="bg">
                                                <img src={item.img} alt={item.name} />
                                            </div>
                                        </Hexagon>
                                        <nobr className="name">{item.name}</nobr>
                                    </div>
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