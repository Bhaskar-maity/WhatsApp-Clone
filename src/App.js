import './App.css';
import  Sidebar  from "./Components/Sidebar";
import  Chat  from "./Components/Chat";
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">


      <div className="app_body">

        <Router>

          <Switch>

              <Route path="/app">
                <Sidebar />
                <Chat />
              </Route>

              <Route path="/">
                <h1>Home screen</h1>
              </Route>

              
            

          </Switch>

        </Router>
      </div>
    </div>
  );
}

export default App;
