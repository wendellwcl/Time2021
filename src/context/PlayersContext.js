import { createContext, useState } from "react";

//Assets
import DefaultImg from "../assets/Players/Default.png";
//--Jogadores
import AlabaImg from '../assets/Players/Alaba.png';
import AlexanderArnoldImg from '../assets/Players/AlexanderArnold.png';
import AlissonImg from '../assets/Players/Alisson.png';
import BenzemaImg from '../assets/Players/Benzema.png';
import CanceloImg from '../assets/Players/Cancelo.png';
import CourtoisImg from '../assets/Players/Courtois.png';
import CristianoRonaldoImg from '../assets/Players/CristianoRonaldo.png';
import DaviesImg from '../assets/Players/Davies.png';
import DeBruyneImg from '../assets/Players/DeBruyne.png';
import EdersonImg from '../assets/Players/Ederson.png';
import HaalandImg from '../assets/Players/Haaland.png';
import HernandezImg from '../assets/Players/Hernandez.png';
import KimmichImg from '../assets/Players/Kimmich.png';
import LewandowskiImg from '../assets/Players/Lewandowski.png';
import LuisDiazImg from '../assets/Players/LuisDiaz.png';
import MaignanImg from '../assets/Players/Maignan.png';
import MarquinhosImg from '../assets/Players/Marquinhos.png';
import MbappeImg from '../assets/Players/Mbappe.png';
import MendyImg from '../assets/Players/Mendy.png';
import MessiImg from '../assets/Players/Messi.png';
import MilinkovicSavicImg from '../assets/Players/MilinkovicSavic.png';
import MilitaoImg from '../assets/Players/Militao.png';
import ModricImg from '../assets/Players/Modric.png';
import NeuerImg from '../assets/Players/Neuer.png';
import PaquetaImg from '../assets/Players/Paqueta.png';
import RafaelLeaoImg from '../assets/Players/RafaelLeao.png';
import ReeceJamesImg from '../assets/Players/ReeceJames.png';
import RobertsonImg from '../assets/Players/Robertson.png';
import RubenDiasImg from '../assets/Players/RubenDias.png';
import RudigerImg from '../assets/Players/Rudiger.png';
import SalahImg from '../assets/Players/Salah.png';
import SonImg from '../assets/Players/Son.png';
import TchouameniImg from '../assets/Players/Tchouameni.png';
import VanDijkImg from '../assets/Players/VanDijk.png';
import ViniciusImg from '../assets/Players/Vinicius.png';
import VlahovicImg from '../assets/Players/Vlahovic.png';
//--Bandeiras
import Alemanha from '../assets/Flags/Alemanha.png';
import Argentina from '../assets/Flags/Argentina.png';
import Austria from '../assets/Flags/Austria.png';
import Belgica from '../assets/Flags/Belgica.png';
import Brasil from '../assets/Flags/Brasil.png';
import Canada from '../assets/Flags/Canada.png';
import Colombia from '../assets/Flags/Colombia.png';
import CoreiaDoSul from '../assets/Flags/CoreiaDoSul.png';
import Croacia from '../assets/Flags/Croacia.png';
import Egito from '../assets/Flags/Egito.png';
import Escocia from '../assets/Flags/Escocia.png';
import Franca from '../assets/Flags/Franca.png';
import Holanda from '../assets/Flags/Holanda.png';
import Inglaterra from '../assets/Flags/Inglaterra.png';
import Noruega from '../assets/Flags/Noruega.png';
import Polonia from '../assets/Flags/Polonia.png';
import Portugal from '../assets/Flags/Portugal.png';
import Senegal from '../assets/Flags/Senegal.png';
import Servia from '../assets/Flags/Servia.png';


export const PlayersContext = createContext();

export const PlayersContextProvider = ({ children }) => {

    class Player {
        constructor(name, img, flag){
            this.name = name;
            this.img = img;
            this.flag = flag;
        };
    };

    //Jogadores
    const playerNull = new Player(null, DefaultImg, null);
    const alaba = new Player ('Alaba', AlabaImg, Austria);
    const alexanderArnold = new Player ('Alexander-Arnold', AlexanderArnoldImg, Inglaterra);
    const alisson = new Player ('Alisson', AlissonImg, Brasil);
    const benzema = new Player ('Benzema', BenzemaImg, Franca);
    const cancelo = new Player ('Cancelo', CanceloImg, Portugal);
    const courtois = new Player ('Courtois', CourtoisImg, Belgica);
    const cristianoRonaldo = new Player ('Cristiano Ronaldo', CristianoRonaldoImg, Portugal);
    const davies = new Player ('Davies', DaviesImg, Canada);
    const deBruyne = new Player ('de Bruyne', DeBruyneImg, Belgica);
    const ederson = new Player ('Ederson', EdersonImg, Brasil);
    const haaland = new Player ('Haaland', HaalandImg, Noruega);
    const hernandez = new Player ('Hernández', HernandezImg, Franca);
    const kimmich = new Player ('Kimmich', KimmichImg, Alemanha);
    const lewandowski = new Player ('Lewandowski', LewandowskiImg, Polonia);
    const luisDiaz = new Player ('Luis Díaz', LuisDiazImg, Colombia);
    const maignan = new Player ('Maignan', MaignanImg, Franca);
    const marquinhos = new Player ('Marquinhos', MarquinhosImg, Brasil);
    const mbappe = new Player ('Mbappé', MbappeImg, Franca);
    const mendy = new Player ('Mendy', MendyImg, Senegal);
    const messi = new Player ('Messi', MessiImg, Argentina);
    const milinkovicSavic = new Player ('Milinković-Savić', MilinkovicSavicImg, Servia);
    const militao = new Player ('Militão', MilitaoImg, Brasil);
    const modric = new Player ('Modrić', ModricImg, Croacia);
    const neuer = new Player ('Neuer', NeuerImg, Alemanha);
    const paqueta = new Player ('Paquetá', PaquetaImg, Brasil);
    const rafaelLeao = new Player ('Rafael Leão', RafaelLeaoImg, Portugal);
    const reeceJames = new Player ('Reece James', ReeceJamesImg, Inglaterra);
    const robertson = new Player ('Robertson', RobertsonImg, Escocia);
    const rubenDias = new Player ('Rúben Dias', RubenDiasImg, Portugal);
    const rudiger = new Player ('Rüdiger', RudigerImg, Alemanha);
    const salah = new Player ('Salah', SalahImg, Egito);
    const son = new Player ('Son', SonImg, CoreiaDoSul);
    const tchouameni = new Player ('Tchouaméni', TchouameniImg, Franca);
    const vanDijk = new Player ('van Dijk', VanDijkImg, Holanda);
    const vinicius = new Player ('Vinícius Jr.', ViniciusImg, Brasil);
    const vlahovic = new Player ('Vlahović', VlahovicImg, Servia);

    //Jogadores por posições
    const goleiros = [alisson, courtois, ederson, maignan, mendy, neuer];
    const zagueiros = [alaba, marquinhos, militao, rubenDias, rudiger, vanDijk];
    const laterais = [alexanderArnold, cancelo, davies, hernandez, reeceJames, robertson];
    const meias = [deBruyne, kimmich, milinkovicSavic, modric, paqueta, tchouameni];
    const pontas = [luisDiaz, messi, rafaelLeao, salah, son, vinicius];
    const atacantes = [benzema, cristianoRonaldo, haaland, lewandowski, mbappe, vlahovic];

    //Controle da Posição Atual selecionada
    const [currentPosition, setCurrentPosition] = useState(null);

    //Posições individuais
    const [goleiro, setGoleiro] = useState(playerNull);
    const [zagueiroDireito, setZagueiroDireito] = useState(playerNull);
    const [zagueiroEsquerdo, setZagueiroEsquerdo] = useState(playerNull);
    const [lateralDireito, setLateralDireito] = useState(playerNull);
    const [lateralEsquerdo, setLateralEsquerdo] = useState(playerNull);
    const [meiaDireita, setMeiaDireita] = useState(playerNull);
    const [meiaEsquerda, setMeiaEsquerda] = useState(playerNull);
    const [meiaCentral, setMeiaCentral] = useState(playerNull);
    const [pontaDireita, setPontaDireita] = useState(playerNull);
    const [pontaEsquerda, setPontaEsquerda] = useState(playerNull);
    const [atacante, setAtacante] = useState(playerNull);

    //Todas posições
    const selecionados = [ goleiro, 
                        zagueiroDireito, zagueiroEsquerdo, lateralDireito, lateralEsquerdo, 
                        meiaDireita, meiaEsquerda, meiaCentral,
                        pontaDireita, pontaEsquerda, atacante ];


    return(
        <PlayersContext.Provider value={{
            currentPosition, setCurrentPosition, 
            playerNull, goleiros, zagueiros, laterais, meias, pontas, atacantes, selecionados,
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
            atacante, setAtacante
        }}>
            {children}
        </PlayersContext.Provider>
    );
    
};