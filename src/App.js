import {Switch, Route, BrowserRouter} from 'react-router-dom'
import Forgot from "./components/Forgot";
import Login from "./components/Login";
import Home from './components/Home';



const App = () => {
    return (
        <BrowserRouter>
        
       <Switch>
           <Route path='/login'>
               <Login />
           </Route>
           <Route path = '/'>
               <Home />
           </Route>
           <Route path = '/forgot'>
               <Forgot />
           </Route>
       </Switch>
       </BrowserRouter>
    )
}

export default App;
