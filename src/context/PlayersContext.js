import { createContext, useState } from "react";

export const PlayersContext = createContext();

export const PlayersContextProvider = ({ children }) => {

    const [currentPosition, setCurrentPosition] = useState(null);

    return(
        <PlayersContext.Provider value={{currentPosition, setCurrentPosition}}>
            {children}
        </PlayersContext.Provider>
    )
    
}