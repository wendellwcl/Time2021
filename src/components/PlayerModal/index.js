import { useContext, useEffect, useState } from "react";

//Components
import { Hexagon } from "../styled-components";

//Context
import { PlayersContext } from "../../context/PlayersContext";


const PlayerModal = ({ player, action }) => {

    //Recuperar dados do context
    const { zagueiroDireito, zagueiroEsquerdo,
        lateralDireito, lateralEsquerdo,
        meiaDireita, meiaEsquerda, meiaCentral,
        pontaDireita, pontaEsquerda } = useContext(PlayersContext)
        
    //Disable = true quando um jogador ja foi selecionado (adiciona um className para feedback visual, impossibilita que um jogador seja selecionado duas vezes)
    const [disable, setDisable] = useState(false)

    //Checar jogadores já selecionados, caso sim, setDisable = true
    useEffect(()=>{
        function checkDuplicate(){
            if( player.name === zagueiroDireito.name ||
                player.name === zagueiroEsquerdo.name ||
                player.name === lateralDireito.name ||
                player.name === lateralEsquerdo.name ||
                player.name === meiaDireita.name ||
                player.name === meiaEsquerda.name ||
                player.name === meiaCentral.name ||
                player.name === pontaDireita.name ||
                player.name === pontaEsquerda.name
            ){
                setDisable(true);
            };
        };
        checkDuplicate();
    });

    return(
        <div className={`col-4 col-lg-2 d-flex flex-column align-items-center playerModal ${disable && "disable"}`}>
            <Hexagon size={90}>
                {!disable && 
                    <button onClick={action} 
                        data-bs-dismiss="modal" 
                        aria-label={`selecionar ${player.name}`}>
                    </button>
                }
                <div id="bg">
                    <img src={player.img} alt={player.name} />
                </div>
            </Hexagon>
            <nobr className="name mt-0">{player.name}</nobr>
        </div>
    );

};

export default PlayerModal;