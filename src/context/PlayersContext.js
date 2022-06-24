import { createContext, useState } from "react";

//Assets
import Default from "../assets/Players/Default.png";


export const PlayersContext = createContext();

export const PlayersContextProvider = ({ children }) => {

    //String Posição Atual
    const [currentPosition, setCurrentPosition] = useState(null);

    //Jogadores por posições
    const [goleiro, setGoleiro] = useState(Default)
    const [zagueiroDireita, setZagueiroDireita] = useState(Default)
    const [zagueiroEsquerda, setZagueiroEsquerda] = useState(Default)
    const [lateralDireita, setLateralDireita] = useState(Default)
    const [lateralEsquerda, setLateralEsquerda] = useState(Default)
    const [meiaDireita, setMeiaDireita] = useState(Default)
    const [meiaEsquerda, setMeiaEsquerda] = useState(Default)
    const [meiaCentral, setMeiaCentral] = useState(Default)
    const [pontaDireita, setPontaDireita] = useState(Default)
    const [pontaEsquerda, setPontaEsquerda] = useState(Default)
    const [atacante, setAtacante] = useState(Default)

    return(
        <PlayersContext.Provider value={{
            currentPosition, setCurrentPosition,
            goleiro, setGoleiro,
            zagueiroDireita, setZagueiroDireita,
            zagueiroEsquerda, setZagueiroEsquerda,
            lateralDireita, setLateralDireita,
            lateralEsquerda, setLateralEsquerda,
            meiaDireita, setMeiaDireita,
            meiaEsquerda, setMeiaEsquerda,
            meiaCentral, setMeiaCentral,
            pontaDireita, setPontaDireita, 
            pontaEsquerda, setPontaEsquerda,
            atacante, setAtacante
        }}>
            {children}
        </PlayersContext.Provider>
    )
    
}