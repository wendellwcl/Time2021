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
      <PlayersContextProvider>
        <Header/>
        <Main/>
      </PlayersContextProvider>
    </div>
  );
}

export default App;