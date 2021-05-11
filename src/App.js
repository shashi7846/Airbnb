
import './App.css';
import Home from './home'; 
import Header from './header';
import Footer from './footer';
import SearchPage from './searchpage';
import { BrowserRouter as Router,Link,Switch,Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
     <Router>
     <Header/>
     <Switch>
       <Route path="/search">
         <SearchPage/>
       </Route>
       <Route path="/">
         <Home/>
       </Route>
       </Switch>
       <Footer/>
       </Router>



    </div>
  )
}

export default App;
