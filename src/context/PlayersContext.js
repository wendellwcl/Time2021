import { createContext, useState } from "react";

//Assets
import DefaultImg from "../assets/Players/Default.png";
//--
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
//--
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

    //DataBase Jogadores
    const PlayerNull = {img: DefaultImg};
    const alaba = {name: 'Alaba', img: AlabaImg, flag: Austria};
    const alexanderArnold = {name: 'Alexander-Arnold', img: AlexanderArnoldImg, flag: Inglaterra};
    const alisson = {name: 'Alisson', img: AlissonImg, flag: Brasil};
    const benzema = {name: 'Benzema', img: BenzemaImg, flag: Franca};
    const cancelo = {name: 'Cancelo', img: CanceloImg, flag: Portugal};
    const courtois = {name: 'Courtois', img: CourtoisImg, flag: Belgica};
    const cristianoRonaldo = {name: 'Cristiano Ronaldo', img: CristianoRonaldoImg, flag: Portugal};
    const davies = {name: 'Davies', img: DaviesImg, flag: Canada};
    const deBruyne = {name: 'de Bruyne', img: DeBruyneImg, flag: Belgica};
    const ederson = {name: 'Ederson', img: EdersonImg, flag: Brasil};
    const haaland = {name: 'Haaland', img: HaalandImg, flag: Noruega};
    const hernandez = {name: 'Hernández', img: HernandezImg, flag: Franca};
    const kimmich = {name: 'Kimmich', img: KimmichImg, flag: Alemanha};
    const lewandowski = {name: 'Lewandowski', img: LewandowskiImg, flag: Polonia};
    const luisDiaz = {name: 'Luis Díaz', img: LuisDiazImg, flag: Colombia};
    const maignan = {name: 'Maignan', img: MaignanImg, flag: Franca};
    const marquinhos = {name: 'Marquinhos', img: MarquinhosImg, flag: Brasil};
    const mbappe = {name: 'Mbappé', img: MbappeImg, flag: Franca};
    const mendy = {name: 'Mendy', img: MendyImg, flag: Senegal};
    const messi = {name: 'Messi', img: MessiImg, flag: Argentina};
    const milinkovicSavic = {name: 'Milinković-Savić', img: MilinkovicSavicImg, flag: Servia};
    const militao = {name: 'Militão', img: MilitaoImg, flag: Brasil};
    const modric = {name: 'Modrić', img: ModricImg, flag: Croacia};
    const neuer = {name: 'Neuer', img: NeuerImg, flag: Alemanha};
    const paqueta = {name: 'Paquetá', img: PaquetaImg, flag: Brasil};
    const rafaelLeao = {name: 'Rafael Leão', img: RafaelLeaoImg, flag: Portugal};
    const reeceJames = {name: 'Reece James', img: ReeceJamesImg, flag: Inglaterra};
    const robertson = {name: 'Robertson', img: RobertsonImg, flag: Escocia};
    const rubenDias = {name: 'Rúben Dias', img: RubenDiasImg, flag: Portugal};
    const rudiger = {name: 'Rüdiger', img: RudigerImg, flag: Alemanha};
    const salah = {name: 'Salah', img: SalahImg, flag: Egito};
    const son = {name: 'Son', img: SonImg, flag: CoreiaDoSul};
    const tchouameni = {name: 'Tchouaméni', img: TchouameniImg, flag: Franca};
    const vanDijk = {name: 'van Dijk', img: VanDijkImg, flag: Holanda};
    const vinicius = {name: 'Vinícius Jr.', img: ViniciusImg, flag: Brasil};
    const vlahovic = {name: 'Vlahović', img: VlahovicImg, flag: Servia};

    //Database Posições
    const goleiros = [alisson, courtois, ederson, maignan, mendy, neuer];
    const zagueiros = [alaba, marquinhos, militao, rubenDias, rudiger, vanDijk];
    const laterais = [alexanderArnold, cancelo, davies, hernandez, reeceJames, robertson];
    const meias = [deBruyne, kimmich, milinkovicSavic, modric, paqueta, tchouameni];
    const pontas = [luisDiaz, messi, rafaelLeao, salah, son, vinicius];
    const atacantes = [benzema, cristianoRonaldo, haaland, lewandowski, mbappe, vlahovic];

    //String - Posição Atual
    const [currentPosition, setCurrentPosition] = useState(null);

    //Posições
    const [goleiro, setGoleiro] = useState(PlayerNull);
    const [zagueiroDireita, setZagueiroDireita] = useState(PlayerNull);
    const [zagueiroEsquerda, setZagueiroEsquerda] = useState(PlayerNull);
    const [lateralDireita, setLateralDireita] = useState(PlayerNull);
    const [lateralEsquerda, setLateralEsquerda] = useState(PlayerNull);
    const [meiaDireita, setMeiaDireita] = useState(PlayerNull);
    const [meiaEsquerda, setMeiaEsquerda] = useState(PlayerNull);
    const [meiaCentral, setMeiaCentral] = useState(PlayerNull);
    const [pontaDireita, setPontaDireita] = useState(PlayerNull);
    const [pontaEsquerda, setPontaEsquerda] = useState(PlayerNull);
    const [atacante, setAtacante] = useState(PlayerNull);

    return(
        <PlayersContext.Provider value={{
            currentPosition, setCurrentPosition,
            goleiros, zagueiros, laterais, meias, pontas, atacantes,
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