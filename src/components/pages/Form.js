import React, {Component} from "react";

class Form extends Component {

    constructor(props){
        super(props)

        //initillerat state
        this.state = {
            name: undefined,
            appointmentTime: undefined,
            mobile:undefined
        }

    }


    handleOnChangeName = (e)=> {
        this.setState({name: e.target.value})
    }

    handleOnChangeTime = (e) => {
        this.setState({appointmentTime: e.target.value})
    }

    handleOnChangeMobile = (e) => {
        this.setState({mobile: e.target.value})
    }

    //e.target.value från värdet av input värdena/fältet. 

    //event 
    //ex på event= varje gång någon trycker på "bekräfta" ex.
    //skapa en metod
    //viktigt att den ligger utanför 
    handleOnSubmit(e) {
        e.preventDefault()
        console.log(e)
        console.log(e.target)

        //this.setState({})
    }
    //uppdatera state med hjälp av setState

    //form kommer att anropa med hjälp av event



    render(){
        return(
            <div className={"app_wrapper"}>
            <div className={"form_wrapper"}>

            <p className={"p-header"}>Boknings förfrågan:</p>
                <form onSubmit={this.handleOnSubmit}>
                    
                    <input type={"text"} placeholder={" Ange ditt namn"} onChange={this.handleOnChangeName}></input>
                    <input type={"text"} placeholder={" Ange din önskade tid"} onChange={this.handleOnChangeTime}></input>
                    <input type={"number"} placeholder={" Ange ditt nummer"} onChange={this.handleOnChangeMobile}></input>
                    <button type={"submit"} onSubmit={this.handleOnSubmit}>Bekräfta</button>
                </form>

                <div> {this.state.name}</div>
                <div> {this.state.appointmentTime}</div>
                <div> {this.state.mobile}</div>

            </div>
            </div>
        )
    }
}


export default Form;