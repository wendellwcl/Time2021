import { useContext, useState, useEffect } from "react";

//Css
import './modal.css';

//Context
import { PlayersContext } from "../../context/PlayersContext";

//Components
import PlayerModal from "../PlayerModal";


const Modal = () => {

    //Recuperar dados do context
    const { currentPosition, 
            goleiros, zagueiros, laterais, meias, pontas, atacantes,
            setGoleiro, setZagueiroDireito, setZagueiroEsquerdo, 
            setLateralDireito, setLateralEsquerdo,
            setMeiaDireita, setMeiaEsquerda, setMeiaCentral,
            setPontaDireita, setPontaEsquerda, setAtacante } = useContext(PlayersContext);

    //Controle do que deverá ser renderizado
    const [ renderObj, setRenderObj ] = useState();

    //Checar e setar as informações para renderização
    useEffect(() => {
        switch(currentPosition){
            case 'goleiro':
                setRenderObj({array: goleiros, function: setGoleiro});
                break;
            case 'zagueiro direito':
                setRenderObj({array: zagueiros, function: setZagueiroDireito});
                break;
            case 'zagueiro esquerdo':
                setRenderObj({array: zagueiros, function: setZagueiroEsquerdo});
                break;
            case 'lateral direito':
                setRenderObj({array: laterais, function: setLateralDireito});
                break;
            case 'lateral esquerdo':
                setRenderObj({array: laterais, function: setLateralEsquerdo});
                break;
            case 'meia direita':
                setRenderObj({array: meias, function: setMeiaDireita});
                break;
            case 'meia esquerda':
                setRenderObj({array: meias, function: setMeiaEsquerda});
                break;
            case 'meia central':
                setRenderObj({array: meias, function: setMeiaCentral});
                break;
            case 'ponta direita':
                setRenderObj({array: pontas, function: setPontaDireita});
                break;
            case 'ponta esquerda':
                setRenderObj({array: pontas, function: setPontaEsquerda});
                break;
            case 'atacante':
                setRenderObj({array: atacantes, function: setAtacante});
                break;
            default :
                break;
        };
    }, [currentPosition, goleiros, zagueiros, laterais, meias, pontas, atacantes,
        setGoleiro, setZagueiroDireito, setZagueiroEsquerdo, setLateralDireito, setLateralEsquerdo,
        setMeiaDireita, setMeiaEsquerda, setMeiaCentral, setPontaDireita, setPontaEsquerda, setAtacante]);


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

                                {renderObj && renderObj.array.map(item => (
                                    <PlayerModal player={item} handleClick={() => renderObj.function(item)} key={item.name}/>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Modal;