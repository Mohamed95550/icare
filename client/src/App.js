import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Content from "./components/commons/content.component";
import Navbar from "./components/commons/navbar.component";
import Footer from "./components/commons/footer.component"


function App() {
  return (
    <Router>
     <div className="container-fluid ">
        <Navbar/>
        </div>
        <br/>
        <div className="container" id="content">
        <Content/>
        </div> 
        <div className="container-fluid">
        <Footer/>
        </div>  
    </Router>
  );
}
export default App;