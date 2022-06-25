import { HashRouter } from "react-router-dom";

//Css
import "./app.css"

//Components
import Header from "./components/Header";
import Main from "./components/Main"

//Context
import { PlayersContextProvider } from "./context/PlayersContext";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <PlayersContextProvider>
          <Header/>
          <Main/>
        </PlayersContextProvider>
      </HashRouter>
    </div>
  );
}

export default App;