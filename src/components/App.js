import React , {Component} from "react";
import Card from "./Card";
import axios from "axios";


class App extends Component  {

    

        state = {
            cards: []
        }

        onClickApi () {
            axios.get("http://localhost:1337/cards").then( res=>{
                console.log(res.data);
                this.setState({cards:res.data})
            })
        }

render() {

    return (
       
            <div className={"app_wrapper"}>
            <div className={"card_wrapper"}>

            {this.state.cards.map((card) =>
                      <Card 
                      key={card.id}
                      title={card.title} 
                      price={card.price}
                      description= {card.description}
                      image={"http://localhost:1337"+card.image.url}
                      />
                )} 

               

            </div>
             <button className={"getCards-btn"} onClick={this.onClickApi.bind(this)}><span>Söker du nya utmaningar? Klicka här!</span></button>
            <div className={"about-landing_wrapper"}>   
            <div className={"workers_wrapper"}>
                <div className={"workers-img_wrapper"}>
             <div className={"worker-img-1"}></div>   
             <div className={"worker-img-2"}></div>
             <div className={"worker-img-3"}></div>
             </div>
             <p>Vi jobbar här</p>
             </div>
            <button className={"insta-btn"}>
                <p>Följ oss på Instagram</p>
                <i className={"fab fa-instagram fa-3x"}></i>
                </button>
           
            </div> 
            </div>
        
       
    )
}
}

export default App;