import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Form from "./pages/Form";
import About from "./pages/About";
import Bookings from "./pages/Bookings";
import NotFound from "./NotFound";
import Nav from "./pages/Nav";
import Footer from "./pages/Footer";
import AdminSida from "./pages/AdminSida";
import EditCards from "./pages/UpdateCards";
import UserPage from "./AuthUser/UserPage";
import Contact from "./pages/Contact";

const Approute = ()=>{

    return (
        <div>
              
            <BrowserRouter>
                    <Nav/>
                    <Switch>
                    <Route path="/" component={App} exact   ></Route>
                    <Route path ="/form" exact component= {Form}></Route>
                    <Route path ="/about" exact component= {About}></Route>
                     <Route path ="/login" exact component= {EditCards}></Route> 
                    <Route path ="/adminsida" exact component= {AdminSida}></Route> 
                    <Route path="/userpage" exact component={UserPage}></Route>               
                    <Route path="/contact" exact component={Contact}></Route>
                    <Route path ="/bookings" exact component= {Bookings}></Route>
                    <Route component= {NotFound} exact></Route>
                    </Switch>
                    <Footer/>
            </BrowserRouter>

        </div>
    )
}

export default Approute; 