import React, { Component } from "react";
import axios from "axios";
import UpdateCards from "../UpdateCards";




class AdminProfile extends Component {
    state = {
        image: "",
      };
    
      async onSubmitToApi(e) {
        e.preventDefault();
    
        /* --- Lägga till CARD--- */
    
        const res = await axios.post("http://localhost:1337/cards", {
          title: e.target.elements.title.value,
          description: e.target.elements.description.value,
          price: e.target.elements.price.value,
        });
    
        /* --- Ladda upp bild och referera till CARD--- */

        
        const data = new FormData();
        data.append("files", this.state.image);
        data.append("ref", "card"); // Refererar till table
        data.append("refId", res.data.id); // Hämtat post-id från vår post vi skapade.
        data.append("field", "image"); // Refererar till column i vår table
    
        const resPic = await axios.post("http://localhost:1337/upload", data);
        console.log(resPic);
      } 
    
      eventChange(e) {
        this.setState({ image: e.target.files[0] });
      } 

    logOut() {
        localStorage.clear();
        window.location.reload(false);
    }
    render() {
        return (
                               
            <div className=" adminContent_wrapper"> 

            <div className={"adminHeader_content"}>
            <h3>{this.props.userData} - Du är nu inloggad som admin </h3>  <button className="btn btn-primary logoutbtn" onClick={this.logOut.bind(this)}> Logga ut</button>  
            </div>
            <hr/>

            <div className="adminProfile_wrapper">  
                        <div className="postNewCard-form">
                        <h2 className="cardHeader">Lägg till ny aktivitet</h2>    
                        <form className="" onSubmit={this.onSubmitToApi.bind(this)}>
                            <input type="text" name="title" placeholder="Titel" />
                            <input type="text" name="description" placeholder="Beskrivning..." />
                            <input type="number" name="price" placeholder="Pris" />
                            <input type="file" name="file" onChange={this.eventChange.bind(this)} />
                            <button className="btn btn-primary">Publicera</button>
                        </form>
                        </div>
                    
                    <UpdateCards></UpdateCards>
                    </div>
                    </div>
                
        )
    }
}


export default AdminProfile;