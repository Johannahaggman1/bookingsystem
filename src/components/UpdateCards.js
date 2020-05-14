import React, { Component } from "react";
import axios from "axios";
  
class UpdateCards extends Component {
  state = {
    cards: [],
    selectedCard: [],
    status: null,
    image: "",
  };
 
  async componentDidMount() {
    axios.get("http://localhost:1337/cards").then((res) => {
      this.setState({ cards: res.data });
    });
  }

  componentDidUpdate() {
    if (Object.keys(this.state.selectedCard).length > 0) {

      document.querySelector('input[name="title"]').value = this.state.selectedCard.title;
      document.querySelector('textarea[name="description"]').value = this.state.selectedCard.description;
      document.querySelector('input[name="price"]').value = this.state.selectedCard.price;

    }
  }
   onClickSelectedCard(e) {
    let selectedCardId = e.target.getAttribute("data-key");
    axios
      .get("http://localhost:1337/cards/" + selectedCardId)
      .then((res) => {
        this.setState({ selectedCard: res.data });
      });
  }

  onClickAbort() {
    this.setState({ selectedCard: [] });
  }

  onImgUploadChange(e) {
    this.setState({ image: e.target.files[0] });
    let previewOutput = document.querySelector(".card_img-top");
    previewOutput.src = URL.createObjectURL(e.target.files[0]);
  }
 
  onClickDelete(e) {
    const selectedCardId = e.target.getAttribute("data-key");
    axios({
      method: "delete",
      url: `http://localhost:1337/cards/${selectedCardId}`,
    })
      .then((response) => {
        console.log("Succsess");
        console.log(response);
        console.log(response.status);

        if (response.status === 200) {
          alert("Aktiviteten är nu Raderad");
          this.setState({ selectedCard: [] });
        }
      })
      .catch((error) => {
        console.log("An error occurred", error);
      });
  }
 
  onClickUploadImg() {
    const fileInput = document.querySelector("#imgUpload");
    fileInput.disabled = false;
  }
 
  async onSubmitToApi(e) {
    e.preventDefault();
    console.log(localStorage.getItem("jwt"));
 
    const fileInput = document.querySelector("#imgUpload");
 
 
    if (!fileInput.disabled) {
      // om man ädrat bilden
      //NÅTT FEL HÄR UNDER????
 
      const formData = new FormData();
      formData.append("files", this.state.image);
      formData.append("ref", "card"); 
      formData.append("refId", e.target.elements.id.value); 
      formData.append("field", "image"); 
 
      axios({
        method: "post",
        url: `http://localhost:1337/upload`,
        data: formData
      })
        .then((response) => {
          
          console.log("Picture uploaded to post");
          console.log(response);
          console.log(response.status);
          this.setState({ status: response.status });
          console.log("from state:", this.state.status);
        })
        .catch((error) => {
          console.log("An error occurred", error);
        });
    }
 
    axios({
      method: "put",
      url: `http://localhost:1337/cards/${e.target.elements.id.value}`,
      data: {
        title: e.target.elements.title.value,
        description: e.target.elements.description.value,
        price: e.target.elements.price.value,
      },

    })
      .then((response) => {
      
        console.log("Ändrad");
        console.log(response);
        console.log(response.status);
    
         if (response.status === 200) {
           alert("Aktiviteten är nu ändrad");
          this.setState({ selectedCard: [] });
        } 
      })
      .catch((error) => {
        console.log("An error occurred", error);
        
      });
  }
 
  render() {
    return (
    <div className="adm_content">
      <div className="update_wrapper">  
      <div className="UpdateCards_wrapper">
        
        {/* Cards */}
        <div className={"selectCard_wrapper"}>
          <h2 className="cardHeader">Eller ändra existerande aktivitet</h2>
        {Object.keys(this.state.selectedCard).length === 0 && (
          <div className={"selectCard_content"}>
            
            {this.state.cards.map((card) => (

              <div className={"selectCard"} key={card.id}>
                <div className={"card-body"}>

                  <h3 className={"card-title"}>{card.title}</h3>
                  <button className={"button__success btn btn-primary"} onClick={this.onClickSelectedCard.bind(this)} data-key={card.id} > Redigera </button>

                </div>
              </div>
            ))}
          </div>
        )} </div>
 
        {/* Valt kort för redigering */}
        {Object.keys(this.state.selectedCard).length > 0 && (
          <div className={"selectedCard_wrapper"}>

            <h5>Redigera:</h5>

            <form onSubmit={this.onSubmitToApi.bind(this)}>
              <img src={ "http://localhost:1337" + this.state.selectedCard.image.url} className={"card_img-top"} alt={"People"} style={{ width: "25rem" ,height: "15rem" }} />
              <label htmlFor={"imgUpload"} className={"button__secondary btn btn-primary"} onClick={this.onClickUploadImg.bind(this)}> Ändra bild </label>
              <input id={"imgUpload"} type="file" name="file" onChange={this.onImgUploadChange.bind(this)} disabled/>
              <input type="hidden" name="id" value={this.state.selectedCard.id}/>
              <input type="text" name="title" placeholder={"Ny titel"}/>
              <textarea className="descriptionUpdate" rows="5" type="text" name="description" placeholder={"Ny beskrivning"}/>
              <input type="number" name="price" placeholder={"Nytt pris"}/>
              <button  className={"button__success btn btn-primary"}> Spara ändringar </button>
            </form>

            
          <div className={"logout-goback-btn"}>
            <button className={"button__secondary btn btn-primary"} onClick={this.onClickAbort.bind(this)}> Tillbaka </button>
            <button className={"button__warning btn btn-primary del-btn"} onClick={this.onClickDelete.bind(this)} data-key={this.state.selectedCard.id}> Radera </button>
          </div>

          </div>
        )}
      </div>
      </div>
      </div>
    );
  }
}
 
export default UpdateCards;