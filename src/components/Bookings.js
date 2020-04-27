import React, {Component} from "react";

class Form extends Component {

    constructor(props){
        super(props)

        //initillerat state
        this.state = {
            appointmentTime: "29/4 kl.10:00",
            appointmentType: "Online training"
        }

    }

    render(){
        return(
            <div className={"app_wrapper"}>
            <div className={"bookings_wrapper"}>
                <p className={"p-header"}>Dina Bokningar:</p>

            <div className={"bookings_content"}>

                <div className={"booning-info"}>
        <p>{this.state.appointmentType} {"- "}{this.state.appointmentTime}</p>
                    
                </div>

                <div className={"bookings_btn"}>
                <button className={"btn btn-outline-success my-2 my-sm-0"} id={"btn-booking"}>Boka om</button>
                <button className={"btn btn-primary"} id={"btn-cancel"}>Avboka</button>
                </div>

            </div>

            </div>
            </div>
        )
    }
}


export default Form;