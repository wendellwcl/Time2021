import { HashRouter } from "react-router-dom";

//Components
import Header from "./components/Header";
import Main from "./components/Main";

//Context
import { PlayersContextProvider } from "./context/PlayersContext";

function App() {
  return (
    <>
      <HashRouter>
        <PlayersContextProvider>
          <Header/>
          <Main/>
        </PlayersContextProvider>
      </HashRouter>
    </>
  );
};

export default App;