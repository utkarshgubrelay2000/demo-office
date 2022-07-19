import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./pages/Home/Home";

// import { useRecoilValue } from 'recoil';
// import { studentState } from "./student-build/Atom";

function App() {
 // const {token} = useRecoilValue(studentState)
  return (
    <div className="App">
      <Router>
        <Switch>
        
            <Route path="/" exact component ={Home} />
        
        </Switch>   
      </Router>
    </div>
  );
}

export default App;
