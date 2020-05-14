import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Form from "./Form";
import About from "./About";
import Bookings from "./Bookings";
import NotFound from "./NotFound";
import Nav from "./Nav";
import Footer from "./Footer";
import AdminSida from "./AdminSida";
import EditCards from "./UpdateCards";
import UserPage from "./AuthUser/UserPage";

const Approute = ()=>{

    return (
        <div>
              
            <BrowserRouter>
                    <Nav/>
                    <Switch>
                    <Route path="/" component={App} exact   ></Route>
                    <Route path ="/form" exact component= {Form}></Route>
                    <Route path ="/about" exact component= {About}></Route>
                    {/* <Route path ="/register" exact component= {Register}></Route> */}
                     <Route path ="/login" exact component= {EditCards}></Route> 
                    <Route path ="/adminsida" exact component= {AdminSida}></Route>
                    {/* Test ("testuser nedan") ska raderas sen  */}
                    <Route path ="/userpage" exact component= {UserPage}></Route>
                    
                    {/* <Route path ="/fileupload" exact component= {FileUpload}></Route> */}
                    {/* <Route path ="/adminform" exact component= {Adminform}></Route> */}
                    <Route path ="/bookings" exact component= {Bookings}></Route>
                    <Route component= {NotFound} exact></Route>
                    </Switch>
                    <Footer/>
            </BrowserRouter>

        </div>
    )
}

export default Approute; 